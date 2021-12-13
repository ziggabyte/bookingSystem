import "../App.css";
import React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

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
        {
          username: username,
          password: password,
        },
        config
      )
      .then((res) => console.log("res: " + res))
      .catch((err) => console.log(err));
    window.location.reload(false);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form id="loginForm" action="/booking" onSubmit={loginUser}>
        <div>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            color="primary"
            sx={{ minWidth: 250 }}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            color="warning"
            sx={{ minWidth: 250 }}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <Button id="formButton" type="submit" variant="contained">
            Enter
          </Button>
        </div>

        <p id="or">or</p>
      </form>
      <form action="/register">
        <Button id="registerButton" type="submit" variant="contained">
          Register New User
        </Button>
      </form>
    </div>
  );
}
