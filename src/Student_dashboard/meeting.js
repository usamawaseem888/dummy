import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./layout";
import Sign_Layout from "../login/layout";

const Meeting= () => {

    return (
        <div className="">
          <div className="flex flex-col h-[100vh] w-[100vw]">
           <Sign_Layout text={"Meeting"}/>
            <div className="flex h-[85vh] w-full">
             <Layout/>
              <div className="flex flex-col h-full w-full ">
    
                <div className="ml-20 mt-4 h-[95%] w-[80%] rounded-xl border-black border">
    
                  <div className="flex flex-col h-full w-full">
                    <div className="flex justify-center w-full mt-10">
                      <div className="justify-between"></div>
                    <button className="bg-myGreen w-[140px] py-4 rounded-full text-white">Schedule</button>
                      <button  className="bg-myGreen ml-4 w-[140px] py-4 rounded-full text-white">Search</button>
                    </div>
    
                  </div>
                 
    
                </div>
    
              </div>
    
            </div>
    
          </div>
    
        </div>
      );


}
export default Meeting;