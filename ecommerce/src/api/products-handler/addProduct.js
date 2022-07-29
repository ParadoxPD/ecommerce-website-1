import axios from "axios";
import { apiURI } from "../../global";

const addProduct = async (name, price, image, desc) => {
  return axios.post(apiURI + "/product/add", {
    product_name: name,
    product_price: price,
    product_image: image,
    product_description: desc,
  });
};

export default addProduct;
