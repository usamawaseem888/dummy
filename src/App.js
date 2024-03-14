import React from 'react';
import Mentor from "./Mentor";

import Login from "./login/login";
import Signup from "./login/signup";
import WelcomePage from './Welcome-Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// student dashboard
import Advisor from './Student_dashboard/advisor';
import Meeting from './Student_dashboard/meeting';
import Videos from './Student_dashboard/videos';
import Home from './Student_dashboard/home';
import Admin_Signin from './Admin_dashboard/admin-signin';


//admin dashboard
import Admin from './Admin_dashboard/admin-layout';
import Admin_Advisor from './Admin_dashboard/admin-advisor';
import Admin_Meeting from './Admin_dashboard/admin-meeting';
import Admin_Videos from './Admin_dashboard/admin-videos';
import Admin_Login from './Admin_dashboard/admin_login';

const App = () => {
  return (
   
    <BrowserRouter >
      <Routes>
        <Route path="/" element ={<WelcomePage/>} />
 

        {/* student dashboard */}
        <Route path="/student-login" element={<Login/>} />
        <Route path="/student-signup" element={<Signup/>} />
        <Route path="/student-home" element={<Home/>} />
        <Route path="/student-videos" element={<Videos/>} />
        <Route path="/student-advisor" element={<Advisor/>} />
        <Route path="/student-meeting" element={<Meeting/>} />

        {/* Admin_dashboard */}
        <Route path="/admin-signin" element={<Admin_Signin/>} />
        {/* <Route path="/admin-login" element={</>} /> */}
        <Route path="/admin-advisor" element={<Admin_Advisor/>} />
        <Route path="/admin-meeting" element={<Admin_Meeting/>} />
        <Route path="/admin-videos" element={<Admin_Videos/>} />
        <Route path="/admin-login" element={<Admin_Login/>} />


        
      </Routes>
    </BrowserRouter>

  );
};

export default App;
