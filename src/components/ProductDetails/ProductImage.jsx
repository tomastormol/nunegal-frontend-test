import "./ProductDetails.css";

export default function ProductInfo({ imgUrl, model }) {
  return (
    <div className="details-image">
      <img src={imgUrl} alt={model} />
    </div>
  );
}
