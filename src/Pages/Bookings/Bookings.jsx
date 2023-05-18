import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingTrow from "./BookingTrow";
import Swal from "sweetalert2";

const Bookings = () => {
   const { user } = useContext(AuthContext);

   const [bookings, setBookings] = useState([]);

   fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));

   const handleDelete = (id) => {
      console.log(id, "from delete btn");
      fetch(`http://localhost:5000/bookings/${id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
               const remaining = bookings.filter((b) => b._id !== id);
               setBookings(remaining);
               Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
               }).then((result) => {
                  if (result.isConfirmed) {
                     Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                     );
                  }
               });
            }
         });
   };

   return (
      <div>
         <h2 className="text-3xl font-bold">
            total bookings {bookings.length}
         </h2>

         <div>
            <div className="overflow-x-auto w-full">
               <table className="table w-full">
                  {/* head */}
                  <thead>
                     <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {bookings.map((booking) => (
                        <BookingTrow
                           key={booking._id}
                           booking={booking}
                           handleDelete={handleDelete}></BookingTrow>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Bookings;
