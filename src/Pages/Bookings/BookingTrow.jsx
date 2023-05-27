import React from "react";
import Swal from "sweetalert2";

const BookingTrow = ({ booking, handleDelete, updateConfirmation }) => {
   const {
      customerNmae,
      date,
      amount,
      email,
      price,
      _id,
      service,
      img,
      statusbar,
   } = booking;

   return (
      <tr>
         <th>
            <button
               onClick={() => handleDelete(_id)}
               className="btn btn-sm btn-circle">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M6 18L18 6M6 6l12 12"
                  />
               </svg>
            </button>
         </th>
         <td>
            <div className="flex items-center space-x-1">
               <div className="avatar">
                  <div className="mask rounded w-28 h-28 ">
                     <img src={img} alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
            </div>
         </td>
         <td className="font-bold">{service}</td>
         <td>${price}</td>
         <td>{date}</td>
         <th>
            {statusbar === "success" ? (
               <span className="text-blue-500 font-semibold">Confirmed</span>
            ) : (
               <button
                  onClick={() => {
                     updateConfirmation(_id);
                  }}
                  className="btn btn-ghost btn-xs">
                  Confirming
               </button>
            )}
         </th>
      </tr>
   );
};

export default BookingTrow;
