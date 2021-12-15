import "../App.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { CustomButton } from "../App";
import axios from "axios";

export default function CustomerPage() {
    const { state } = useLocation()
    const { userId } = state

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
        },
    };

    useEffect(() => {
        axios.get(
            `http://localhost:8080/api/getUser/${userId}`,
            config
        )
            .then(({ data }) => {
                setName(data.name)
                setAddress(data.address)
            })
        .catch((error) => console.log(error))
    })

  return (
    <div id="pageDiv">
      <h1>{name}'s profile</h1>

      <ul id="profileInfoList">
        <li>Address: {address}</li>
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
