import { useState } from "react";
import { Navigate, Route,useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

function PrivateRoute({ children, ...rest }) {
   const {allContext}=useAuth()
   const {user}=allContext;
   let location = useLocation();
   if(user.email){
    return children;

   }
   return <Navigate to="/login" state={{from:location
}}/>
  }

  export default PrivateRoute;