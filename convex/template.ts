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