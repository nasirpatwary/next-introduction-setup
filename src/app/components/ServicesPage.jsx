import dbConnect, { dataNames } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
const ServicesPage = async () => {
    const data = await dbConnect(dataNames.services).find({}).toArray()
    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto">
            {
                data.map(item => {
                    return <div key={item._id} className="md:col-span-6 rounded-md lg:col-span-4 p-4 h-full border">
                        <figure className="w-full h-3/4 flex justify-center items-center">
                        <Image className="w-full h-full rounded-md object-fill" src={item.img} alt={item.title} width={300} height={100} />
                        </figure>
                         <div className="my-3 space-y-1">
                         <p className="text-2xl font-medium">{item.title}</p>
                        <div className="flex justify-between text-[#ff3811] text-lg items-center">
                         <p>Price: ${item.price}</p>
                         <Link href={`/services/${item._id}`}><FaLongArrowAltRight /></Link>
                         </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default ServicesPage;