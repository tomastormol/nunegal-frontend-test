# Nunegal Frontend Test - Mobile Shop

Single Page Application (SPA) for browsing and purchasing mobile devices, developed with **React + Vite**.

## 🚀 Tech Stack

- React 19
- Vite
- React Router
- Vanilla CSS (no UI frameworks)

## 📌 Current Status

✅ Project scaffold with Vite  
✅ API integration using `.env` configuration  
✅ Product Listing Page (PLP) with responsive grid  
✅ Real-time search
✅ Client-side routing configured  
✅ Initial Product Details Page

⏳ Upcoming features:
- Load real product details from API
- Actions (color / storage selectors)
- Add to cart functionality
- Persist cart count across views
- Client-side caching with 1h expiration
- Unit tests

---

## 🔗 API

Base URL:  
`https://itx-frontend-test.onrender.com/api`

| Endpoint         | Method | Description                   |
|------------------|--------|-------------------------------|
| `/product`        | GET    | Retrieves product list         |
| `/product/:id`    | GET    | Retrieves product details      |
| `/cart`           | POST   | Adds product to shopping cart  |

---

## 🛠 Installation & Setup

```bash
npm install
npm run dev 
