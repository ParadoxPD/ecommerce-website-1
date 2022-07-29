import axios from "axios";
import { apiURI } from "../../global";

const editProduct = async (id, newProduct) => {
  return axios.put(apiURI + `/product/update/${id}`, newProduct);
};

export default editProduct;
