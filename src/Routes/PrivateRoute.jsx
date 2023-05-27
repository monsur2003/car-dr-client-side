import React, { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   if (user) {
      return children;
   }
   if (loading) {
      return (
         <div className="w-[90%] h-full flex justify-center items-center">
            <span className="loader"></span>
         </div>
      );
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
