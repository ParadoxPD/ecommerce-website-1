import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
// import deleteProduct from "../../api/products-handler/deleteProduct";

import "./index.css";

const ProductCard = (props) => {
  const addProductHandler = () => {
    return;
  };

  console.log(props);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} />
      </div>
      <div className="desc-container">
        <div className="product-name">{props.name}</div>
        <div className="product-price">{`₹${props.price}`}</div>
      </div>
      {props.isAdmin ? (
        <>
          <Link to={`/admin/products/delete?id=${props.id}`}>
            <Button variant="danger">Delete</Button>
          </Link>
          <Link to={`/admin/products/edit?id=${props.id}`}>
            <Button variant="warning">Edit</Button>
          </Link>
        </>
      ) : (
        <Button onClick={props.buyHandler} id={props.id}>
          Buy Now
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
