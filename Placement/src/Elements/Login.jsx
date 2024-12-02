import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Login() {
    return (
        <div id="main">
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
           </div>
           <NavLink
           to="/CompanyO">
           <button>
                Login
           </button>
           </NavLink>
        
    </div>);
}

