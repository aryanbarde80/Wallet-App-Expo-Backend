# 💰 Expo Wallet Backend

This is the **backend API** for the Expo Wallet app — a simple personal finance tracker built with **Express.js**, **PostgreSQL**, and **Upstash Redis** for rate limiting.

---

## 🚀 Features

- Create, fetch, and delete transactions
- Calculate income, expenses & balance summary
- Rate limiting using Upstash Redis
- PostgreSQL database integration
- Built with Express.js and ES modules

---

## 📦 Tech Stack

- Node.js + Express
- PostgreSQL (via `postgres.js`)
- Upstash Redis + Ratelimit
- dotenv for environment config

---

## 📂 API Endpoints

### 🔸 Transactions

| Method | Endpoint                          | Description                         |
|--------|-----------------------------------|-------------------------------------|
| `POST` | `/api/transactions`              | Create a new transaction            |
| `GET`  | `/api/transactions/:userId`      | Get all transactions of a user     |
| `DELETE` | `/api/transaction/:id`         | Delete a specific transaction       |
| `GET`  | `/api/transactions/summary/:userId` | Get balance, income & expenses |

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/expo-wallet-backend.git
cd expo-wallet-backend
npm install
```

### 🧪 Run the server:

```bash
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file with the following:

```env
PORT=5001
DATABASE_URL=your_postgres_connection_url
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

---

## 📦 Related Repos

- 👉 [Frontend (React Native with Expo)](https://github.com/aryanbarde80/expo-wallet-app)

---

## 🧑‍💻 Author

**Aryan Barde**  
📧 [LinkedIn](https://linkedin.com/in/aryanbarde80)

---

## 📄 License

MIT License
