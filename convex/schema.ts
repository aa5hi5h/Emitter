import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable} from "convex/server"
import { v } from "convex/values";

const schema = defineSchema({
    ...authTables,
    projects: defineTable({
        title: v.string(),
        userId:  v.string(),
        savedState: v.optional(v.any()),
        createdAt: v.number(),
        updatedAt: v.number()
    }).index("by_user",["userId"])
});

export default schema