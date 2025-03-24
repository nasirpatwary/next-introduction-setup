import { authOptions } from "@/lib/authOptions"
import dbConnect, { dataNames } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    const sesstion = await getServerSession(authOptions)
    if (sesstion) {
        const email = sesstion?.user?.email;
        const myBooking = await dbConnect(dataNames.bookingService).find({email}).toArray()
        return NextResponse.json(myBooking)
    }
    return NextResponse.json([])
}


export const POST = async (req) => {
    const body = await req.json()
    const serviceData = await dbConnect(dataNames.bookingService).insertOne(body)
    return NextResponse.json(serviceData)
}