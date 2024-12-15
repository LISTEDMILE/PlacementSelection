import React, { useState } from "react";
import { UserContext,StuContext } from "./StuContext";

 
const StuContextProvider = ({children}) => {
    const [student,setStudent] = useState(null)
    return(
        <StuContext.Provider value={{student,setStudent}}>
        {children}
        </StuContext.Provider>
    )
}

const UserContextProvider = ({children}) => {
    const [user,setUser] =useState(1);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export  {StuContextProvider,UserContextProvider}