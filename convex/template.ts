import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { auth } from "./auth";

export const getTemplates = query({
    handler: async (ctx) => {
        const templates = await ctx.db.query("templates").collect();

        console.log("TEMPLATES",templates)
        return templates;
      },
    });

    export const createProjectFromTemplate = mutation({
      args: { 
        templateId: v.id("templates")
      },
      handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
          throw new Error("Unauthenticated");
        }
    
        const userId = identity.subject;
        if (!userId) {
          throw new Error("Invalid user ID");
        }
    
        const baseUserId = userId.split('|')[0];
        const existingProjects = await ctx.db
          .query("projects")
          .withIndex("by_user", (q) => q.gt("userId", baseUserId).lt("userId", baseUserId + "\uffff"))
          .collect();
    
        if (existingProjects.length >= 5) {
          throw new Error("Project limit reached");
        }
    
        // Fetch the template
        const template = await ctx.db.get(args.templateId);
        if (!template) {
          throw new Error("Template not found");
        }
    
        // Create a new project based on the template
        const projectId = await ctx.db.insert("projects", {
          title: template.title, // Use the template's title for the project
          userId: userId,
          savedState: template.data, // Use the template data as the initial state
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });
    
        return projectId;
      },
    });
    