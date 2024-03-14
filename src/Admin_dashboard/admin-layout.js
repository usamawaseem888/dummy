import React, { useState } from "react";
import { Link } from "react-router-dom";




const Admin = () => {
    // const [currentPage, setCurrentPage] = useState("home.html");
  
    // const loadPage = (page) => {
    //   setCurrentPage(page);

    return (
        <div className="h-full ">
        <div className="ml-12 flex flex-col h-full justify-around">
        <Link to={"/admin-advisor"}>
                <button className="bg-myRed w-[140px] py-4 rounded-md text-white ">
                AI Advisor
                </button>
                </Link>

                <Link to={"/admin-meeting"}>
                <button className="bg-myGreen w-[140px] py-4 rounded-md text-white ">
                Meetings
                </button>
                </Link>
                
                <Link to={"/admin-videos"}>
                <button className="bg-myBlue w-[140px] py-4 rounded-md text-white">
                Videos
                </button></Link>

                <Link to={"/admin-signin"}>
                <button className="bg-myBlue w-[140px] py-4 rounded-md text-white">
                Logout
                </button></Link>
        </div>
         
    
       </div>
      );
    };
    
    export default Admin;
    