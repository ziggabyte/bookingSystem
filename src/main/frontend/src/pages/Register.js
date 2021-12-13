import "../App.css";
import React from "react";
import { Button, TextField } from "@mui/material";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div>
      <h1>Register</h1>
      <form action="/">
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
          <TextField
            id="email"
            label="Email"
            variant="standard"
            color="primary"
            sx={{ minWidth: 250 }}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <Button id="formButton" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
