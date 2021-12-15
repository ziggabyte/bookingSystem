import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const loginUser = (event, username, password) => {
  event.preventDefault();
  axios
    .post(
      "http://localhost:8080/api/login",
      {},
      { params: { username, password } },
      config
    )
    .then((response) => rerouteIfSuccessful(response.data))
    .catch((error) => console.log(error));
};

const rerouteIfSuccessful = (data) => {
  console.log(data);
  this.props.history.push("/customerpage");
};

export default loginUser;
