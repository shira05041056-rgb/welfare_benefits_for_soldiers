import { isDate } from "util/types";


export function isBenefitType(benefitType) {
    const typeOfBenefits = ["giftCard", "diningHall"];
    return typeOfBenefits.includes(benefitType);
} 

export function isGoodDate (month){
    const date = new Date(month)
    return (isDate(date) && date != "Invalid Date")
}





