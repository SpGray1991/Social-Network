import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    f: null,
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
