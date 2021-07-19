import { connect } from "react-redux";
import contactsOperations from "../../redux/contactsOperations";
import s from "./Contacts.module.css";
import contactsSelectors from "../../redux/contacts-selectors";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.text}>{name} :</span>
          <span className={s.text}>{number}</span>
          <button
            className={s.button}
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
