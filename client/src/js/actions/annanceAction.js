import axios from "axios";

import {
  NEW_ANNANCE,
  NEW_ANNANCE_FAIL,
  NEW_ANNANCE_SUCCESS,
  DELETE_ANNANCE,
  DELETE_ANNANCE_FAIL,
  DELETE_ANNANCE_SUCCESS,
  MODIF_ANNANCE,
  MODIF_ANNANCE_FAIL,
  MODIF_ANNANCE_SUCCESS,
  GET_ANNANCE_SUCCESS,
  GET_ANNANCE,
  GET_ANNANCE_FAIL,
} from "../const/actionTypes";

export const addAnnance = (NewAnnance) => async (dispatch) => {
  // newannance
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  dispatch({
    type: NEW_ANNANCE,
  });
  try {
    const { data } = await axios.post("/api/newannance", NewAnnance, config);
    dispatch({
      type: NEW_ANNANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ANNANCE_FAIL,
      payload: error.response.data,
    });
  }
};

export const modifiedAnnance = (id) => async (dispatch) => {
  // Product = { Article , Image , Description , Price}
  const config={
    headers:{
      Authorization:localStorage.getItem('token')
    }
  }
  dispatch({
    type: MODIF_ANNANCE,
  });
  try {
    const { data } = await axios.put(`/api/modifannance/${id}`,config);
    dispatch({
      type: MODIF_ANNANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MODIF_ANNANCE_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteAnnance = (id) => async (dispatch) => {
  const config={
    headers:{
      Authorization:localStorage.getItem('token')
    }
  }
  dispatch({
    type: DELETE_ANNANCE,
  });
  try {
    const { data } = await axios.delete(`/api/deleteannance/${id}`,config);
    dispatch({
      type: DELETE_ANNANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ANNANCE_FAIL,
      payload: error.response.data,
    });
  }
};

export const getAllannance = () => async (dispatch) => {
  dispatch({
    type: GET_ANNANCE,
  });
  try {
    const { data } = await axios.get("/api/annances");
    dispatch({
      type: GET_ANNANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ANNANCE_FAIL,
    });
  }
};
