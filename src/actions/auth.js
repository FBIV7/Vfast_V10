import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types.js";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types.js";

// login user
export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  console.log(body);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    //   dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// register user
export const register = ({ name,email, password, confirmpassword }) => async (
  dispatch
) => {
  const body = JSON.stringify({  name,email, password, confirmpassword });
  console.log(body);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    //   dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
