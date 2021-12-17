import "../App.css";
import React, { useState } from "react";
import { Box, TextField, NativeSelect, FormControl } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { CustomButton } from "../App";
import DateAdapter from '@mui/lab/AdapterDayjs';
import { LocalizationProvider } from "@mui/lab";
import DateTimePicker from '@mui/lab/DateTimePicker';
import dayjs from "dayjs";
import axios from "axios";

export default function Booking() {
  const { state } = useLocation();
    const user = {
        email: "this@email.com"
    }
    
    const [serviceChoice, setServiceChoice] = useState("")
    const [dateTime, setDateTime] = useState(null)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const setDateAndTime = (newDateTime) => {
        setDateTime(newDateTime)
        setDate(dayjs(dateTime).format("DD/MM YYYY").toString())
        setTime(dayjs(dateTime).format("HH:mm").toString())
    }

    const onSuccess = (response) => {
        console.log(response)
        alert("Thank you " + name + " for your reservation of " + serviceChoice +
            " at " + address + " on " + date + " at " + time +
            ". A confirmation will be sent to " + user.email);
        window.location.reload(false);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        };

        axios.post(
            "http://localhost:8080/api/addBooking",
            {
                name: name,
                address: address,
                date: date,
                time: time,
                service: serviceChoice,
                user: {
                    //detta funkar inte att skicka
                },
            },
            config
        )
        .then((res) => onSuccess(res))
        .catch((err) => console.log(err))
    }

    return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <div id="pageDiv">
        <h1>Gör ny bokning</h1>
        <form id="bookingForm" onSubmit={(event) => onSubmit(event)}>
            <Box display={"flex"} flexDirection={"column"} >
                <TextField
                    id="uName"
                    label="Namn"
                    variant="standard"
                    color="success"
                    sx={{ minWidth: 250 }}
                    onChange={(newValue) => setName(newValue)}
                />
                <TextField
                    id="uAddress"
                    label="Adress"
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
                        onChange={(newValue) => setServiceChoice(newValue)}>
                            <option value="Basic städning">Basic städning</option>
                            <option value="Topp städning">Topp Städning</option> 
                            <option value="Diamant städning">Diamant städning</option>
                            <option value="Fönstertvätt">Fönstertvätt</option>
                    </NativeSelect>
                </FormControl>
                <DateTimePicker
                    ampm={false}
                    ampmInClock={false}
                    label="Välj datum och tid"
                    value={dateTime}  
                    onChange={(newDateTime) => setDateAndTime(newDateTime)}
                    renderInput={(params) => <TextField {...params} />}
                    minDateTime={dayjs()}
                />
            </Box>
        <div>
        <CustomButton id="formButton" type="submit" variant="contained">
            Boka
        </CustomButton>
        </div>
      </form>
      <Link to="/" id="logoutLink">
        <LogoutIcon id="logoutIcon" />
      </Link>
    </div>
    </LocalizationProvider> 
  );
}
