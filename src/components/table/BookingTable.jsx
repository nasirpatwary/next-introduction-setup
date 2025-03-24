import Image from "next/image";
import moment from 'moment';
import { FiEdit } from "react-icons/fi";
import DeleteBooingButton from "@/app/my-bookings/components/DeleteBooingButton";
import Link from "next/link";
const BookingTable = ({ booking }) => {
  return (
    <div>
      {
        booking?.length === 0 ? <div className="flex justify-center items-center min-h-[calc(100vh-305px)]">
          <p className="text-2xl font-bold">No Data Available</p>
        </div> :
        <div>
          <h1 className="text-center text-2xl font-semibold my-4">My All Bookings</h1>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Service Img</th>
                  <th>Service Name</th>
                  <th>Service Date</th>
                  <th>Service Price</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {booking?.map((item)=>{
                return(
                  <tr key={item._id}>
                  <th className="text-nowrap"><Image src={item.service_img} width={60} height={60} alt={item.service_name} /></th>
                  <td className="text-nowrap">{item.service_name}</td>
                  <td className="text-nowrap">{moment(item.date).format('ddd, MMM D, YYYY, h:mm:ss a')}</td>
                  <td className="text-nowrap">{item.service_price}</td>
                  <td className="text-nowrap">{item.address}</td>
                  <td className="text-nowrap">{item.phone}</td>
                  <td className="flex items-center gap-4">
                  <Link href={`/my-bookings/${item?._id}`}><FiEdit size={22} /></Link>
                  <DeleteBooingButton id={item?._id} />
                  </td>
                </tr>
                )
                })}
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  );
};

export default BookingTable;