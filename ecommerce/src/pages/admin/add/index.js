import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import { addProduct } from "../../../api/products-handler";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(name);
    addProduct(name, price, image, desc);
    navigate(-1);
  }
  return (
    <section className="login-container">
      <Form onSubmit={handleSubmit} className="add-form">
        <Form.Group size="lg" controlId="name" className="input-container">
          <Form.Label>Product Name</Form.Label>

          <Form.Control
            autoFocus
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="price" className="input-container">
          <Form.Label>Product Price</Form.Label>

          <Form.Control
            required
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="image" className="input-container">
          <Form.Label>Product Image</Form.Label>

          <Form.Control
            required
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="desc" className="input-container">
          <Form.Label>Product Description</Form.Label>

          <Form.Control
            required
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" className="add-button">
          Add
        </Button>
      </Form>
    </section>
  );
};

export default AddProductPage;
