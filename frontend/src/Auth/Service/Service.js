 import axios from "axios";
import axiosInstance from "../../Interceptor/Interceptors";
 

const API_URL = process.env.REACT_APP_BACKEND_URL

//Register Auth service
export const RegisterAuth = async (userdetails) => {
  const res = await axios.post(`${API_URL}/register`, userdetails);
  return res;
};


//Login Auth service
export const LoginAuth = async (userdetails) => {
  const res = await axiosInstance.post("/login", userdetails);
  return res;
};