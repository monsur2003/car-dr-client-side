import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
   const { _id, title, img, price } = service;
   return (
      <div>
         <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
               <img
                  className="w-full  h-[210px] hover:relative"
                  src={img}
                  alt="Shoes"
               />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <div className="flex justify-between items-center">
                  <p className="text-orange-600 text-[20px] font-semibold ">
                     Price: ${price}
                  </p>
                  <div className="card-actions justify-end">
                     <Link to={`/checkout/${_id}`}>
                        {" "}
                        <span className="text-xl cursor-pointer">
                           <FaArrowRight className="text-orange-600"></FaArrowRight>
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServicesCard;
