import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import s from "./ContactsFilter.module.css";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const ContactsFilter = ({ value, onChange }) => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        Filter contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </form>
  );
};
const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
