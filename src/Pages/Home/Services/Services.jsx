import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   console.log(services);

   return (
      <div>
         <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold text-orange-500 mb-2">
               Service
            </h2>
            <h1 className="text-4xl font-bold text-gray-900">
               {" "}
               Our services area
            </h1>
            <p className="font-semibold text-gray-600 mb-5 mt-1">
               the majority have suffered alteration in some form, by injected
               humour, <br /> or randomised words which do not look even
               slightly believable.{" "}
            </p>
         </div>
         <div className="grid md:grid-cols-3 gap-7 mx-auto mb-5">
            {services.map((service) => (
               <ServicesCard key={service._id} service={service}></ServicesCard>
            ))}
         </div>
      </div>
   );
};

export default Services;
