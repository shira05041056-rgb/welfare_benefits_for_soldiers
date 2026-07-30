
import { createBenefit, getBenifitBySoldierId, updateBenefit } from "../dal/soldiers.dal.js";
import { isBenefitType, isGoodDate } from "./utils.js";


export async function createBenefitValidition(soldierId, benefit) {
        if (isNaN(soldierId)) {
            throw Error();
        }
        if (!isBenefitType(benefit.benefitType)) {
            throw Error() ;
        }
        const res = await createBenefit(soldierId, benefit)
        return res
    }

export async function getBenifitBySoldierIdValidition(soldierId) {
        const res = await getBenifitBySoldierId(soldierId)
        return res
}

export async function updateBenefitValidition(soldierId, benefit) {
        if (isNaN(soldierId)) {
            return console.error("wrong soldierid");
        }
        if (!isBenefitType(benefit.benefitType)) {
            return console.error("wrong Benefit type");
        }

        const res = await updateBenefit(soldierId, benefit)
        return res
    }


