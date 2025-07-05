import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import transactionsRoute from "./routes/transactionsRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//made middleware
app.use(rateLimiter);
// built-in middleware
app.use(express.json());

async function initDB() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10,2) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at DATE DEFAULT CURRENT_DATE
      )
    `;

    // DECIMAL(10,2) means max = 99999999.99
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initializing DB", error);
    process.exit(1); // Exit with failure
  }
}


app.get("/", (req, res) => {
  res.send("It's working");
});

console.log("my port:", process.env.PORT);

app.use("/api/transactions",transactionsRoute )

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
