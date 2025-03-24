"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

const SocialSignIn = () => {
    const router = useRouter()
    const { data: sesstion } = useSession()
    const handleSocialSignIn = (providerName) => {
        signIn(providerName)
    }
    useEffect(() => {
        if (sesstion?.user) {
            router.push("/")
            toast.success(`${sesstion?.user.name} Successfully Sign In account`)
        }
    }, [sesstion?.user])
    // console.log("Test Social Provider", sesstion);
    return (
        <>
            <p className="text-center mb-4">Or Sign In with</p>
            <div className="flex items-center justify-center gap-8">
                <div onClick={() => handleSocialSignIn("google")} className="border bg-sky-100 p-2 rounded-full">
                    <FcGoogle type="button" size={25} />
                </div>
                <div onClick={() => handleSocialSignIn("github")} className="border bg-sky-100 p-2 rounded-full">
                    <FaGithub type="button" size={25} />
                </div>
            </div>
        </>
    );
};

export default SocialSignIn;