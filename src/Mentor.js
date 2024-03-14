import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Mentor = () => {
  const [currentPage, setCurrentPage] = useState("home.html");

  const loadPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div className="flex flex-col h-[100vh] w-[100vw]">
        <div className="flex h-[15vh] justify-between  text-xl font-semibold w-full">
          <div className="ml-12 mt-9">
            Mentor Me
          </div>
         
          <div className="mt-9">
            VIDEOS
          </div>
          
          <div className="invisible">
          Mentor Me
          </div>
          

        </div>
        <div className="flex h-[85vh] w-full">
          <div className="h-full ">
           <div className="ml-12 flex flex-col h-full justify-around">
            <button className="bg-myLightBlue w-[140px] py-4 rounded-md">
              Home
            </button>
            <button className="bg-myRed w-[140px] py-4 rounded-md text-white">
            AI Advisor
            </button>
            <button className="bg-myGreen w-[140px] py-4 rounded-md text-white">
            Meetings
            </button>
            <button className="bg-myBlue w-[140px] py-4 rounded-md text-white">
            Videos
            </button>
            <button className="invisible bg-yellow-500 w-[140px] py-4 rounded-md text-white">
              Home
            </button>
            
            <Link to={"/signup"}>
            <button className="bg-myBlue w-[140px] py-4 rounded-md text-white">
            Logout
            </button>
            </Link>
           </div>
            

          </div>
          <div className="flex flex-col h-full w-full ">

            <div className="ml-20 mt-4 h-[95%] w-[80%] rounded-xl border-black border">

              <div className="flex flex-col h-full w-full">
                <div className="flex justify-center w-full mt-10">
                  <input placeholder="Data Structures ..." className="bg-myGray pl-8 w-1/2 py-3 rounded-full"/>
                  <button className="ml-4 rounded-full bg-myGreen w-[80px]">Search</button>
                </div>

              </div>
             

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Mentor;
