import "../App.css";
import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { CustomButton } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserIdContext } from "../context/UserIdContext";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUserId } = useContext(UserIdContext);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const loginUser = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/api/login",
        {},
        { params: { username, password } },
        config
      )
      .then((response) => rerouteIfSuccessful(response.data))
      .catch((error) => console.log(error));
  };

  const rerouteIfSuccessful = (responseData) => {
    setUserId(responseData.userId);
    navigate("/customerpage");
  };

  return (
    <div id="pageDiv">
      <h1>Welcome</h1>
      <form id="loginForm" onSubmit={(event) => loginUser(event)}>
        <div>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <CustomButton id="formButton" type="submit" variant="contained">
            Enter
          </CustomButton>
        </div>
      </form>
      <p id="or">or</p>
      <form action="/register">
        <CustomButton id="registerButton" type="submit" variant="contained">
          Register New User
        </CustomButton>
      </form>
    </div>
  );
}
