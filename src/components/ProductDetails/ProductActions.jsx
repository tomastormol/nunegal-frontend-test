import "./ProductDetails.css";

export default function ProductActions({
  product,
  color,
  setColor,
  storage,
  setStorage,
  handleAddToCart,
  adding,
  added
}) {
  return (
    <div className="actions-panel">
      <div className="selectors">
        <label>
          Color
          <select value={color} onChange={e => setColor(Number(e.target.value))}>
            {product.options.colors.map(c => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </select>
        </label>

        <label>
          Storage
          <select value={storage} onChange={e => setStorage(Number(e.target.value))}>
            {product.options.storages.map(s => (
              <option key={s.code} value={s.code}>{s.name}</option>
            ))}
          </select>
        </label>
      </div>

      <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={adding}>
        {adding ? "Adding..." : added ? "✅ Added" : "Add to cart"}
      </button>
    </div>
  );
}
