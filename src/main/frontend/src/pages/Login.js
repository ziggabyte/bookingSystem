import "../App.css";
import React from "react";
import { Button, TextField } from "@mui/material";
import loginUser from "../api/loginApi";
import { CustomButton } from "../App";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div id="pageDiv">
      <h1>Welcome</h1>
      <form
        id="loginForm"
        onSubmit={(event) => loginUser(event, username, password)}
      >
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
