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
  
  const initialState = {
    annances: [],
    annance: null,
    loading: false,
    token: null,
    errors: null,
  };
  const annanceReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case NEW_ANNANCE:
      case MODIF_ANNANCE:
      case DELETE_ANNANCE:
        return { ...state, loading: true };
  
      case NEW_ANNANCE_SUCCESS:
        return { ...state, loading: false, annance: payload.annance };
  
      case MODIF_ANNANCE_SUCCESS:
        return {
          ...state,
          loading: false,
          annances: state.map((annance) =>
            annance._id === payload._id ? { ...annance, ...payload } : annance
          ),
        };
      case DELETE_ANNANCE_SUCCESS:
        return {
          ...state,
          loading: false,
          annances: state.annances.filter(
            (annance) => annance._id !== payload._id
          ),
        };
  
      case NEW_ANNANCE_FAIL:
      case MODIF_ANNANCE_FAIL:
      case DELETE_ANNANCE_FAIL:
        return { ...state, errors: payload };
  
      case GET_ANNANCE:
        return { ...state, loading: true };
      case GET_ANNANCE_SUCCESS:
        return { ...state, annances: payload };
      case GET_ANNANCE_FAIL:
        return { ...state, errors: payload };
      default:
        return state;
    }
  };
  
  export default annanceReducer;