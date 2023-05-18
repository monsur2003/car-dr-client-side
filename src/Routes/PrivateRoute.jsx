import React, { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
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

   return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
