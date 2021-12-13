import "../App.css";
import React from "react";
import { TextField, NativeSelect, FormControl, Button } from "@mui/material";
import axios from "axios";

export default function Booking() {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userAddress, setUserAddress] = React.useState("");
  const [serviceChoice, setServiceChoice] = React.useState("");
  const [userDateTime, setUserDateTime] = React.useState("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const makeBooking = (event) => {
    event.preventDefault();

    let service;

    if (serviceChoice === 2) {
      service = "Topp Städning";
    } else if (serviceChoice === 3) {
      service = "Diamant Städning";
    } else if (serviceChoice === 4) {
      service = "Fönstertvätt";
    } else {
      service = "Basic Städning";
    }

    /*if (!userDateTime.startsWith("2")) {
      userDateTime = getCurrentDate();
    }*/

    axios
      .post(
        "http://localhost:8080/api/addBooking",
        {
          name: userName,
          email: userEmail,
          address: userAddress,
          date: "date",
          time: "time",
          service: service,
        },
        config
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert(
      "Thank you " +
        userName +
        " for your reservation of " +
        service +
        " at " +
        userAddress +
        " on the " +
        userDateTime +
        ". A confirmation will be sent to " +
        userEmail
    );

    window.location.reload(false);
  };

  return (
    <div>
      <h1>Booking</h1>
      <form id="bookingForm" onSubmit={makeBooking} action="/">
        <div>
          <TextField
            id="uName"
            label="Name"
            variant="standard"
            color="primary"
            sx={{ minWidth: 250 }}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="uEmail"
            label="Email"
            variant="standard"
            color="primary"
            sx={{ minWidth: 250 }}
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="uAddress"
            label="Address"
            variant="standard"
            color="primary"
            sx={{ minWidth: 250 }}
            onChange={(event) => setUserAddress(event.target.value)}
          />
        </div>

        <div>
          <FormControl variant="standard" sx={{ m: 2, minWidth: 250 }}>
            <NativeSelect
              id="sChoice"
              defaultValue={1}
              inputProps={{
                name: "service",
                id: "uncontrolled-native",
              }}
              color="primary"
              onChange={(event) => setServiceChoice(event.target.value)}
            >
              <option value={1}>Basic Städning</option>
              <option value={2}>Topp Städning</option>
              <option value={3}>Diamant Städning</option>
              <option value={4}>Fönstertvätt</option>
            </NativeSelect>
          </FormControl>
        </div>

        <div>
          <TextField
            id="uDateTime"
            label="Date and Time"
            type="datetime-local"
            defaultValue={getCurrentDate()}
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setUserDateTime(event.target.value)}
          />
        </div>

        <div>
          <Button id="formButton" type="submit">
            Enter
          </Button>
        </div>
      </form>
    </div>
  );
}

export function getCurrentDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }T${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }`;
}
