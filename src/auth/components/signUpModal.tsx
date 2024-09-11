"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AuthFlow } from "../types"
import { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import { TriangleAlert } from "lucide-react"

interface SignUpModalProps{
    setPage: (page:AuthFlow) => void
}

const SignUpModal: React.FC<SignUpModalProps> = ({setPage}) => {

    const {signIn} = useAuthActions()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    const AuthProvider = (value: "github" | "google") => {
        setLoading(true)
        signIn(value)
        .finally(() => {
            setLoading(false)
        })
    }

    const CredentialsSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setError("Password do not match")
            return;
        }

        setLoading(true)
        signIn("password", {name,email,password,flow:"signUp" })
        .catch(() => {
            setError("Password must contain caps,small,number,special character");
        })
        .finally(() => {
            setLoading(false)
        })
    }

    

    return (
        <Card className="w-full h-full p-8 bg-purple-100">
            <CardHeader className="px-0 pt-0 font-medium">
                Sign Up To Continue
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
                <form onSubmit={CredentialsSignUp} className="space-y-2.5">
                <Input 
                    disabled = {loading}
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    placeholder="Name"
                    required />

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
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="Password"
                    type="password"
                    required />
                    
                    <Input 
                    disabled = {loading}
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                    placeholder="Confirm Password"
                    type="password"
                    required />
                    <Button type="submit" className="w-full" size={"lg"} disabled={loading} >Continue</Button>
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
                    Already have an account? <span onClick={() => setPage("signIn")} className="text-purple-700 hover:underline cursor-pointer">Sign in</span>
                </p>
            </CardContent>
        </Card>
    )
}

export default SignUpModal