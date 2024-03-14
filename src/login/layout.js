import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Sign_Layout = ({text}) => {
    return (
        <div className="flex h-[15vh] justify-between  text-2xl font-semibold w-full">
        <div className="ml-12 mt-9">
          Mentor Me
        </div>
        
        <div className="mt-9">
        {text} PAGE
        </div>
        
        <div className="invisible">
          Mentor Me
        </div>
        </div>
    );
  };
  
  export default Sign_Layout;
