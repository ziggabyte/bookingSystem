import "../App.css";
import React, { useContext, useState, useEffect } from "react";
import { TextField, NativeSelect, FormControl } from "@mui/material";
import { CustomButton } from "../App";
import DateAdapter from "@mui/lab/AdapterDayjs";
import { LocalizationProvider } from "@mui/lab";
import DateTimePicker from "@mui/lab/DateTimePicker";
import dayjs from "dayjs";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import BookedCleaningDialog from "../components/BookedCleaningDialog";

export default function Booking() {
    const navigate = useNavigate()

    const { userContext } = useContext(UserContext);
    const { userId } = userContext

  const [userProfile, setUserProfile] = useState({});
  const [serviceChoice, setServiceChoice] = useState("");
  const [dateTime, setDateTime] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState(userProfile.name);
    const [address, setAddress] = useState(userProfile.address);
    const [dialogOpen, setDialogOpen] = useState(false)

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
  }, []);

  const setDateAndTime = (newDateTime) => {
    setDateTime(newDateTime);
    setDate(dayjs(dateTime).format("DD/MM YYYY").toString());
    setTime(dayjs(dateTime).format("HH:mm").toString());
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
        .then(() => {
          setDialogOpen(true)
        })
      .catch((err) => console.log(err));
  };
    
    const handleClose = () => {
        setDialogOpen(false)
        navigate("/userpage")
    }

  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <div id="pageDiv">
          <h1>New booking</h1>
          <form id="bookingForm" onSubmit={(event) => onSubmit(event)}>
            <TextField
                id="uName"
                label="Namn"
                variant="standard"
                color="success"
                sx={{ width: 250 }}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField
                id="uAddress"
                label="Adress"
                variant="standard"
                color="success"
                sx={{ width: 250 }}
                onChange={(event) => setAddress(event.target.value)}
            />
            <FormControl variant="standard" sx={{ m: 2, width: 250 }}>
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
                <option value="Basic städning">Basic Cleaning</option>
                <option value="Topp städning">Topp Cleaning</option>
                <option value="Diamant städning">Diamond Cleaning</option>
                <option value="Fönstertvätt">Windowwash</option>
              </NativeSelect>
            </FormControl>
            <DateTimePicker
              ampm={false}
              ampmInClock={false}
              label="Time and date"
              value={dateTime}
              onChange={(newValue) => setDateAndTime(newValue)}
              renderInput={(params) => <TextField {...params} />}
              minDateTime={dayjs()}
            />
            <div>
              <CustomButton id="formButton" type="submit" variant="contained">
                Confirm
              </CustomButton>
            </div>
                  </form>
                  <BookedCleaningDialog
                      serviceChoice={serviceChoice}
                      date={date}
                      time={time}
                      open={dialogOpen}
                      onClose={handleClose}
                  />
        </div>
      </LocalizationProvider>
    </>
  );
}
