"use client";

import {  UserIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Account from "./Account";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { ToggleTheme } from "@/components/ui/ToggleTheme";
import { Button } from "@/components/ui/button";


export default function NavBar({ toggleSidebar }: { toggleSidebar: () => void }) {
    const user = useQuery({
        queryKey: ["user"],
        queryFn: () => api.getCurrentUser(),
    });

    const [showAccount, setShowAccount] = useState(false);
    return (
        <header className="flex max-w-screen bg-background items-center justify-evenly border-b shadow-xl py-4 md:pr-6 md:px-12 sm:flex-row flex-col">
            <div className="flex md:mb-0 mb-2 justify-evenly items-center w-full sm:w-auto">
                <ToggleTheme />
                <Button asChild variant="link" className="text-2xl font-bold font-serif">
                    <Link href={"/"} >ElectroBuy</Link>
                </Button>
                <Button variant="link" onClick={toggleSidebar} className="lg:hidden">
                    <Bars3Icon className="w-6 h-6" />
                </Button>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative flex">
                    <Button variant={"link"} className="mr-4" asChild><Link href={"/pages/about"}>About us</Link></Button>
                    <Button 
                        variant="link"
                        onClick={() => setShowAccount(!showAccount)} 
                        className="flex items-center gap-2"><UserIcon width={25} />
                        Account &#x2193;
                    </Button>
                    {showAccount && <Account signOut={() => signOut()} />}
                </div>
                {user.data ?
                    <Link href={"/pages/shoppingcart"} className="flex items-center">
                        <ShoppingCartIcon width={25} />
                        <span>({user.isSuccess && user.data.carts.length})</span>
                    </Link>
                    :
                    <Link href={"/pages/shoppingcart"} className="flex items-center">
                        <ShoppingCartIcon width={25} />
                    </Link>
                }
            </div>
        </header>
    );
}
