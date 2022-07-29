import React, { useState } from "react";
import { getProducts } from "../../api/products-handler";
import NavBar from "../../Components/navbar";
import ProductCard from "../../Components/product-card";

import "./index.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
          key={index}
          isAdmin={false}
          id={element._id}
          buyHandler={buyHandler}
        />
      );
    });
    return cards;
  };

  const buyHandler = (event) => {
    const productID = event.target.id;
    if (!cartItems.includes(productID)) setCartItems([...cartItems, productID]);
    console.log(cartItems.length);
  };

  return (
    <>
      <NavBar cartValue={cartItems.length} />
      <div className="products-container">{generateCards()}</div>
    </>
  );
};

export default HomePage;
