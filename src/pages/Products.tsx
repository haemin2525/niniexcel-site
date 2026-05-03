import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";

export default function Products() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">디지털 플래너</h1>
      </div>
      <ProductCards />
      <Footer />
    </>
  );
}
