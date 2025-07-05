import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import transactionsRoute from "./routes/transactionsRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//made middleware
app.use(rateLimiter);
// built-in middleware
app.use(express.json());


// health check route 
app.get("/health", (req, res) => {
  res.send("It's working");
});

console.log("my port:", process.env.PORT);

app.use("/api/transactions",transactionsRoute )

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
