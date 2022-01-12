import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik } from "formik";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      like={p.like}
      postId={p.id}
      /* key={p.id} */
      deletePost={props.deletePost}
    ></Post>
  ));

  /*  let newPostElement = React.useRef();

  let onAddPost = () => {
    props.addPost();
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }; */

  return (
    <>
      <AddPostForm addPost={props.addPost} />
      {/* <form onSubmit={handleSubmit}>
        <label className={s.post} for="content">
          My posts
        </label>
        <textarea
          onChange={onPostChange}
          value={props.postText}
          ref={newPostElement}
        ></textarea>
        <button onClick={onAddPost} className={s.btn} type="submit">
          Add post
        </button>
      </form> */}
      <div className={s.posts}>{postsElements}</div>
    </>
  );
});

const AddPostForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          props.addPost(values.name);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <div>
            <label className={s.post} htmlFor="name">
              My posts
            </label>
            <textarea
              type={"text"}
              name={"name"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></textarea>
            <button onClick={handleSubmit} className={s.btn} type={"submit"}>
              Add post
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default MyPosts;
