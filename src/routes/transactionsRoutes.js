import express from "express";

import {createTransactions, deleteTransactions, getTransactionsByUserId, getSummary} from "../controllers/transactionsController.js"

const router = express.Router()

router.get("/:userId", getTransactionsByUserId );

router.delete("/:id", deleteTransactions );

router.post("/",createTransactions );

router.get("/:userId", getSummary);

export default router;