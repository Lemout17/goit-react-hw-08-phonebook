import "modern-normalize/modern-normalize.css";
import { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import Container from "../Container";
import Loader from "react-loader-spinner";
import routes from "../../routes";
import AppBar from "../App/AppBar";
import s from "./App.module.css";

const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "home-page" */)
);
const ContactsView = lazy(() =>
  import("../../views/ContactsView" /* webpackChunkName: "contacts-page" */)
);
const LoginView = lazy(() =>
  import("../../views/LoginView" /* webpackChunkName: "login-page" */)
);
const RegisterView = lazy(() =>
  import("../../views/RegisterView" /* webpackChunkName: "register-page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              className={s.loader}
              type="Rings"
              color="#00BFFF"
              height={80}
              width={80}
            />
          }
        >
          <Switch>
            <Route exact path={routes.home} exact component={HomeView} />
            <Route path={routes.contacts} component={ContactsView} />
            <Route path={routes.login} component={LoginView} />
            <Route path={routes.register} component={RegisterView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  getUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
