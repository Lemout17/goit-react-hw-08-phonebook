import { Component } from "react";
import { connect } from "react-redux";
import Section from "../components/Section";
import Form from "../components/Form";
import Contacts from "../components/Contacts";
import ContactsFilter from "../components/Contacts/ContactsFilter";
import Loader from "react-loader-spinner";
import s from "./ContactsView.module.css";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contacts-selectors";

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { isLoading, contactsError, contacts } = this.props;
    console.log(contacts);
    return (
      <main>
        <Section title={"Contacts"}>
          <div className={s.container}>
            <Form />

            {contacts.length > 0 && <ContactsFilter />}
            {/* {isLoading ? (
              <Loader
                className={s.loader}
                type="Rings"
                color="#00BFFF"
                height={80}
                width={80}
              />
            ) : contactsError ? (
              <h2 className={s.error}>
                Sorry, something went wrong({contactsError})
              </h2>
            ) : (
              <Contacts />
            )} */}
            {isLoading ? (
              <Loader
                className={s.loader}
                type="Rings"
                color="#00BFFF"
                height={80}
                width={80}
              />
            ) : (
              contacts.length > 0 && <Contacts />
            )}
          </div>
        </Section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  isLoading: contactsSelectors.getLoading(state),
  contactsError: contactsSelectors.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
