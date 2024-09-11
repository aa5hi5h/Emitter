"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AuthFlow } from "../types"
import { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react"

interface SignInModalProps{
    setPage: (page: AuthFlow) => void
}

const SignInModal : React.FC<SignInModalProps>= ({setPage}) => {

    const {signIn} = useAuthActions()

    const [email,setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    const AuthProvider = (value: "github" | "google") => {
        setLoading(true)
        signIn(value)
        .finally(() => {
            setLoading(false)
        })
    }

    const CredentialsSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        
        setLoading(true)
        signIn("password", {email,password,flow:"signIn" })
        .catch(() => {
            setError("Invalid email or password");
        })
        .finally(() => {
            setLoading(false)
        })
    }
    return (
        <Card className="w-full h-full p-8 bg-purple-100">
            <CardHeader className="px-0 pt-0 font-medium">
                Login To Continue
                <CardDescription className="pt-1">
                Use your email or another service to continue
            </CardDescription>
            </CardHeader>
            {error && (
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert className="size-4" />
                    <p>{error}</p>
                </div>
            ) }
            <CardContent className="space-y-5 px-0 pb-0">
                <form onSubmit={CredentialsSignIn} className="space-y-2.5">
                    <Input 
                    disabled = {loading}
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    placeholder="Email"
                    type="email"
                    required />

                    <Input 
                    disabled = {loading}
                    value={password}
                    onChange={(e) => {setPassWord(e.target.value)}}
                    placeholder="Password"
                    type="password"
                    required />
                    <Button type="submit" className="w-full" size={"lg"} disabled={false} >Continue</Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                <Button 
                disabled={loading}
                variant={"outline"}
                onClick={() => AuthProvider("google")}
                size={"lg"}
                className="w-full relative"
                >
                    Continue with Google
                </Button>
                <Button 
                disabled={loading}
                variant={"outline"}
                onClick={() => AuthProvider("github")}
                size={"lg"}
                className="w-full relative"
                >
                    Continue with Github
                </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don&apos;t have an account? <span onClick={() => setPage("signUp")} className="text-purple-700 hover:underline cursor-pointer">Sign up</span>
                </p>
            </CardContent>
        </Card>
    )
}

export default SignInModal