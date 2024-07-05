"use client"
import Link from "next/link";
import SignUpForm from "./SignUpForm";
import NavBar from "@/app/MainComponents/navbar/NavBar";
import { Button } from "@/components/ui/button";
import {useState} from "react"

const SignUpPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <NavBar toggleSidebar={toggleSidebar}/>
            <div className="flex flex-col items-center justify-center gap-3 md:mt-8">
                <div className="md:col-span-2 flex items-center justify-center">
                    <p className="text-center p-2">Already Signed up?</p>
                    <Button asChild variant="link">
                        <Link href="/auth/signin">Sign In</Link>
                    </Button>
                </div>
                <div className="w-full">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;