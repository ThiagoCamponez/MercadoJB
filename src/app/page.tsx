import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
      <main className="mx-auto max-w-screen-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductGrid />
      </main>
  );
}
