import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import s from "./ContactsFilter.module.css";
import contactsSelectors from "../../redux/contacts-selectors";

const ContactsFilter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Filter contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
