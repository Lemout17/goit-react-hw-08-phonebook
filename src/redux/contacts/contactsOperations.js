import axios from "axios";
import contactsActions from "./contacts-actions";

const fetchContact = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(contactsActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error.message));
  }
};

const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    const contact = {
      name,
      number,
    };

    dispatch(contactsActions.addContactRequest());

    try {
      const { data } = await axios.post("/contacts", contact);
      dispatch(contactsActions.addContactSuccess(data));
    } catch (error) {
      dispatch(contactsActions.addContactError(error.message));
    }
  };

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

export default { fetchContact, addContact, deleteContact };
