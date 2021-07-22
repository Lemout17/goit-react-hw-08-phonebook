import { Component } from "react";
import { connect } from "react-redux";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./Form.module.css";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { contacts, onSubmit } = this.props;
    const { name, number } = this.state;

    e.preventDefault();

    contacts.find((contact) => contact.name === name)
      ? alert(`This person ${name} is already in contacts`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`This number ${number} is already in contacts`)
      : onSubmit(this.state);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <MDBInput
          className="text-light"
          label="Name"
          id="typeText"
          contrast
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <MDBInput
          className="text-light"
          label="Number"
          id="typePhone"
          contrast
          autoComplete="off"
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <MDBBtn rounded>Add contact</MDBBtn>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
