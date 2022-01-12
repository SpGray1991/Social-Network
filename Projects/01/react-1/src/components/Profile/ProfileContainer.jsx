import React from "react";
import { connect } from "react-redux";
import {
  getUserId,
  getUserStatus,
  updateStatus,
} from "../../Redux/profile-reducer";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId =
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.userId;

    if (!userId) {
      userId = this.props.id;
    }

    this.props.getUserId(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          isAuth={this.props.isAuth}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const ProfileURLMatch = (props) => {
  const match = useMatch("/profile/:userId");
  return <AuthRedirectComponent {...props} match={match} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.auth.id,
});

export default connect(mapStateToProps, {
  getUserId,
  getUserStatus,
  updateStatus,
})(ProfileURLMatch);

/* export default compose(
  connect(mapStateToProps, {
    getUserId,
  }),
  withAuthRedirect
)(ProfileContainer); */
