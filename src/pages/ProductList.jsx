import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Search from "../components/Search/Search";
import { fetchProducts } from "../services/api";
import ProductCardSkeleton from "../components/Skeleton/ProductCardSkeleton";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    const result = products.filter(
      (p) =>
        p.brand.toLowerCase().includes(q) || p.model.toLowerCase().includes(q)
    );
    setFiltered(result);
  }, [search, products]);

  return (
    <div>
      <Header />
      <main className="container">
        <div className="search-bar">
          <Search value={search} onChange={setSearch} />
        </div>
        {loading && (
          <div className="grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}

        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && <ProductGrid products={filtered} />}
      </main>
    </div>
  );
}
