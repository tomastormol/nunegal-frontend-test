import "./ProductDetails.css";

export default function ProductInfo({ brand, price, model }) {
  return (
    <div className="details-info-title">
      <h2>
        {brand} {model}
      </h2>
      <p className="price">{price ? `${price}€` : "Price not available"}</p>
    </div>
  );
}
