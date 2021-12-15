import "../App.css";
import React from "react";
import { TextField, NativeSelect, FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { getCurrentDate } from "../functions/cleanPostRequest";
import makeBooking from "../api/makeBookingApi";
import { CustomButton } from "../App";

export default function Booking() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [serviceChoice, setServiceChoice] = React.useState("");
  const [dateTime, setDateTime] = React.useState("");

  return (
    <div id="pageDiv">
      <h1>Booking</h1>
      <form
        id="bookingForm"
        onSubmit={(event) =>
          makeBooking(event, username, email, address, serviceChoice, dateTime)
        }
      >
        <div>
          <TextField
            id="uName"
            label="Name"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="uEmail"
            label="Email"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="uAddress"
            label="Address"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setAddress(event.target.value)}
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
              color="success"
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
            onChange={(event) => setDateTime(event.target.value)}
          />
        </div>

        <div>
          <CustomButton id="formButton" type="submit" variant="contained">
            Enter
          </CustomButton>
        </div>
      </form>
      <Link to="/" id="logoutLink">
        <LogoutIcon id="logoutIcon" />
      </Link>
    </div>
  );
}
