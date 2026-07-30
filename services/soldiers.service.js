
import { createBenefit, getBenifitBySoldierId, updateBenefit } from "../dal/soldiers.dal.js";


async function benefitValidition(soldierId, benefit) {
        if (!isNaN(soldierId)) {
            return console.error("wrong soldierid");
        }
        if (!isBenefitType(benefit.benefitType)) {
            return console.error("wrong Benefit type");
        }
        if (!(benefit.bugetApproved === true || benefit.bugetApproved === false )){
            return console.error("wrong bugetApproved")
        }
    }


