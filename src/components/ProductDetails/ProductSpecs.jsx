import "./ProductDetails.css";

export default function ProductSpecs({ product }) {
  return (
    <div className="details-table">
      <p><strong>CPU:</strong> {product.cpu}</p>
      <p><strong>RAM:</strong> {product.ram}</p>
      <p><strong>OS:</strong> {product.os}</p>
      <p><strong>Display:</strong> {product.displayResolution}</p>
      <p><strong>Battery:</strong> {product.battery}</p>
      <p><strong>Primary Camera:</strong> {product.primaryCamera}</p>
      <p><strong>Secondary Camera:</strong> {product.secondaryCmera}</p>
      <p><strong>Dimensions:</strong> {product.dimentions}</p>
      <p><strong>Weight:</strong> {product.weight}</p>
    </div>
  );
}
