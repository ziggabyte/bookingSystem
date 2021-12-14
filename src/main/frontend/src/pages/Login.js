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
          {},
          {params: {username, password}},
        config
      )
      .then((response) => rerouteIfSuccessful(response.data))
      .catch((error) => console.log(error))
    };
    
    const rerouteIfSuccessful = (data) => {
        
        console.log(data)
    }

  return (
    <div>
      <h1>Welcome</h1>
      <form id="loginForm" onSubmit={(event) => loginUser(event)}>
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
