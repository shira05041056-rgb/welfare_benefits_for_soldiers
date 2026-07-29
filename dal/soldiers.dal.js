import { ReturnDocument } from "mongodb";
import { db } from "../db/mongoDB.js";


const benefits = db.collection("benefits");

async function createBenefit(soldierId, benefit) {
    try {
        let soldier_benefit = {
            soldierId: soldierId,
            unit: benefit.unit,
            currentBenefitType: benefit.benefitType,
            history: [{
                startDate: benefit.startDate || new Date(),
                endDate: null,
                decisionReason: benefit.decisionReason,
                budgetApproved: benefit.budgetApproved,
                benefitType: benefit.benefitType,
                details: benefit.details
            }]
        };
        const insertedId = await benefits.insertOne(soldier_benefit);
        return soldier_benefit;
    } catch (e) {
        console.error(e);
    }
}

async function getBenifitBySoldierId(soldierId) {
    try {
        return await benefits.findOne({ soldierId: soldierId });
    } catch (e) {
        console.error(e);
    }

}


async function updateBenefit(soldierId, benefit) {
    try {
        const { history } = await benefits.findOne({ soldierId: soldierId });
        history[history.length - 1].endDate = new Date();
        history.push({
            startDate: benefit.decisionDate || new Date(),
            endDate: null,
            decisionReason: benefit.decisionReason,
            budgetApproved: benefit.budgetApproved,
            benefitType: benefit.benefitType,
            details: benefit.details
        });
        const res = await benefits.findOneAndUpdate({ soldierId: soldierId }, {
            $set: {
                history: history,
                currentBenefitType: benefit.benefitType
            }
        }, {returnDocument: "after"});
        return res
    } catch (e) {
        console.error(e);
    }
}



