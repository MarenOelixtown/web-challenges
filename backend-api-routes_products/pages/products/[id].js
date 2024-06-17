import { useRouter } from "next/router";
import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = useSWR(`/api/products/${id}`, fetcher);

  if (!product) {
    return "loading";
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Description: {product.description} €</p>
      <p>Price: {product.price}</p>
      <p>Currency: {product.currency}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}
