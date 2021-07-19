import "modern-normalize/modern-normalize.css";
import s from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";
import { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../redux/contactsOperations";
import Loader from "react-loader-spinner";
import contactsSelectors from "../redux/contacts-selectors";

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { isLoading, contactsError } = this.props;

    return (
      <>
        <Section title={"Phonebook"}>
          <Form />
        </Section>

        <Section title={"Contacts"}>
          <div className={s.container}>
            <ContactsFilter />

            {isLoading ? (
              <Loader
                className={s.loader}
                type="Rings"
                color="#00BFFF"
                height={80}
                width={80}
              />
            ) : contactsError ? (
              <h2 className={s.error}>
                Sorry, something went wrong({contactsError.message})
              </h2>
            ) : (
              <Contacts />
            )}
          </div>
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
  contactsError: contactsSelectors.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
