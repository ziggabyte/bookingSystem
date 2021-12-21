import axios from "axios";
import { cleanService } from "../functions/cleanPostRequest";

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
  date,
  time,
  user
) => {
  event.preventDefault();

  cleanService(serviceChoice);

  axios
    .post(
      "http://localhost:8080/api/addBooking",
      {
        name: username,
        address: address,
        date: date,
        time: time,
        service: cleanService,
        user: "user",
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
