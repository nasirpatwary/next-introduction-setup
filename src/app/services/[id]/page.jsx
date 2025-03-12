import DynamicPage from "@/components/DynamicPage";
import SectionTitle from "@/components/SectionTitle";
import dbConnect, { dataNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServicesDetailsPage = async ({ params }) => {
    const p = await params
    const singleService = await dbConnect(dataNames.services).findOne({ _id: new ObjectId(p.id) })
    return (
        <div>
            {/* banner section start*/}
            <section className="relative">
                <DynamicPage />
                <SectionTitle toTitle={"Service Details"} boTitle={"Home/Service Details"} />
            </section>
            {/* banner section end*/}

            {/* dynamic details start*/}
            <section className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <Image src={singleService.img} width={800} height={50} alt={singleService.title} />
                </div>
                <div className="col-span-4">
                    <h1 className="bg-[#ff3811] text-center text-[#fdfdfd]">Services</h1>
                </div>
            </section>
            {/* dynamic details end*/}
            <p>{JSON.stringify(singleService._id)}</p>
        </div>
    );
};

export default ServicesDetailsPage;