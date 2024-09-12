import { auth } from "./auth";
import { query } from "./_generated/server"

export const currentUser = query({
    args: {},
    handler: async(ctx) => {
        const userId = await auth.getUserId(ctx);

        if( userId === null){
            return null
        }
        return await ctx.db.get(userId)
    }
})