import React from 'react'
import { NavLink } from 'react-router-dom';


export default function ChooseO() {
    return (
<div id="choose">
            
<NavLink
                                to="/dataa"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Data
                                </NavLink>

                                <NavLink
                                to="/requesttO"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Request
                                </NavLink>
                          
                                <NavLink
                                to="/companyO"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Company
                                </NavLink>
                            
                                
                            

       
   </div> );
}



