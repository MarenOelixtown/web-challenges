import useSWR from "swr";
import Link from "next/link";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function Products() {
  const { data } = useSWR("/api/products", fetcher);

  if (!data) {
    return "loading";
  }
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Description: {product.description} €</p>
          <p>Price: {product.price}</p>
          <p>Currency: {product.currency}</p>
          <p>Category: {product.category}</p>
          <Link href={`/products/${product.id}`}>Go to Detailspage</Link>
        </li>
      ))}
    </ul>
  );
}
