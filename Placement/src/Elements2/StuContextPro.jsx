import React, { useState } from "react";
import StuContext from "./StuContextContext";
 
const StuContextProvider = ({children}) => {
    const [student,setStudent] = useState(null)
    return(
        <StuContext.Provider value={{student,setStudent}}>
        {children}
        </StuContext.Provider>
    )
}


export default StuContextProvider