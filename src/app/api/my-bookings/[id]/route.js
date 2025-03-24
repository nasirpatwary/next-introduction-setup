import { authOptions } from "@/lib/authOptions"
import dbConnect, { dataNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

const bookingCollection = dbConnect(dataNames.bookingService)
export const GET = async (req, { params }) => {
    const id = await params.id
    const query = { _id: new ObjectId(id) }
    const sesstion = await getServerSession(authOptions)
    const singleBooking = await bookingCollection.findOne(query)
    const email = sesstion?.user?.email
    // console.log("email --->", email,"singleBooking --->", singleBooking.email);
    const isExistEmail = email === singleBooking?.email;
    if (isExistEmail) {
        return NextResponse.json(singleBooking)
    } else {
        return NextResponse.json({ message: "Forbidden Get Action" }, { status: 403 })
    }
}

export const PATCH = async (req, { params }) => {
    const id = await params.id;
    const body = await req.json()
    const sesstion = await getServerSession(authOptions)
    const query = { _id: new ObjectId(id) }
    const serverEmail = await bookingCollection.findOne(query)
    const email = sesstion?.user?.email
    const isExistEmail = email === serverEmail?.email
    if (isExistEmail) {
        const filter = {
            $set: {
                ...body
            }
        }
        const option = {
            upsert: true
        }
        const updateBookings = await bookingCollection.updateOne(query, filter, option)
        revalidatePath("/my-bookings")
        return NextResponse.json(updateBookings)
    }
    else {
        return NextResponse.json({ message: "Forbidden update Action" }, { status: 403 })
    }
}