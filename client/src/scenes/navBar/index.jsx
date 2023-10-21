
import { useState } from "react";
import Header from '../../components/Header';
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery,
} from "@mui/material";


const NavBar=({handleToggleDarkMode,fullName,picturePath})=>
{
 
    return (
        <>
         <Header
           handleToggleDarkMode={handleToggleDarkMode}
           fullName={fullName}
           picturePath={picturePath}
        />       
        </>
    )
}

export default NavBar;