import { userAPI, loginAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: true,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, data: { id, email, login, isAuth } };
};

export const getAuth = () => {
  return (dispatch) => {
    userAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };
};

export const loginThunkCreator = (email, password, rememberMe, setStatus) => {
  return (dispatch) => {
    loginAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) dispatch(getAuth());
      else setStatus(response.data.messages);
    });
  };
};

export const logoutThunkCreator = () => {
  return (dispatch) => {
    loginAPI.logout().then((response) => {
      if (response.data.resultCode === 0)
        dispatch(setUserData(null, null, null, false));
    });
  };
};

export default authReducer;
