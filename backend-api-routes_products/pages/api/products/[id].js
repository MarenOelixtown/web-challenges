import { getProductById } from "../../../services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);
  console.log(product, id);
  response.status(200).json(product);
}
