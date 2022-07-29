import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./index.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
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
        <Button block size="lg" type="submit" className="login-button">
          Login
        </Button>
        <div className="separator">OR</div>
        <Link to="/admin/register">
          <Button
            block
            size="lg"
            variant="outline-primary"
            className="register-button"
          >
            Register
          </Button>
        </Link>
      </Form>
    </section>
  );
};

export default LoginPage;
