import { authOptions } from "@/lib/authOptions";
import dbConnect, { dataNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
// mongodb collection
export const DELETE = async (req, { params }) => {
    const bookingsCollection = dbConnect(dataNames.bookingService)
    const id = await params?.id
    const query = { _id: new ObjectId(id) }
    const sesstion = await getServerSession(authOptions)
    const currentBooking = await bookingsCollection.findOne(query)
    // console.log("mongodb dbConnect --->", currentBooking);
    // console.log(sesstion?.user?.email, "===", currentBooking?.email);
    const isExistEmail = sesstion?.user?.email === currentBooking?.email;
    // user validation
    if (isExistEmail) {
        const deleteResponse = await bookingsCollection.deleteOne(query)
        revalidatePath("/my-bookings")
        return NextResponse.json(deleteResponse)
    } else {
        return NextResponse.json({ successa: false, message: "Forbidden Action" })
    }
}

export const GET = async (req, { params }) => {
    const serviceCollection = dbConnect(dataNames.services)
    const id = await params?.id;
    const data = await serviceCollection.findOne({ _id: new ObjectId(id) })
    return NextResponse.json(data)
}