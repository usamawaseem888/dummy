import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./layout";
import Sign_Layout from "../login/layout";
import ChatbotScreen from "./chatbot";

const Advisor= () => {

    return (
        <div className="">
          <div className="flex flex-col h-[100vh] w-[100vw]">
           <Sign_Layout text={"Advisor"}/>
            <div className="flex h-[85vh] w-full">
             <Layout/>
              <div className="flex flex-col h-full w-full ">
    
                <div className="ml-20 mt-4 h-[95%] w-[80%] rounded-xl border-black border">
    
                  <div className="flex flex-col h-full w-full">
                    <div className="m-5">
                      <ChatbotScreen/>


                      {/* Inside box working here */}
                    </div>
    
                  </div>
                 
    
                </div>
    
              </div>
    
            </div>
    
          </div>
    
        </div>
      );


}
export default Advisor;