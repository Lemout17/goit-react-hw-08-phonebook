import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import defaultImage from "../../img/default.png";
import s from "./UserMenu.module.css";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={defaultImage} alt="" />
      <span>Hi, {name}</span>
      <button className={s.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
