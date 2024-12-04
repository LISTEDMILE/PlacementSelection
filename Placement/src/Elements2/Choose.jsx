import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Choose() {
    return (
<div id="choose">
            
<NavLink
                                to="/dataa"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 text-orange-200 focus:'text-white'  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Data
                                </NavLink>

                                <NavLink
                                to="/requestt"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-orange-200 focus:'text-white' border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Request
                                </NavLink>
                          
                                <NavLink
                                to="/company"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-orange-200 focus:'text-white' border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Job Search
                                </NavLink>
                            
                                
                            

       
   </div> );
}



