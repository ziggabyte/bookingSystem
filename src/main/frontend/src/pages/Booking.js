import "../App.css";
import React, { useContext, useState } from "react";
import { Box, TextField, NativeSelect, FormControl } from "@mui/material";
import { CustomButton } from "../App";
import DateAdapter from "@mui/lab/AdapterDayjs";
import { LocalizationProvider } from "@mui/lab";
import DateTimePicker from "@mui/lab/DateTimePicker";
import dayjs from "dayjs";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function Booking() {
    const { userContext } = useContext(UserContext);
    const { userId } = userContext

  const [serviceChoice, setServiceChoice] = useState("");
  const [dateTime, setDateTime] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const setDateAndTime = (newDateTime) => {
    setDateTime(newDateTime);
    setDate(dayjs(dateTime).format("DD/MM YYYY").toString());
    setTime(dayjs(dateTime).format("HH:mm").toString());
  };

  const onSuccess = (response) => {
    console.log(response);
    alert(
      "Thank you " +
        name +
        " for your reservation of " +
        serviceChoice +
        " at " +
        address +
        " on " +
        date +
        " at " +
        time
    );
    window.location.reload(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        "http://localhost:8080/api/addBooking",
        {
          name: name,
          address: address,
          date: date,
          time: time,
          service: serviceChoice,
          userId: userId,
        },
        config
      )
      .then((res) => onSuccess(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <div id="pageDiv">
          <h1>New booking</h1>
          <p>UserId: {userContext}</p>
          <form id="bookingForm" onSubmit={(event) => onSubmit(event)}>
            <Box display={"flex"} flexDirection={"column"}>
              <TextField
                id="uName"
                label="Name"
                variant="standard"
                color="success"
                sx={{ minWidth: 250 }}
                onChange={(newValue) => setName(newValue)}
              />
              <TextField
                id="uAddress"
                label="Address"
                variant="standard"
                color="success"
                sx={{ minWidth: 250 }}
                onChange={(newValue) => setAddress(newValue)}
              />
              <FormControl variant="standard" sx={{ m: 2, minWidth: 250 }}>
                <NativeSelect
                  id="sChoice"
                  defaultValue={1}
                  inputProps={{
                    name: "service",
                    id: "uncontrolled-native",
                  }}
                  color="success"
                  onChange={(newValue) => setServiceChoice(newValue)}
                >
                  <option value="Basic städning">Basic städning</option>
                  <option value="Topp städning">Topp Städning</option>
                  <option value="Diamant städning">Diamant städning</option>
                  <option value="Fönstertvätt">Fönstertvätt</option>
                </NativeSelect>
              </FormControl>
              <DateTimePicker
                ampm={false}
                ampmInClock={false}
                label="Time and date"
                value={dateTime}
                onChange={(newDateTime) => setDateAndTime(newDateTime)}
                renderInput={(params) => <TextField {...params} />}
                minDateTime={dayjs()}
              />
            </Box>
            <div>
              <CustomButton id="formButton" type="submit" variant="contained">
                Confirm
              </CustomButton>
            </div>
          </form>
        </div>
      </LocalizationProvider>
    </>
  );
}
