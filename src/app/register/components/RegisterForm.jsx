"use client"
import registerUser from "@/app/actions/auth/registerUser";
const RegisterForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       await registerUser({name, email, password});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Your Name" />
                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Your Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Your Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign Up</button>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;