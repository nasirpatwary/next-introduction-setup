import BookingUpdateForm from "@/components/forms/BookingUpdateForm";
import { headers } from "next/headers";

const BookingUpdatePage = async ({params}) => {
    const id = await params?.id;
    const res = await fetch(`https://nextjs-car-doctor-five.vercel.app/api/my-bookings/${id}`, {
        headers: new Headers(await headers()) 
    })
    const data = await res.json()
    return (
        <div>
            <BookingUpdateForm data={data} />
        </div>
    );
};

export default BookingUpdatePage;