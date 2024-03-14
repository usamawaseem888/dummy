import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Sign_Layout from '../login/layout';

const Admin_Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          alert('Login successful!')
          navigate('/home');
        }

        else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="">
      <div className="flex flex-col h-[100vh] w-[100vw]">

        {/* Basic heading MentorME  */}
        <Sign_Layout text={"Admin LOGIN"}></Sign_Layout>

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
                onChange={(event) => setEmail(event.target.value)}
                required

              />
            </div>

            {/* password */}
            <div className="mb-6">
              <input
                className="appearance-none border rounded-t-none rounded-b-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {/* login and sign up buttonas */}
            <div className="ml-12 flex flex-col h-full justify-around">

              {/* Login button*/}
              <Link to={"/admin-advisor"}>
                <button
                  className="bg-myBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  style={{ minWidth: '140px' }}

                >
                  Login
                </button>
              </Link>
              {/* signup button */}
              <Link to={"/admin-signin"}>
                <button
                  className="bg-myGray hover:bg-blue-700 text-myBlue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default Admin_Login;
