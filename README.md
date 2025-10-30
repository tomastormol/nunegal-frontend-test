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

---

## 🔜 Upcoming Features

- Visual refactor of PLP to match PDP glassmorphism design
- UI polish and animations
- Client-side caching layer with TTL (1 hour)
- Unit tests (Vitest) for services and cart logic
- Separate styles for each component

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
