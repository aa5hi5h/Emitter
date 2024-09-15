import { v } from "convex/values";
import { mutation,  internalMutation, query } from "./_generated/server";
import { auth } from "./auth";
import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

export const createProject = mutation({
  args: { title: v.string(), savedState: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity()
    if (!user) {
      throw new Error("Unauthenticated");
    }

    console.log("User identity:", user);

    
    const userId = user.subject

    console.log("User ID:", userId);


    if (userId === null) {
      throw new Error("Invalid user ID");
    }

    console.log("USER_ID",userId)

    const baseUserId = userId.split('|')[0];
    const existingProjects = await ctx.db
      .query("projects")
      .withIndex("by_user", (q) => q.gt("userId", baseUserId).lt("userId", baseUserId + "\uffff"))
      .collect();

    if (existingProjects.length >= 5) {
      throw new Error("Project limit reached");
    }

    const projectId = await ctx.db.insert("projects", {
      title: args.title,
      userId,
      savedState: args.savedState,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return projectId;
  },
});

export const getProjects = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }

    
    const userId = identity.subject
    if (userId === null) {
      throw new Error("Invalid user ID");
    }

    console.log("USER_ID_FETCH",userId)

    const baseUserId = userId.split('|')[0];
  const projects = await ctx.db
  .query("projects")
  .withIndex("by_user", (q) => q.gt("userId", baseUserId).lt("userId", baseUserId + "\uffff"))
  .collect();


    return projects;
  },
});

export const updateProject = mutation({
  args: { projectId: v.id("projects"), title: v.string(), savedState: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }

    
    const userId = identity.subject
    if (userId === null) {
      throw new Error("Invalid user ID");
    }

    const baseUserId = userId.split('|')[0];
    const project = await ctx.db.get(args.projectId);

     if (!project || !project.userId.startsWith(baseUserId)) {
      throw new Error("Project not found or access denied");
    }

    await ctx.db.patch(args.projectId, {
      title: args.title,
      savedState: args.savedState,
      updatedAt: Date.now(),
    });

    return args.projectId;
  },
});

export const deleteProject = mutation({
  args: { projectId: v.id("projects") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated");
    }

    
    const userId = identity.subject
    if (userId === null) {
      throw new Error("Invalid user ID");
    }

    const baseUserId = userId.split('|')[0];
    const project = await ctx.db.get(args.projectId);

     if (!project || !project.userId.startsWith(baseUserId)) {
      throw new Error("Project not found or access denied");
    }

    await ctx.db.delete(args.projectId);

    return args.projectId;
  },
});

export const getProject = query({
  args: { projectId: v.id("projects") },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.projectId);
    if (!project) {
      throw new Error("Project not found");
    }
    return project;
  },
});

export const createProjectWithTemplate = mutation({
  args: { title: v.string(), savedState: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const projectId = await ctx.db.insert("projects", {
      title: args.title,
      userId: "anonymous",
      savedState: args.savedState,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    
    await ctx.scheduler.runAfter(30 * 60 * 1000, internal.project.deleteExpiredProject, { projectId });

    return projectId;
  },
});

export const deleteExpiredProject = internalMutation({
  args: { projectId: v.id("projects") },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.projectId);
    if (project && project.userId === "anonymous") {
      await ctx.db.delete(args.projectId);
    }
  },
});