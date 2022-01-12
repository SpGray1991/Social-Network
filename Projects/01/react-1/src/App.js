import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { initializedApp } from "./Redux/app-reducer";
import Container from "./components/Container/Container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "../src/components/Common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Container />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialised: state.app.initialised,
  };
};

let AppContainer = connect(mapStateToProps, { initializedApp })(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer
        /* state={state}
          dispatch={store.dispatch.bind(store)}
          store={store} */
        />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
