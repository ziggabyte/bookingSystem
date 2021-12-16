import "../App.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { CustomButton } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomerPage() {
  const { state } = useLocation();
  const { userId } = state;
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState({});

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getUser/${userId}`, config)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8080/api/getBookings/${userId}`, config)
      .then((response) => setBookings(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    navigate("/booking", { state: user });
  };

  return (
    <div id="pageDiv">
      <h1>{user.name}'s profile</h1>

      <ul id="profileInfoList">
        <li>Username: {user.username}</li>
        <li>Name: {user.name}</li>
        <li>Address: {user.address}</li>
        <li>Email: {user.email}</li>
      </ul>

      <ul id="profileBookingsList">
        <li></li>
      </ul>

      <form id="customerpageForm" onSubmit={(event) => handleClick(event)}>
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
