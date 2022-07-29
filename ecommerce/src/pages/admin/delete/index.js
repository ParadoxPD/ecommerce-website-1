import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../api/products-handler";

const DeleteProduct = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const navigate = useNavigate();
  console.log(id);
  function handleDelete(id) {
    // console.log("HEllo" + name);
    deleteProduct(id);
    navigate(-1);
  }

  handleDelete(id);

  return <></>;
};

export default DeleteProduct;
