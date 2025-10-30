import { describe, it, expect, beforeEach } from "vitest";
import { incrementCart, getCartCount, resetCart } from "../services/cart";

beforeEach(() => {
  localStorage.clear();
});

describe("cart service", () => {
  it("should start at 0", () => {
    expect(getCartCount()).toBe(0);
  });

  it("should increment cart count", () => {
    incrementCart();
    incrementCart();
    expect(getCartCount()).toBe(2);
  });

  it("should reset cart", () => {
    incrementCart();
    resetCart();
    expect(getCartCount()).toBe(0);
  });
});