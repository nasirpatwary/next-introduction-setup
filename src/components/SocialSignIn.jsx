"use client"
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin2 } from "react-icons/im";
import { BiLogoFacebook } from "react-icons/bi";

const SocialSignIn = () => {
    return (
       <>
       <p className="text-center mb-4">Or Sign In with</p>
        <div className="flex items-center justify-center gap-8">
            <div className="border bg-sky-100 p-2 rounded-full">
            <FcGoogle size={25} />
            </div>
            <div className="border bg-sky-100 p-2 rounded-full">
            <ImLinkedin2 size={25} />
            </div>
            <div className="border bg-sky-100 p-2 rounded-full">
            <BiLogoFacebook size={25} />
            </div>
        </div>
       </>
    );
};

export default SocialSignIn;