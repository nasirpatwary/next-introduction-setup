"use client"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RiDeleteBinLine } from "react-icons/ri";
const DeleteBooingButton = ({ id }) => {
    const router = useRouter()
    const handleDelete = async (id) => {
        const res = await fetch(`https://nextjs-car-doctor-five.vercel.app/api/service/${id}`, {
            method: "DELETE"
        })
        const data = await res.json()
        console.log("data --->",data);
        if (data.deletedCount > 0) {
            toast.success("deleted success") 
            router.refresh()
        }
    }
    return (
        <div>
            <button onClick={() => handleDelete(id)} >
            <RiDeleteBinLine size={25} />
            </button>
        </div>
    );
};

export default DeleteBooingButton;