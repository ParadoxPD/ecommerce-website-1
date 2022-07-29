import React, { useState } from "react";
import { getProducts } from "../../api/products-handler";
import ProductCard from "../../Components/product-card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./index.css";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const preloader = () => {
    getProducts().then((res) => {
      if (products.length === 0) setProducts(res.data.products);
      console.log(products);
    });
  };

  const generateCards = () => {
    preloader();
    let cards = [];
    products.forEach((element, index) => {
      cards.push(
        <ProductCard
          image={element.product_image}
          price={element.product_price}
          name={element.product_name}
          desc={element.product_description}
          isAdmin={true}
          key={index}
          id={element._id}
        />
      );
    });
    return cards;
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </div>
        <div className="add-button">
          <Link to="/admin/products/add">
            <Button>Add Product</Button>
          </Link>
        </div>
      </div>
      <div className="products-container-admin">{generateCards()}</div>
    </>
  );
};

export default AdminPage;
