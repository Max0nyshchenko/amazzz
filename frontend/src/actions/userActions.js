import Cookie from "js-cookie";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
} from "../constants/userConstants";
const { default: Axios } = require("axios");

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const  data  =  Axios.post("/api/users/signin", {email, password});
    // const data = { email, password };
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    console.error(error);
  }
};

export { signin };
