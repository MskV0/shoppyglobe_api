
# 🛒 ShoppyGlobe E-Commerce API

A full-featured backend API built with **Node.js**, **Express**, and **MongoDB** for an e-commerce app called **ShoppyGlobe**.

---

## 📦 Features

- User registration and login with **JWT authentication**
- Product catalog (CRUD-ready)
- Shopping cart (add/update/delete items)
- MongoDB integration via Mongoose
- Protected routes with middleware
- Tested via **Thunder Client**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yoshoppyglobe-api.git
cd shoppyglobe-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/shoppyglobe
JWT_SECRET=shoppysecret
```

### 4. Run the Server

```bash
npx nodemon server.js
```

---

## 🔐 Authentication

- `POST /register` – Register a new user
- `POST /login` – Login user and receive a JWT token

---

## 🛍 Product Routes

- `GET /products` – Get all products
- `GET /products/:id` – Get product by ID

---

## 🛒 Cart Routes (Protected)

> Add your token as a header:  
> `Authorization: Bearer <your_token>`

- `POST /cart` – Add product to cart
- `PUT /cart/:id` – Update quantity of product in cart
- `DELETE /cart/:id` – Remove product from cart

---

## 📸 Thunder Client Test Collection

Import the file [`shoppyglobe-thunder-collection-fixed.json`](./shoppyglobe-thunder-collection-fixed.json) into VS Code’s **Thunder Client** to test all routes.

---

## ✅ Sample Screenshots

screenshots/
├── Screenshot (34).png
├── Screenshot (35).png
├── Screenshot (36).png
├── Screenshot (37).png


## 📚 Folder Structure

```
shoppyglobe-api/
├── models/
├── controllers/
├── routes/
├── middleware/
├── server.js
├── .env
└── README.md
```

---

## 📝 License

This project is licensed for educational/demo use.
