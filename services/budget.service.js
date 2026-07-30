
import { createBudget, getAllBudget, getTransactionByBudgetId, createTransaction } from "../dal/budget.dal.js";
import { isBenefitType, isGoodDate } from "./utils.js";


export async function createBudgetValidition(budget) {
    if (!isBenefitType(budget.benefitType)) {
        throw Error();
    }
    if (isNaN(budget.allocatedAmount)) {
        throw Error();

    }
    if (!isGoodDate(budget.month)) {
        throw Error();
    }
    const res = await createBudget(budget);
    return res;
}


export async function getAllBudgetValidition() {

    const res = await getAllBudget();
    return res;
}

export async function getTransactionByBudgetIdValidition(budgetId) {
    if (isNaN(budgetId)) {
        return console.error("wrong budgetId");
    }
    const res = await getTransactionByBudgetId(budgetId);
    return res;
}

export async function createTransactionValidition(budgetId, transactions) {
    if (isNaN(budgetId)) {
        return console.error("wrong budgetId");
    }
    if (isNaN(transactions.amount)) {
        return console.error("wrong amount");
    }
    const res = await createTransaction(budgetId, transactions);
    return res;
}

