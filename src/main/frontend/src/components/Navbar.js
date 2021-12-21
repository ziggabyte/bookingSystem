import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Translate";
import ThemeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";

export default function Navbar() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate;
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  return (
    <div id="navbar">
      <ul id="navbarList">
        <li>
          <h3>Städafint AB</h3>
        </li>

        <li>
          <Link to="/" id="logoutLink">
            <LogoutIcon id="logoutIcon" />
          </Link>
        </li>

        <li>
          <Link to="/" id="languageLink">
            <LanguageIcon id="languageIcon" />
          </Link>
        </li>

        <li>
          <Button id="themeButton" onClick={toggleTheme}>
            <ThemeIcon id="themeIcon" />
          </Button>
        </li>
      </ul>
    </div>
  );
}
