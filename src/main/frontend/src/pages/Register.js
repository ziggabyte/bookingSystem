import "../App.css";
import React from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import registerNewUser from "../api/registerNewUserApi";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../App";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div id="pageDiv">
      <h1>Register</h1>
      <form
        onSubmit={(event) =>
          registerNewUser(event, username, password, name, address, email)
        }
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
          <TextField
            id="name"
            label="Name"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="address"
            label="Address"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            color="success"
            sx={{ minWidth: 250 }}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <CustomButton id="formButton" type="submit" variant="contained">
            Register
          </CustomButton>
        </div>
      </form>
      <Link to="/" id="logoutLink">
        <LogoutIcon id="logoutIcon" />
      </Link>
    </div>
  );
}
