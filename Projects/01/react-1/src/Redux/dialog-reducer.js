const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
  /*  newMessageBody: "", */
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.name,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        /* newMessageBody: "", */
      };

    /* case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newText,
      }; */

    default:
      return state;
  }
};

export const addMessage = (name) => {
  return { type: ADD_MESSAGE, name };
};

/* export const updateNewMessageBody = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, newText: text };
}; */

export default dialogReducer;
