import { products } from "../../data/products";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;

  const product = products.find((prod) => prod.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.tagline}</p>
      <p>{product.description}</p>
    </div>
  );
}