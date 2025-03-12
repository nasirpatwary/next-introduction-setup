import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialSignIn from '@/components/SocialSignIn';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col-reverse md:flex-row gap-5">
                <div className="text-center lg:text-left">
                    <Image src="/assets/images/login/login.svg" alt="logo" width={500} height={500} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm border">
                    {/* Login Form page */}
                    <LoginForm />
                    <SocialSignIn />
                    <p className="text-center my-4">Have an account? <Link href={"/register"} className="text-[#ff3811]">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;