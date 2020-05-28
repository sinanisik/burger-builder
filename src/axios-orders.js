import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-428d2.firebaseio.com/",
});

export default instance;
