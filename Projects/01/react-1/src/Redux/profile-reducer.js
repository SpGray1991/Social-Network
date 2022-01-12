import { userAPI, userProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
/* 
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"; */

const SET_USER_PROFILE = "SET_USER_PROFILE ";

const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi", like: 300 },
    { id: 2, message: "How are you?", like: 350 },
    { id: 3, message: "i'm fine!" },
    { id: 4, message: "You cool!" },
  ],
  /* newPostText: "", */
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.name,
        like: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };

    /* case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }; */

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_USER_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPost = (name) => {
  return { type: ADD_POST, name };
};

export const deletePost = (postId) => {
  return { type: DELETE_POST, postId };
};

/* export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
}; */

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setUserStatus = (status) => {
  return { type: SET_USER_STATUS, status };
};

export const getUserId = (userId) => {
  return (dispatch) => {
    /* let userId = match && match.params && match.params.userId;

    if (!userId) {
      userId = 21326;
    } */

    userAPI.getUserId(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    /* let userId = match && match.params && match.params.userId;

    if (!userId) {
      userId = id;
    } */

    userProfileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    userProfileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) dispatch(setUserStatus(status));
    });
  };
};

export default profileReducer;
