import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const registerNewUser = (event, username, password, name, address, email) => {
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

export default registerNewUser;
