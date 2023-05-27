import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingTrow from "./BookingTrow";
import Swal from "sweetalert2";

const Bookings = () => {
   const { user } = useContext(AuthContext);

   const [bookings, setBookings] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
         method: "GET",
         headers: {
            autorization: `Bearer ${localStorage.getItem("car-access-token")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => setBookings(data));
   }, []);
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

   const updateConfirmation = (id) => {
      fetch(`http://localhost:5000/bookings/${id}`, {
         method: "PATCH",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify({ statusbar: "success" }),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               console.log("modfied done");
               const remaining = bookings.filter((b) => b._id !== id);

               const updated = bookings.find((booking) => booking._id === id);

               updated.statusbar = "success";
               const newBooking = [updated, ...remaining];
               setBookings(newBooking);
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
                           handleDelete={handleDelete}
                           updateConfirmation={
                              updateConfirmation
                           }></BookingTrow>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Bookings;
