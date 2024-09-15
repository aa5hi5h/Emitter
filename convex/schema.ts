import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable} from "convex/server"
import { v } from "convex/values";

const schema = defineSchema({
    ...authTables,
    projects: defineTable({
        title: v.string(),
        userId:  v.string(),
        savedState: v.optional(v.string()),
        createdAt: v.number(),
        updatedAt: v.number()
    }).index("by_user",["userId"]),
    templates: defineTable({
        title: v.string(),
        data: v.string(),
        image: v.optional(v.string())
    })
});

export default schema