import "../App.css";
import React from "react";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <h1>Welcome</h1>
      <form id="loginForm" action="/booking">
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
          <Button id="formButton" type="submit">
            Enter
          </Button>
        </div>

        <p id="or">or</p>

        <form action="/register">
          <Button id="registerButton" type="submit">
            Register New User
          </Button>
        </form>
      </form>
    </div>
  );
}
