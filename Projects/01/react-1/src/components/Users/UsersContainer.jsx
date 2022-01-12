import { connect } from "react-redux";
import {
  getUsers,
  pagesChanged,
  follow,
  unfollow,
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
/* import withAuthRedirect from "../../hoc/withAuthRedirect"; */
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPagesChanged = (currentPage) => {
    this.props.pagesChanged(currentPage, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPagesChanged={this.onPagesChanged}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

/* let AuthRedirectComponent = withAuthRedirect(UsersContainer); */

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};

/* export default connect(mapStateToProps, {
  getUsers,
  pagesChanged,
  follow,
  unfollow,
})(AuthRedirectComponent); */

export default compose(
  connect(mapStateToProps, {
    getUsers,
    pagesChanged,
    follow,
    unfollow,
  })
  /*  withAuthRedirect */
)(UsersContainer);
