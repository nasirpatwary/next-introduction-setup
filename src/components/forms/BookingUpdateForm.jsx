"use client"
import { useSession } from "next-auth/react";
import { IoCalendarNumberOutline  } from "react-icons/io5";
import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const BookingUpdateForm = ({data}) => {
    console.log(data);
    const router = useRouter()
    const {data: sesstion} = useSession()
    const [startDate, setStartDate] = useState(new Date());
    const handldeOrderSubmit = async e => {
        toast.success("Submit Success...")
        e.preventDefault()
        const form = e.target;
        const phone = form.phone.value;
        const address = form.address.value;
        const bookingPayload = {
            phone,
            address,
            date: startDate,
        }
        const res = await fetch(`https://nextjs-car-doctor-five.vercel.app/api/my-bookings/${data._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingPayload)
        })
        const orderPost = await res.json()
        if (orderPost.modifiedCount > 0) {
            toast.success("order confirm.......")
            router.push("/my-bookings")
        }
        console.log("update succesfully",orderPost);
    }
    return (
        <div>
            <h2 className="text-center text-xl font-semibold">{data?.title}</h2>
            <form onSubmit={handldeOrderSubmit}>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12 md:col-span-6'>
                        <label className="fieldset-label">Name</label>
                        <input type="text" defaultValue={sesstion?.user?.name} readOnly name="name" className="input outline-0 w-full" placeholder="Services Name" />
                        <label className="fieldset-label">Due Amount</label>
                        <input type="text" defaultValue={data?.service_price} readOnly name="price" className="input outline-0 w-full" placeholder="Due Amount" />
                        <label className="fieldset-label">Phone</label>
                        <input type="text" defaultValue={data?.phone} name="phone" className="input outline-0 w-full" placeholder="Enter Your Phone Number" />
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <label className="fieldset-label">Email</label>
                        <input type="email" defaultValue={sesstion?.user?.email} readOnly name="email" className="input outline-0 w-full" placeholder="Enter Your Email" />    
                        <div className="relative z-10">
                        <label className="fieldset-label">Date</label>
                        <div className="w-full input">
                        <DatePicker defaultValue={data?.date} selected={startDate} onChange={(date) => setStartDate(date)} />
                    
                        </div>
                        <IoCalendarNumberOutline size={20} className="absolute right-3 top-[35px]" />
                        </div>                  
                        <label className="fieldset-label">Present Address</label>
                        <input type="text" defaultValue={data?.address} name="address" className="input outline-0 w-full" placeholder="Your Address" />
                    </div>
                </div>
                <button className="btn btn-neutral mt-4 w-full">Update Confirm</button>
            </form>
        </div>
    );
};

export default BookingUpdateForm;