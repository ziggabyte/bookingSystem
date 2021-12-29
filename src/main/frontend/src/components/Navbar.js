import React, { useContext, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { HouseRounded } from "@mui/icons-material";
import CookieIcon from "@mui/icons-material/Cookie";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import GdprDataDialog from "./GdprDataDialog";
import { Box } from "@mui/material";

export default function Navbar() {
    const { isLoggedIn, setIsLoggedIn, setUserContext, userContext } = useContext(UserContext);
    const { userId } = userContext
    const [gdprData, setGdprData] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false)

    const navigate = useNavigate()

    const config = {
        headers: {
        "Access-Control-Allow-Origin": "*",
        },
    };

    const handleGdprClick = () => {
      axios
      .get(`http://localhost:8080/api/getGdprUserData/${userId}`, config)
          .then(({ data }) => {
            setGdprData(data);
            setDialogOpen(true)
      })
      .catch((error) => console.log("error: ", error))

  };
    
    const handleSignout = (event) => {
        event.preventDefault()
        setIsLoggedIn(false)
        setUserContext({})
        navigate("/")
    }
    
    const handleClose = () => {
        setDialogOpen(false)
    }

  return (
    <Box id="navbar">
        <Link to={isLoggedIn ? "/userpage" : "/"} style={{ color: 'black', textDecoration: 'none', fontWeight: 'bolder' }}>
            <h3>Städafint AB</h3>    
        </Link>
        {isLoggedIn && 
        <Box id="navbarList">
            <Link to="/userpage" id="logoutLink">
                <HouseRounded id="logoutIcon" />
            </Link>
            <CookieIcon id="gdprIcon" onClick={handleGdprClick} />
            <LogoutIcon id="logoutIcon" onClick={ (event) => handleSignout(event)}/>
        </Box>}
                <GdprDataDialog
            open={dialogOpen}
            onClose={handleClose}
            userData={gdprData}
        />
    </Box>
  );
}
