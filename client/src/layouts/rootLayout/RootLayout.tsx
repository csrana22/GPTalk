import { Link, Outlet } from "react-router-dom"
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const queryClient = new QueryClient();

const Rootlayout = () =>{

    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
        <QueryClientProvider client={queryClient}>
        <div className="px-[64px] py-[16px] h-screen flex flex-col">
            <header className="flex items-center justify-between">
                <Link to="/" className="flex items-center font-bold gap-[8px]">
                    <img className="w-[32px] h-[32px]" src="/logo.png" alt="" />
                    <span>GPTalk</span>
                </Link>
                <div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <main className="flex-1 overflow-hidden">
                <Outlet />
            </main>
        </div>
        </QueryClientProvider>
        </ClerkProvider>
    )
}

export default Rootlayout;