import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultImage from "../../img/poggers.png";
import s from "./UserMenu.module.css";

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={avatar} alt="" />
      <span>Hi, {name}</span>
      <button className={s.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: defaultImage,
});
const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
