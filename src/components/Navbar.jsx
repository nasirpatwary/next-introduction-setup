"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const {data: session, status} = useSession()
    console.log(session);
    const navMenu = <>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/services">Services</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/contacts">Contacts</Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {navMenu}
                       </ul>
                </div>
                <Link href="/" className="text-xl">
                <Image width={80} height={80} src="/assets/logo.svg" alt="brand logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-base gap-5 menu-horizontal px-1">
                   {navMenu}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {
                    status === "authenticated" ? <><button className="btn btn-outline" onClick={() => signOut()}>Sign Out</button></> : 
                    <>
                     <Link href="/login" className="btn btn-outline">Login</Link>
                     <Link href="/register" className="btn btn-outline">Regiter</Link>
                    </>
                }
                <a className="btn btn-outline">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;