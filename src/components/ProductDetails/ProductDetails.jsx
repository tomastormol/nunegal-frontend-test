import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSpecs from "./ProductSpecs";
import ProductActions from "./ProductActions";
import ProductDetailsSkeleton from "../Skeleton/ProductDetailsSkeleton";
import { fetchProductById, addToCartApi } from "../../services/api";
import { incrementCart } from "../../services/cart";
import "./ProductDetails.css";

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
      setTimeout(() => setAdded(false), 1000);
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
        {error && <p className="error">Error: {error}</p>}

        {!loading && product && (
          <div className="details-container">
            <ProductImage {...product} />
            <div className="details-right">
              <div className="details-wrapper">
                <ProductInfo {...product} />
                <ProductSpecs product={product} />
                <div className="actions-wrapper">
                  <ProductActions
                    product={product}
                    color={color}
                    setColor={setColor}
                    storage={storage}
                    setStorage={setStorage}
                    handleAddToCart={handleAddToCart}
                    adding={adding}
                    added={added}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
