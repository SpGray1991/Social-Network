import React from "react";
import { connect } from "react-redux";
import { getAuth, logoutThunkCreator } from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return (
      <div>
        <Header {...this.props} logout={this.props.logoutThunkCreator} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getAuth, logoutThunkCreator })(
  HeaderContainer
);
