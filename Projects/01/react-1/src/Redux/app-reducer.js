import { getAuth } from "./auth-reducer";

const INITIALISED_SUCCESS = "INITIALISED_SUCCESS";

let initialState = {
  initialised: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialised: true,
      };

    default:
      return state;
  }
};

export const initialisedSuccess = () => {
  return { type: INITIALISED_SUCCESS };
};

export const initializedApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise]).then(() => {
      dispatch(initialisedSuccess());
    });
  };
};

export default appReducer;
