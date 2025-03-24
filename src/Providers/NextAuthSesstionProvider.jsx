"use client"
import { SessionProvider } from "next-auth/react";
const NextAuthSesstionProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default NextAuthSesstionProvider;