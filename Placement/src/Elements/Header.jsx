import React, { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import { UserContext } from '../StuContext';
import { useContext } from 'react';



export default function Header() {
    function ChangeR(){
        document.getElementById('student').style.backgroundColor="white";
        document.getElementById('student').style.color="black";
        document.getElementById('student').style.border="white";
        document.getElementById('student').style.textDecoration="underline";
        document.getElementById('recruiter').style.backgroundColor="rgb(179, 106, 11)";
        document.getElementById('recruiter').style.color="white";
        document.getElementById('recruiter').style.border="2px solid black";
        document.getElementById('recruiter').style.textDecoration="none";
        setUser(2);
       
    }
    function ChangeS(){
        document.getElementById('recruiter').style.backgroundColor="white";
        document.getElementById('recruiter').style.color="black";
        document.getElementById('recruiter').style.border="white";
        document.getElementById('recruiter').style.textDecoration="underline";
        document.getElementById('student').style.backgroundColor="rgb(179, 106, 11)";
        document.getElementById('student').style.color="white";
        document.getElementById('student').style.border="2px solid black";
        document.getElementById('student').style.textDecoration="none";
        setUser(1);
    }
    const {user,setUser}= useContext(UserContext);
    return (

        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-10 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div>  <NavLink
                            to="/login"
                            >
                            <button id="student" onClick={ChangeS}>
                        Student
                    </button>
                    <button id='recruiter' onClick={ChangeR} >
                        Recruiter
                    </button>
                        </NavLink>
                </div> 
                      
                   <div className="flex items-center lg:order-2">
                  
                    <NavLink
                            to="/login"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 underline focus:outline-none"
                        >
                           Sign Up
                        </NavLink>
                        
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-900" : "text-rose-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-900" : "text-rose-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-900" : "text-rose-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Help
                                </NavLink>
                            </li>

                            
                            
                            












                            
                        </ul>
                    </div>
                   
                </div>
            </nav>
        </header>
    );
}



