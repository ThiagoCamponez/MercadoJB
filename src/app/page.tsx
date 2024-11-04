import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <main className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 p-1 md:grid-cols-3">
      <ProductGrid />
    </main>
  );
}
