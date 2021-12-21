import "../App.css";
import React, { useEffect, useState, useContext } from "react";
import { CustomButton } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookingCardHolder from "../components/BookingCardHolder";
import { UserIdContext } from "../context/UserIdContext";

export default function CustomerPage() {
  const navigate = useNavigate();

  const { userId } = useContext(UserIdContext);

  const [userProfile, setUserProfile] = useState({});
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
        setUserProfile(data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8080/api/getBookings/${userId}`, config)
      .then((response) => setBookings(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    navigate("/booking", { state: userProfile });
  };

  return (
    <div id="pageDiv">
      <h1>{userProfile.name}'s profile</h1>

      <ul id="profileInfoList">
        <li>Username: {userProfile.username}</li>
        <li>Name: {userProfile.name}</li>
        <li>Address: {userProfile.address}</li>
        <li>Email: {userProfile.email}</li>
      </ul>

      <form id="customerpageForm" onSubmit={(event) => handleClick(event)}>
        <CustomButton id="formButton" type="submit" variant="contained">
          New booking
        </CustomButton>
      </form>

      <BookingCardHolder initialBookings={bookings} />
    </div>
  );
}
