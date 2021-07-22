import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

import defaultImage from "../../img/poggers.png";
import s from "./UserMenu.module.css";
// import Button from "react-bootstrap/Button"
import { MDBBtn } from "mdb-react-ui-kit";

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={avatar} alt="" />
      <span className={s.text}>Hi, {name}</span>

      <MDBBtn rounded className="mx-2" color="danger" onClick={onLogout}>
        Log out
      </MDBBtn>
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
