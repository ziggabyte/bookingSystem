import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CustomerPage from "./pages/CustomerPage";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customerpage" element={<CustomerPage />} />
        </Routes>
      </Router>
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
