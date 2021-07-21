import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import { MDBInput } from "mdb-react-ui-kit";

// import Button from "react-bootstrap/Button"

import s from "../components/Form/Form.module.css";
import { MDBBtn } from "mdb-react-ui-kit";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.container}>
        <h1>Log in</h1>

        <form className={s.form} onSubmit={this.handleSubmit}>
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
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label> */}

          {/* <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label> */}

          <MDBBtn rounded>Log in</MDBBtn>

          {/* <Button variant="primary" type="submit">
            Log in
          </Button> */}
        </form>

        {/* <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={this.handleChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
