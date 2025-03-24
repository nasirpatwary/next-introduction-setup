import BookingTable from '@/components/table/BookingTable';
import { headers } from 'next/headers';
const fetchBooings = async () => {
    const res = await fetch(`https://nextjs-car-doctor-five.vercel.app/api/service`, {
        headers: new Headers(await headers()) 
    })
    const myBooking = await res.json()
    return myBooking
}
const MyBookingsPage = async () => {
    const bookings = await fetchBooings()
    return (
        <BookingTable booking={bookings} />
    );
};

export default MyBookingsPage;