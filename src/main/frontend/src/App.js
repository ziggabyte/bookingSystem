import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/UserContext";

function App() {
    const [userContext, setUserContext] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
          <UserContext.Provider value={{
              userContext: userContext,
              setUserContext: setUserContext,
              isLoggedIn: isLoggedIn,
              setIsLoggedIn: setIsLoggedIn
          }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path={isLoggedIn ? "/booking" : "/"} element={isLoggedIn ? <Booking /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={isLoggedIn ? "/userpage" : "/"} element={isLoggedIn ? <UserPage /> : <Login />} />
          </Routes>
        </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;

export const CustomButton = styled(Button)({
  backgroundColor: "#364136",
  "&:hover": {
    backgroundColor: "#355F34",
  },
});
