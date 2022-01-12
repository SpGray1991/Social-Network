import { addPost, deletePost } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    postId: state.profilePage.posts.id,
    /*  postText: state.profilePage.newPostText, */
  };
};
/* 
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
}; */

const MyPostsContainer = connect(mapStateToProps, { addPost, deletePost })(
  MyPosts
);

export default MyPostsContainer;
