import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./Login.css";

const dummyEmail = 'admin@example.com';
const dummyPassword = 'Passw0rd!';

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  function handleLogin(event) {
    event.preventDefault();
    handleSubmit(fields.email, fields.password);
  }

  function handleDummyAccountLogin(event) {
    event.preventDefault();
    handleSubmit(dummyEmail, dummyPassword);
  }

  async function handleSubmit(email, password) {
    setIsLoading(true);

    try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      // redirect happens as a side effect of a parent route component
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>

      <form onSubmit={handleDummyAccountLogin}>
        <LoaderButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
            style={{ marginTop: 40 }}
          >
            Login with Dummy Account
          </LoaderButton>
        </form>
    </div>
  );
}
