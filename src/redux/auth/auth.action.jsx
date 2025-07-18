import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from "./auth.actionType";

export const loginUserAction = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    if (data.jwt) {
      localStorage.setItem("token", data.jwt);
    }
    console.log("login", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const registerUserAction = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    if (data.jwt) {
      localStorage.setItem("token", data.jwt);
    }
    console.log("register", data);
    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};
