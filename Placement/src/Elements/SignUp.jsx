import React from 'react'
import './SignUp.css'
import { NavLink } from 'react-router-dom';
export default function SignUp() {
    return (< div id="page">
        <div id="main">
            <div class="second">
           <label>
                Your Name
            </label>
           <input type="text"></input>
           </div>

            <div class="second">
            <label>
                Username
            </label>
           <input type="text"></input>
           </div>

           <div class="second">
           <label>
                Password
            </label>
           <input type="text"></input>
           </div><NavLink
                                to="/dataa"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <button></button>
                                </NavLink>
        
        </div>
    </div>);
}
