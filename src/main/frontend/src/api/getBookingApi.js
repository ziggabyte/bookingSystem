import axios from "axios";
import { useNavigate } from "react-router-dom";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const getBookingApi = (event, userId) => {
  event.preventDefault();

  axios
    .post(`http://localhost:8080/api/getBookings/${userId}`, config)
    .then((response) => RerouteIfSuccessful(response.data))
    .catch((error) => console.log(error));
};

const RerouteIfSuccessful = (data) => {
  console.log("loginapi data: " + data);
  const navigate = useNavigate();
  navigate("/customerpage", { state: data });
};
