import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./layout";
import Sign_Layout from "../login/layout";

const Videos = () => {
  
    return (
        <div className="">
          <div className="flex flex-col h-[100vh] w-[100vw]">
           <Sign_Layout text={"Videos"}/>
            <div className="flex h-[85vh] w-full">
             <Layout/>
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

export default Videos;
