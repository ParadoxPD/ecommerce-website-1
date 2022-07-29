import axios from "axios";
import { apiURI } from "../../global";

const getProduct = async (id) => {
  return axios.get(apiURI + `/product/${id}`, {});
};

export default getProduct;
