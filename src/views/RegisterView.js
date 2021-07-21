import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";

// import Button from "react-bootstrap/Button"
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import s from "../components/Form/Form.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.container}>
        <h1>Register</h1>
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
          />

          <MDBInput
            className="text-light"
            label="Email"
            id="typeEmail"
            contrast
            autoComplete="off"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <MDBInput
            className="text-light"
            label="Password"
            id="typePassword"
            contrast
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          {/* <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label> */}

          <MDBBtn rounded>Register</MDBBtn>

          {/* <Button variant="primary" type="submit">
            Register
          </Button> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
