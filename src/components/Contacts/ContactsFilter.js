import { connect } from "react-redux";

import contactsActions from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./ContactsFilter.module.css";
import { MDBInput } from "mdb-react-ui-kit";

const ContactsFilter = ({ value, onChange }) => {
  return (
    <form className={s.form}>
      <MDBInput
        className="text-light"
        label="Filter contacts by name"
        id="typeText"
        contrast
        type="text"
        name="name"
        value={value}
        onChange={onChange}
      />
      {/* <label className={s.label}>
        Filter contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label> */}
    </form>
  );
};
const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
