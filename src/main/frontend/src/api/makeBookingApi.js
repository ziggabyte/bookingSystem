import axios from "axios";
import {
  cleanService,
  cleanDate,
  cleanTime,
} from "../functions/cleanPostRequest";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const makeBooking = (
  event,
  username,
  email,
  address,
  serviceChoice,
  dateTime,
  user
) => {
  event.preventDefault();

  cleanService(serviceChoice);
  cleanDate(dateTime);
  cleanTime(dateTime);

  axios
    .post(
      "http://localhost:8080/api/addBooking",
      {
        name: username,
        address: address,
        date: "cleanDate",
        time: "cleanTime",
        service: cleanService,
        user: "",
        status: "UNASSIGNED",
        cleanerId: null,
      },
      config
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  alert(
    "Thank you " +
      username +
      " for your reservation of " +
      cleanService +
      " at " +
      address +
      " on the " +
      "cleanDate" +
      " at " +
      "cleanTime" +
      ". A confirmation will be sent to " +
      email
  );

  window.location.reload(false);
};

export default makeBooking;
