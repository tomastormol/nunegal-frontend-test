import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCartCount, subscribeCart } from "../services/cart";
import { useCart } from "../hooks/useCart";

export default function Header() {
  const [count, setCount] = useState(getCartCount());
  const { reset } = useCart();

  useEffect(() => {
    const unsubscribe = subscribeCart(setCount);
    return unsubscribe;
  }, []);

  return (
    <header className="header-glass">
      <div className="header-left">
        <Link to="/" className="logo">
          📱 Mobile Shop
        </Link>
      </div>
      <div className="header-right">
        <div className="cart-badge">{count}</div>
        <button className="cart-reset-btn" onClick={reset} title="Empty cart">
          🗑
        </button>
      </div>
    </header>
  );
}
