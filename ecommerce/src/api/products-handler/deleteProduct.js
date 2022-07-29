import axios from "axios";
import { apiURI } from "../../global";

const deleteProduct = async (id) => {
  return axios.delete(apiURI + `/product/del/${id}`);
};

export default deleteProduct;
