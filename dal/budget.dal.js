import { client } from "../db/supabase.js";


async function createBudget(budget) {
    const { data, error } = await client.from("budget").insert({
        unit: budget.unit,
        benefitType: budget.benefitType,
        month: budget.month,
        allocatedAmount: budget.allocatedAmount
    },).select();
    if (error) return error;
    return data;

}


async function getAllBudget() {
    const { data, error } = await client.from("budget").select("*");
    
    for (const budget of data) {
        let spentAmount = (await client.from("exploitation").select("amount").eq("budgetid", budget.id)).data;
        if (spentAmount.length > 0) {
            spentAmount = (spentAmount.reduce((curr, ecc) => {
                return curr.amount + ecc.amount;

            })).amount;
        } else { spentAmount = 0; }
        budget.spentAmount = spentAmount
        budget.remainingAmount = budget.allocatedAmount - spentAmount
    }
    if (error) return error;
    return data;
}

async function getTransactionByBudgetId(budgetId) {
    const { data, error } = await client.from("exploitation").select("*").eq("budgetid", budgetId);
    if (error) return error;
    return data;
}


async function createTransaction(budgetId, transaction) {
    const { data, error } = await client.from("exploitation").insert({
        budgetid: budgetId,
        amount: transaction.amount,
        reason: transaction.reason || null
    },).select();
    if (error) return error;
    return data;

}


export {
    createBudget,
    getAllBudget,
    getTransactionByBudgetId,
    createTransaction
}