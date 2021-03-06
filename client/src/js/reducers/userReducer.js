import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  GET_PROFILE_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT,
  GET_ALL_USERS,
} from "../const/actionTypes";

const initialState = {
  user: null,
  loading: null,
  token: null,
  isAuth: null,
  errors: {},
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case GET_PROFILE_USER:
      return { ...state, loading: true };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
        isAuth: true,
      };

    case GET_PROFILE_SUCCESS:
      return { ...state, loading: false, user: payload.user, isAuth: true };

    case REGISTER_FAIL:
    case GET_PROFILE_FAIL:
    case LOGIN_FAIL:
      return { ...state, loading: false, isAuth: false, errors: payload };
    case LOGOUT:
      return { ...state, user: null, isAuth: false, token: null };
      case GET_ALL_USERS:
        return {
          ...state,
          user:payload.user,
        };
    default:
      return state;
      
  }
};

export default userReducer;
