import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { getProduct, editProduct } from "../../../api/products-handler";

import "./index.css";

const ProductEditPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const navigate = useNavigate();
  console.log(id);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("HEllo" + name);
    const newProduct = {
      product_name: name,
      product_price: price,
      product_image: image,
      product_description: desc,
    };
    editProduct(id, newProduct);
    navigate(-1);
  }

  const getDetails = (id) => {
    getProduct(id).then((res) => {
      console.log(res.data.product);
      const product = res.data.product;
      setName(product.product_name);
      setPrice(product.product_price);
      setImage(product.product_image);
      setDesc(product.product_description);
    });
  };
  if (name === "") getDetails(id);

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
          Update Product
        </Button>
      </Form>
    </section>
  );
};

export default ProductEditPage;
