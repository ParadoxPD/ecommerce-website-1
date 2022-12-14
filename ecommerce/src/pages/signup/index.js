import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./index.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className="signup-container">
      <Form onSubmit={handleSubmit} className="signup-form">
        <Form.Group size="lg" controlId="email" className="input-container">
          <Form.Label>Email</Form.Label>

          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password" className="input-container">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" className="signup-button">
          Register
        </Button>
      </Form>
    </section>
  );
};

export default SignupPage;
