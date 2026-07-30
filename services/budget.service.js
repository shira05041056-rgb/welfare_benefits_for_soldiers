import { isDate } from "util/types";
import { createBudget, getAllBudget, getTransactionByBudgetId, createTransaction } from "../dal/budget.dal.js";
import { isBenefitType, isGoodDate } from "./utils.js";


async function createBudgetValidition(budget) {
    if (!isBenefitType(budget.benefitType)){
        return console.error("wrong Benefit type")
    }
    if (!isNaN(budget.allocatedAmount)){
        return console.error("wrong amount");
        
    }
    if (!isGoodDate(budget.month)){
        return console.error("wrong month")
    }
}

