import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [
    /*    {
      id: 1,
      follow: false,
      photoUrl: "https://gtavrl.ru/public/a15-krasivaya-muzhskaya-avatarka.jpg",
      fullName: "Sergey",
      status: "I am a boss",
      location: { city: "Zaporizhzhia", country: "Ukraine" },
    },
    {
      id: 2,
      follow: false,
      photoUrl: "https://gtavrl.ru/public/poscreenra.jpg",
      fullName: "Aleksandr",
      status: "I am the boss brother",
      location: { city: "Zielona Gura", country: "Poland" },
    },
    {
      id: 3,
      follow: false,
      photoUrl: "https://gtavrl.ru/public/fscreenshot-zd.jpg",
      fullName: "Dimon",
      status: "I am the boss friend",
      location: { city: "Zaporizhzhia", country: "Ukraine" },
    }, */
  ],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.fetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.fetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsers = (users) => {
  return { type: SET_USERS, users };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
};

export const toggleFetching = (fetching) => {
  return { type: TOGGLE_FETCHING, fetching };
};

export const toggleFollowingProgress = (fetching, id) => {
  return { type: TOGGLE_FOLLOWING_PROGRESS, fetching, id };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    userAPI
      .getUsers(currentPage, pageSize)
      .then((data) => {
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      })
      .catch(() => {
        dispatch(toggleFetching(true));
      });
  };
};

export const pagesChanged = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleFetching(true));
    userAPI
      .getUsers(currentPage, pageSize)
      .then((data) => {
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
      })
      .catch(() => {
        dispatch(toggleFetching(true));
      });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.Follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.Unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
