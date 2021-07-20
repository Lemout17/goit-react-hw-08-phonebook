import { NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./Navigation.module.css";

const Navigation = () => {
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

      <NavLink
        className={s.nav_link}
        activeClassName={s.nav_link__active}
        to={routes.contacts}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
