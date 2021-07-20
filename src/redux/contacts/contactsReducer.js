import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contacts-actions";

const items = createReducer([], {
  [contactsActions.fetchContactSuccess]: (_, { payload }) => payload,

  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [contactsActions.filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactSuccess]: () => false,
  [contactsActions.fetchContactError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const contactsError = createReducer(null, {
  [contactsActions.fetchContactError]: (_, { payload }) => payload,
  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  contactsError,
});
