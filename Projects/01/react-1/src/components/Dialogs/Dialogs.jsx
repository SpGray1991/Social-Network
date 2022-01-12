import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";
import { Formik } from "formik";

const Dialogs = (props) => {
  let state = props.dialogPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} /* key={d.id}  */ />
  ));

  let messagesElements = state.messages.map((e) => (
    <Message message={e.message} />
  ));

  if (!props.isAuth) {
    return <Navigate to="/login/" />;
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageForm addMessage={props.addMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          props.addMessage(values.name);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <label className={s.post} htmlFor="name">
              My messages
            </label>
            <textarea
              type={"text"}
              name={"name"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></textarea>
            <button onClick={handleSubmit} className={s.btn} type={"submit"}>
              Add messages
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Dialogs;
