export function setCache(key, data, ttlSeconds = 3600) {
  const record = {
    data,
    expiry: Date.now() + ttlSeconds * 1000,
  };
  localStorage.setItem(key, JSON.stringify(record));
}

export function getCache(key) {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    const record = JSON.parse(item);

    if (Date.now() > record.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return record.data;
  } catch {
    return null;
  }
}

export function clearCache(key) {
  localStorage.removeItem(key);
}
