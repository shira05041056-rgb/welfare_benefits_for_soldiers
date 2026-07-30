import {
    createBenefitValidition,
    getBenifitBySoldierIdValidition,
    updateBenefitValidition
} from "../services/soldiers.service.js";



export const postCreateBenefit = async (req, res) => {
    try {
        const benefit = req.body;
        let { soldierId } = req.params;
        soldierId = Number(soldierId);
        const response = await createBenefitValidition(soldierId, benefit);
        res.status(201).json(response);

    } catch (error) {
        res.status(400).json(error)
    }
};

export const getBenifitBySoldierIdMethod = async (req, res) => {
    let { soldierId } = req.params;
    soldierId = Number(soldierId);
    const response = await getBenifitBySoldierIdValidition(soldierId);
    res.json(response);
};

export const patchUpdateBenefit = async (req, res) => {
    const benefit = req.body;
    let { soldierId } = req.params;
    soldierId = Number(soldierId);
    const response = await updateBenefitValidition(soldierId, benefit);
    res.json(response);
};