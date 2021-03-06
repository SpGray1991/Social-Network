import { addMessage } from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

/* const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  addMessage,
})(AuthRedirectComponent);

export default DialogsContainer; */

export default compose(
  connect(mapStateToProps, {
    /* updateNewMessageBody, */
    addMessage,
  }),
  withAuthRedirect
)(Dialogs);
