import { describe, it, expect } from "vitest";

const filterProducts = (products, query) => {
  query = query.toLowerCase();
  return products.filter(
    (p) =>
      p.brand.toLowerCase().includes(query) ||
      p.model.toLowerCase().includes(query)
  );
};

describe("search filter", () => {
  const mockProducts = [
    { brand: "Apple", model: "iPhone 12" },
    { brand: "Samsung", model: "Galaxy S22" },
    { brand: "Xiaomi", model: "Mi 11" }
  ];

  it("should return matching products", () => {
    const result = filterProducts(mockProducts, "iphone");
    expect(result.length).toBe(1);
    expect(result[0].brand).toBe("Apple");
  });

  it("should be case insensitive", () => {
    const result = filterProducts(mockProducts, "samsung");
    expect(result[0].brand).toBe("Samsung");
  });

  it("should return empty array if no match", () => {
    const result = filterProducts(mockProducts, "nokia");
    expect(result.length).toBe(0);
  });
});