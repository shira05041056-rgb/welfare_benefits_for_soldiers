import {
    createBudgetValidition,
    createTransactionValidition,
    getAllBudgetValidition,
    getTransactionByBudgetIdValidition
} from "../services/budget.service.js";


export const postCreateBudget = async (req, res) => {
    const budget = req.body;
    const response = await createBudgetValidition(budget);
    res.status(201).json(response);
};

export const getAllBudgetMethod = async (req, res) => {
    const response = await getAllBudgetValidition();
    res.json(response);
};

export const getTransactionByBudgetIdMethod = async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    const response = await getTransactionByBudgetIdValidition(id);
    res.json(response);
}

export const postCreateTransaction = async (req, res) => {
    const transaction = req.body
    let { id } = req.params;
    id = Number(id);
    const response = await createTransactionValidition(id, transaction);
    res.json(response);
}