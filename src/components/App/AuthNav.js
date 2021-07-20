import { NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./Navigation.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={routes.login}
        className={s.nav_link}
        activeClassName={s.nav_link__active}
      >
        Log in
      </NavLink>
      <NavLink
        to={routes.register}
        className={s.nav_link}
        activeClassName={s.nav_link__active}
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
