import React, { useContext, useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { HouseRounded } from "@mui/icons-material";
import CookieIcon from "@mui/icons-material/Cookie";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export default function Navbar() {
  const { userId, isLoggedIn, setIsLoggedIn, setUserContext } = useContext(UserContext);
    const [gdpr, setGdpr] = useState("");
    const navigate = useNavigate()

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getGdprUserData/${userId}`, config)
      .then(({ data }) => {
        setGdpr(data);
        console.log("gdpr data: ", data);
      })
      .catch((error) => console.log("error: ", error));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    if (gdpr.length < 2) {
      alert("GDPR coming soon!");
    } else {
      alert("GDPR: ", gdpr);
    }
  };
    
    const handleSignout = (event) => {
        event.preventDefault()
        setIsLoggedIn(false)
        setUserContext({})
        navigate("/")
  }

  return (
    <div id="navbar">
      <ul id="navbarList">
        <li>
          <h3>Städafint AB</h3>
              </li>
              <li>
          <Link to={isLoggedIn ? "/userpage" : "/"} id="logoutLink">
            <HouseRounded id="logoutIcon" />
          </Link>
        </li>

        <li>
            <CookieIcon id="gdprIcon" onClick={(event) => handleClick(event)} />
        </li>

        <li>
            <LogoutIcon id="logoutIcon" onClick={ (event) => handleSignout(event)}/>
        </li>
      </ul>
    </div>
  );
}
