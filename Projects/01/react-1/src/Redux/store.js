import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _callSubscriber() {
    console.log("State changed");
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", like: 300 },
        { id: 2, message: "How are you?", like: 350 },
        { id: 3, message: "i'm fine!" },
        { id: 4, message: "" },
      ],
      newPostText: "",
    },
    dialogPage: {
      dialogs: [
        { id: 1, name: "Brother" },
        { id: 2, name: "Kostya" },
        { id: 3, name: "Sanya" },
        { id: 4, name: "Dimon" },
        { id: 5, name: "Vanya" },
        { id: 6, name: "Toha" },
        { id: 7, name: "Kerya" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "i'm fine!" },
        { id: 4, message: "Ok" },
      ],
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._callSubscriber(this._state);
  },
};
