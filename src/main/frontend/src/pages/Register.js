import "../App.css";
import React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const registerNewUser = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/api/addUser",
        {
          username: username,
          password: password,
          name: name,
          address: address,
          email: email,
        },
        config
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("User: " + username + " has been registered. Welcome!");

    window.location.reload(false);
  };

  return (
    <div>
      <h1>Register</h1>
      <form action="/" onSubmit={registerNewUser}>
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
            id="name"
            label="Name"
            variant="standard"
            color="primary"
            sx={{ minWidth: 250 }}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="address"
            label="Address"
            variant="standard"
            color="primary"
            sx={{ minWidth: 250 }}
            onChange={(event) => setAddress(event.target.value)}
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
          <Button id="formButton" type="submit" variant="contained">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
