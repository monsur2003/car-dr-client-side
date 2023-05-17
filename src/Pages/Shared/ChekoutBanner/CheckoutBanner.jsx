import React from "react";
import checkOut from "../../../assets/images/checkout/checkout.png";
import { Link } from "react-router-dom";

const CheckoutBanner = () => {
   return (
      <>
         <div className=" w-[90%] mx-auto relative">
            <img className="" src={checkOut} alt="" />
            <div className=" w-[99%] rounded-lg absolute top-0 bottom-0 bg-gradient-to-r from-[#000000f8] to-[#00000062]"></div>
            <div className="absolute bottom-3 right-[40%]">
               <Link to="/">
                  {" "}
                  <button className="btn bg-orange-500 hover:bg-orange-900">
                     Home/Services
                  </button>
               </Link>
            </div>
         </div>
      </>
   );
};

export default CheckoutBanner;
