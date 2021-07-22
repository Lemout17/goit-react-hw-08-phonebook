import { connect } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import s from "./AppBar.module.css";
import { authSelectors } from "../../redux/auth";
import Clock from "../Clock";

const AppBar = ({ isAuth }) => {
  return (
    <header className={s.header}>
      <Navigation />

      {isAuth && <Clock />}

      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps, null)(AppBar);
