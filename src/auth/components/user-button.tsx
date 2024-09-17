"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "../hooks/use-current-user";
import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

const UserButton = () => {
    const { signOut } = useAuthActions();
    const { data, isLoading } = getCurrentUser();

    if (isLoading) {
        return <Loader className="size-4 animate-spin text-muted-foreground" />;
    }

    if (!data) {
        return null;
    }

    const { image, name, email } = data;
    const avatarFallback = name!.charAt(0).toUpperCase();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage alt={name} src={image} />
                    <AvatarFallback className="bg-purple-700 text-white">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="bottom" className="w-40 mt-1 mr-4">
                <DropdownMenuItem onClick={() => signOut()} className="h-10">
                    <LogOut className="size-5 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserButton;