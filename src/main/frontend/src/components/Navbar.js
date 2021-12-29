import React, { useContext, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { HouseRounded } from "@mui/icons-material";
import CookieIcon from "@mui/icons-material/Cookie";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import GdprDataDialog from "./GdprDataDialog";

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
    <div id="navbar">
      <ul id="navbarList">
        <li>
          <h3>Städafint AB</h3>
              </li>
              {isLoggedIn && 
                <>
                    <li>
                    <Link to="/userpage" id="logoutLink">
                        <HouseRounded id="logoutIcon" />
                    </Link>
                    </li>

                    <li>
                        <CookieIcon id="gdprIcon" onClick={handleGdprClick} />
                    </li>

                    <li>
                        <LogoutIcon id="logoutIcon" onClick={ (event) => handleSignout(event)}/>
                    </li>
                </>}
        
          </ul>
          <GdprDataDialog
              open={dialogOpen}
              onClose={handleClose}
              userData={gdprData}
          />
    </div>
  );
}
