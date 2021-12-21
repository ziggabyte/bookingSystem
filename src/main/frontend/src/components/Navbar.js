import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <ul id="navbarList">
        <li>
          <h3>Städafint AB</h3>
        </li>

        <li>
          <Link to="/" id="logoutLink">
            <LogoutIcon id="logoutIcon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
