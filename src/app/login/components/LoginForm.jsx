"use client"
import { signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const LoginForm = () => {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast("Submited....")
        try {
            const res = await signIn("credentials", { email,
                password, 
                callbackUrl: "/", 
                redirect: false 
               });
           if (res.ok) {
               toast.success("Logged In Successfully")
               router.push("/")
               form.reset()
           }else{
               toast.error("Failed to log In")
           }
        } catch (error) {
            console.log(error);
            toast.error("Failed to log In")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Your Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Your Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign In</button>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;