import { connect } from "react-redux";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./Contacts.module.css";
import { MDBBtn } from "mdb-react-ui-kit";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length > 0 && (
        <div className={s.container}>
          <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
              <li className={s.item} key={id}>
                <span className={s.text}>{name} :</span>
                <span className={s.text}>{number}</span>

                <MDBBtn
                  outline
                  rounded
                  size="sm"
                  className="mx-2"
                  color="danger"
                  onClick={() => {
                    onDelete(id);
                  }}
                >
                  Delete
                </MDBBtn>

                {/* <button
                  className={s.button}
                  onClick={() => {
                    onDelete(id)
                  }}
                >
                  Delete
                </button> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
