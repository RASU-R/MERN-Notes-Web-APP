import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLogout} from "../state";

const Header=({handleToggleDarkMode,fullName,picturePath})=>{
    const dispatch=useDispatch();
    return(
        <div className='header'>
            <h1>
                Notes Web App
            </h1>
            <button onClick=
            {
                ()=>handleToggleDarkMode((previousDarkMode)=>!(previousDarkMode))
            }
            className='save'>
                Toggle Mode
            </button>
            
            <span className='save'>
                <img className="image" src={`http://localhost:3001/assets/${picturePath}`} /> 
                {fullName}
            </span>
           
            <button  className='save' onClick={()=>dispatch(setLogout())}>Log Out </button>
        </div>
    );
};


export default Header;