"use client"
import { useState } from "react"
import SignInModal from "./signInModal"
import SignUpModal from "./signUpModal"
import { AuthFlow } from "../types"


const AuthPage = () => {

    const [page , setPage] = useState<AuthFlow>("signIn")
   
    return (
        <div className="h-[90vh] flex items-center justify-center bg-purple-50">
            <div className="md:h-auto ">
                { page === "signIn" ? <SignInModal setPage={setPage} /> :  <SignUpModal setPage={setPage} />}
            </div>
        </div>
    )
}

export default AuthPage