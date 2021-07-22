import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

import routes from "../../routes";

import s from "./Navigation.module.css";

const Navigation = ({ isAuth }) => {
  return (
    <nav className={s.nav_bar}>
      <NavLink
        className={s.nav_link}
        activeClassName={s.nav_link__active}
        exact
        to={routes.home}
      >
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          className={s.nav_link}
          activeClassName={s.nav_link__active}
          to={routes.contacts}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(Navigation);
