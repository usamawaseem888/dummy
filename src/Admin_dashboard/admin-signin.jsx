// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Sign_Layout from '../login/layout';



const Admin_Signin = () => {




  return (
    <div className="">
      <div className="flex flex-col h-[100vh] w-[100vw]">

        {/* Basic heading MentorME  */}

        <Sign_Layout text={"SIGNUP"} />


        <div className="ml-12 flex flex-col h-full justify-around items-center">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-8">

            {/* Username */}
            <div className="mb-4">
              <input
                className="appearance-none border rounded-t-md rounded-b-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Roll No.#"
                style={{ minWidth: '500px' }}

              />
            </div>

            {/* password */}
            <div className="mb-6">
              <input
                className="appearance-none border rounded-t-none rounded-b-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            {/* login and sign up buttonas */}
            <div className="ml-12 flex flex-col h-full justify-around">

              {/* Login button*/}
              <Link to={"/admin-login"}>
                <button
                  className="bg-myBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  style={{ minWidth: '140px' }}

                >
                  Login
                </button>
              </Link>

              {/* signup button */}
              <Link to={"/admin-videos"}>
                <button
                  className="bg-myBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  style={{ minWidth: '140px' }}


                >
                  Sign Up
                </button>
              </Link>

            </div>
          </form>
        </div>

      </div>
    </div>




  );
};

export default Admin_Signin;