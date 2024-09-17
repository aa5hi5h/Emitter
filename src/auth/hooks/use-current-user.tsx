import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"


export const getCurrentUser = () => {
    const data = useQuery(api.user.currentUser);
    const isLoading = data === undefined;
    return { data, isLoading };
};