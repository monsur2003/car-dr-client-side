import React, { useContext } from "react";
import CheckoutBanner from "../Shared/ChekoutBanner/CheckoutBanner";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
   const { user } = useContext(AuthContext);
   console.log("checkuser", user);
   const service = useLoaderData();
   const { _id, title, price, img } = service;

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const amount = form.amount.value;
      const email = form.email.value;

      const order = {
         customerNmae: name,
         date,
         amount,
         email,
         price,
         service_id: _id,
         service: title,
         img,
      };
      fetch("http://localhost:5000/booking", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(order),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               Swal.fire({
                  title: "Success",
                  text: "Do you want to continue",
                  icon: "success",
                  confirmButtonText: "Okey",
               });
            }
         });
   };

   return (
      <div>
         <CheckoutBanner></CheckoutBanner>

         <form
            onSubmit={handleSubmit}
            className=" bg-base-200 w-[90%] my-8 mx-auto p-10 rounded-lg">
            <h2 className="text-3xl font-bold my-3 mb-2 text-red-500 text-center">
               Book now : {title}
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input
                     type="text"
                     //  placeholder="Full Name"
                     defaultValue={user?.displayName}
                     name="name"
                     className="input input-bordered"
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Date</span>
                  </label>
                  <input
                     type="date"
                     placeholder="Last Name"
                     name="date"
                     className="input input-bordered"
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Due amount</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Amount"
                     defaultValue={"$ " + price}
                     name="amount"
                     className="input input-bordered"
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Your Email</span>
                  </label>
                  <input
                     type="email"
                     placeholder="Email Address"
                     defaultValue={user?.email}
                     name="email"
                     className="input input-bordered"
                  />
               </div>
            </div>
            <div className="form-control">
               <button className="btn my-7 w-full">Submit</button>
            </div>
         </form>
      </div>
   );
};

export default CheckOut;
