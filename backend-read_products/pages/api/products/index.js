/* import { products } from "../../../lib/products"; */
import dbConnect from "../../../db/connect.js";
import Product from "../../../db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    console.log("POST REQUEST!");
    try {
      const productData = request.body;
      console.log("productData: ", productData);
      await Product.create(productData);
      response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
