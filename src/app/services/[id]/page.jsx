import DynamicPage from "@/components/DynamicPage";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const ServicesDetailsPage = async ({ params }) => {
    const id = await params.id
    const res = await fetch(`https://nextjs-car-doctor-five.vercel.app/api/service/${id}`)
    const singleService = await res.json()
    return (
        <div>
            {/* banner section start*/}
            <section className="relative">
                <DynamicPage />
                <SectionTitle toTitle={"Service Details"} boTitle={"Home/Service Details"} />
            </section>
            {/* banner section end*/}

            {/* dynamic details start*/}
            <section className="grid grid-cols-12 gap-4 mt-5">
                <div className="col-span-9">
                    <Image className="object-fill" src={singleService.img} width={900} height={50} alt={singleService.title} />
                </div>
                <div className="col-span-3">
                    <Link href={`/checkout/${singleService._id}`}>
                        <button className="bg-[#ff3811] p-2 text-center w-full mx-auto text-[#fdfdfd]">Checkout</button>
                    </Link>
                    <div className="border">
                        <fieldset className="fieldset">
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </section>
            {/* dynamic details end*/}
        </div>
    );
};

export default ServicesDetailsPage;