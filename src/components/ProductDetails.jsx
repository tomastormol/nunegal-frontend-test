import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { fetchProductById, addToCartApi } from "../services/api";
import { incrementCart } from "../services/cart";
import Breadcrumbs from "./Breadcrumbs";
import ProductDetailsSkeleton from "./Skeleton/ProductDetailsSkeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setColor(data.options?.colors?.[0]?.code ?? "");
        setStorage(data.options?.storages?.[0]?.code ?? "");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleAddToCart() {
    setAdding(true);
    setAdded(false);
    try {
      await addToCartApi({
        id: product.id,
        colorCode: Number(color),
        storageCode: Number(storage),
      });
      incrementCart();
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    } finally {
      setAdding(false);
    }
  }

  return (
    <div>
      <Header />
      <div className="top-nav-line">
        <Breadcrumbs product={product} />
        <Link to="/" className="back-link">
          ← Back to list
        </Link>
      </div>
      <main className="container">
        {loading && <ProductDetailsSkeleton />}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!loading && product && (
          <div className="details-container">
            <div className="details-image">
              <img src={product.imgUrl} alt={product.model} />
            </div>

            <div className="details-info">
              <h2>
                {product.brand} {product.model}
              </h2>
              <p className="price">
                {product.price ? `${product.price}€` : "Price not available"}
              </p>

              <div className="details-table">
                <p>
                  <strong>CPU:</strong> {product.cpu}
                </p>
                <p>
                  <strong>RAM:</strong> {product.ram}
                </p>
                <p>
                  <strong>OS:</strong> {product.os}
                </p>
                <p>
                  <strong>Display:</strong> {product.displayResolution}
                </p>
                <p>
                  <strong>Battery:</strong> {product.battery}
                </p>
                <p>
                  <strong>Primary Camera:</strong> {product.primaryCamera}
                </p>
                <p>
                  <strong>Secondary Camera:</strong> {product.secondaryCmera}
                </p>
                <p>
                  <strong>Dimensions:</strong> {product.dimentions}
                </p>
                <p>
                  <strong>Weight:</strong> {product.weight}
                </p>
              </div>

              <div className="actions-panel">
                <div className="selectors">
                  <label>
                    Color
                    <select
                      value={color}
                      onChange={(e) => setColor(Number(e.target.value))}
                    >
                      {product.options.colors.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Storage
                    <select
                      value={storage}
                      onChange={(e) => setStorage(Number(e.target.value))}
                    >
                      {product.options.storages.map((s) => (
                        <option key={s.code} value={s.code}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  className="add-to-cart-btn"
                  onClick={handleAddToCart}
                  disabled={adding}
                >
                  {adding ? "Adding..." : added ? "✅ Added" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
