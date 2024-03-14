import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({text}) => {
  

  return (
    <div className="h-full ">
    <div className="ml-12 flex flex-col h-full justify-around">
    <Link to={"/student-home"}>
     <button className="bg-myLightBlue w-[140px] py-4 rounded-md">
       Home
     </button>
     </Link>

     <Link to={"/student-advisor"}>
     <button className="bg-myRed w-[140px] py-4 rounded-md text-white">
     AI Advisor
     </button>
     </Link>

     <Link to={"/student-meeting"}>
     <button className="bg-myGreen w-[140px] py-4 rounded-md text-white">
     Meetings
     </button>
     </Link>

     <Link to={"/student-videos"}>
     <button className="bg-myBlue w-[140px] py-4 rounded-md text-white">
     Videos
     </button>
     </Link>
     
   
     <button className="invisible bg-yellow-500 w-[140px] py-4 rounded-md text-white">
       Home
     </button>
  

     <Link to={"/student-signup"}>
     <button className="bg-myBlue w-[140px] py-4 rounded-md text-white">
     Logout
     </button>
     </Link>
    </div>
     

   </div>
  );
};

export default Layout;
