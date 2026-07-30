import express from "express";
import {postCreateBudget, postCreateTransaction, getAllBudgetMethod, getTransactionByBudgetIdMethod} from "../ctrl/budget.ctrl.js"

const router = express.Router()

router.post("/", postCreateBudget)
router.get("/", getAllBudgetMethod)
router.get("/:id/transactions", getTransactionByBudgetIdMethod)
router.post("/:id/spend", postCreateTransaction)


export default router