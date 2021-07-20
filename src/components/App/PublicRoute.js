import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

const PublicRoute = ({
  component: Component,
  redirectTo,
  isAuth,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuth && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
