import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "react-bootstrap/Button";

import defaultImage from "../../img/poggers.png";
import s from "./UserMenu.module.css";

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={avatar} alt="" />
      <span className={s.text}>Hi, {name}</span>

      <Button variant="danger" type="button" onClick={onLogout}>
        Log out
      </Button>
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
