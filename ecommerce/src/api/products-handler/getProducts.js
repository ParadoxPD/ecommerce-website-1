import axios from "axios";
import { apiURI } from "../../global";

const getProducts = async () => {
  // let res;
  return axios.get(apiURI + "/product");
};

export default getProducts;
