import "../App.css";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { CustomButton } from "../App";

export default function CustomerPage() {
  return (
    <div id="pageDiv">
      <h1>Your Profile</h1>

      <ul id="profileInfoList">
        <li>Address: Pildammsvägen 95c</li>
        <li>Something: </li>
      </ul>

      <form id="customerpageForm" action="/booking">
        <CustomButton id="formButton" type="submit" variant="contained">
          New booking
        </CustomButton>
      </form>
      <Link to="/" id="logoutLink">
        <LogoutIcon id="logoutIcon" />
      </Link>
    </div>
  );
}
