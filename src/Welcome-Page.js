// WelcomePage.js
import React from 'react';
import img from "./mentorme.png"
import { Link, useNavigate } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={img} alt="Welcome Image" className="mb-2" />
     
      <h2>Log in as:</h2>
      <div className="flex">
        <Link to={"/admin-signin"}>
      <button className="bg-myLightBlue w-[140px] py-4 rounded-md mr-8">
       Admin
     </button>
     </Link>

     <Link to={"/student-login"}>
     <button className="bg-myRed w-[140px] py-4 rounded-md text-white">
     Student
     </button>
     </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
