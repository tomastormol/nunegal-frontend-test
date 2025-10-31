# Nunegal Frontend Test - Mobile Shop

Single Page Application (SPA) for browsing and purchasing mobile devices, built with **React + Vite**

## 🚀 Tech Stack

- React 19
- Vite
- React Router
- Vanilla CSS
- LocalStorage

---

## 📌 Current Status

✅ Vite + React project scaffold  
✅ `.env` API configuration  
✅ Product Listing Page (PLP) with responsive grid  
✅ Real-time search (brand/model)  
✅ Routing configured (`/` + `/product/:id`)  
✅ Product Details Page with dynamic data from API  
✅ Add-to-cart functionality working  
✅ Local persistence using `localStorage`  
✅ Reactive cart counter (syncs across browser tabs via `storage` + custom `cart-updated` event)

✅ Breadcrumb

✅ Client-side caching layer with TTL (1 hour)

✅ ProductDetails Skeleton

✅ ProductDetails Refactor

✅ Separate styles for each component

✅ Unit tests (Vitest) for cache service, cart and search components

---

## 🔜 Upcoming Features

- sort CSS styles alphabetically

## Will I have time to do this?

- Bound effect for Cart
- { isLoading ? <Skeleton>} change to <Suspense>  fallback={<Loading />} new React feature

---

## 🔗 API

Base URL (via `.env`):  
`https://itx-frontend-test.onrender.com/api`

| Endpoint         | Method | Description                  |
|------------------|--------|------------------------------|
| `/product`        | GET    | Retrieves product list        |
| `/product/:id`    | GET    | Retrieves product details     |
| `/cart`           | POST   | Adds product to shopping cart |

---

## 🛠 Installation & Setup

```bash
npm install
npm run dev
