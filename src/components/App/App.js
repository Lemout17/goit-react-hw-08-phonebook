import "modern-normalize/modern-normalize.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import s from "./App.module.css";

import { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import routes from "../../routes";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import Container from "../Container"
import AppBar from "../App/AppBar";
import Loader from "react-loader-spinner";

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
      <>
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
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
