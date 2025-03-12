import Image from "next/image";
import RegisterForm from "./components/RegisterForm";
import Link from "next/link";
import SocialSignIn from "@/components/SocialSignIn";

const RegisterPage = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse md:flex-row gap-5">
          <div className="text-center lg:text-left">
            <Image src="/assets/images/login/login.svg" alt="logo" width={500} height={500} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm border">
            {/* Register Form page */}
            <RegisterForm />
            <SocialSignIn />
            <p className="text-center my-4">Already have an account? <Link href={"/login"} className="text-[#ff3811]">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default RegisterPage;