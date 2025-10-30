import { describe, it, expect, vi, beforeEach } from "vitest";
import { setCache, getCache, clearCache } from "../services/cache";

describe("cache service", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return cached data if not expired", () => {
    setCache("testKey", { value: 42 }, 1000);
    expect(getCache("testKey")).toEqual({ value: 42 });
  });

  it("should return null if cache expired", () => {
    vi.useFakeTimers();
    setCache("expiredKey", { value: "old" }, 1);

    vi.advanceTimersByTime(2000);
    expect(getCache("expiredKey")).toBeNull();
  });

  it("should clear cache manually with clearCache", () => {
    setCache("toDelete", { foo: "bar" }, 1000);
    expect(getCache("toDelete")).toEqual({ foo: "bar" });

    clearCache("toDelete");
    expect(getCache("toDelete")).toBeNull();
  });
});
