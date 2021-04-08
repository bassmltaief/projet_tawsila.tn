import axios from "axios";
import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_PROFILE_USER,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT,
  GET_ELEMENTS,
  GET_ALL_USERS,
} from "../const/actionTypes";
import { getError, clearError } from "./errorAction";

export const register = (newUser) => async (dispatch) => {
  // newUser = {email,name,lastName,password}
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const { data } = await axios.post("/api/auth/register", newUser);
    localStorage.setItem("token", data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: { err: error.response.data, id: "register" },
    });
    //  alert(error.response.data[0].msg)
  }
};

export const login = (User) => async (dispatch) => {
  // User = {email,password}
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const { data } = await axios.post("/api/auth/login", User);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: { err: error.response.data, id: "login" },
    });
    // alert(error.response.data[0].msg)
  }
};

export const getProfile = () => async (dispatch) => {
  // User = {email,password}
  dispatch({
    type: GET_PROFILE_USER,
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    console.log(config);
    const { data } = await axios.get("/api/auth/current_user", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};

// export const get_elements= (Nser)=> async (dispatch)=>{

// dispatch({
//     type:GET_ELEMENTS,

// });
// try {
//     const { data } =await axios.post("/api/auth/register", Nser);
//     dispatch({
//     payload: data})
// } catch (error) {
//     console.error('ereur')
// }
// }

export const get_elements = (payload) => {
  return {
    type: GET_ELEMENTS,
    payload,
  };
};
export const loginAdmin = ({ email, password }) => (dispatch) => {
  //set headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // request body
  const body = JSON.stringify({ email, password });
  //
  axios
    .post("/user/admin", body, config)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch(getError(err.response.data, err.response.status, "LOGIN_FAIL"));
      dispatch({ type: LOGIN_FAIL });
    });
};

// Get All users
export const load_users = () => (dispatch, getState) => {
  axios
    .get("/api/admin", tokenConfig(getState))
    .then((res) => dispatch({ type: GET_ALL_USERS, payload: res.data }))
    .catch((err) => dispatch(getError(err.response.data, err.response.status)));
};

// Block User
export const block_User = (id, isBlock) => (dispatch, getState) => {
  axios
    .put("api/admin/" + id, isBlock, tokenConfig(getState))
    .then((res) => dispatch(load_users()))
    .catch((err) => dispatch(getError(err.response.data, err.response.status)));
};
export const tokenConfig = (getState) => {
  // get token from loacalStorage
  //const token = getState().authReducer.token;
  const token = localStorage.getItem("token");
  // set header
  const config = {
    headers: { "Content-type": "application/json" },
  };
  //add token to headers
  if (token) {
    config.headers["auth-token"] = token;
  }
  return config;
};
