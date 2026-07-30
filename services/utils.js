import { isDate } from "util/types";


export function isBenefitType(benefitType) {
    const typeOfBenefits = ["giftCard", "diningHall"];
    return typeOfBenefits.includes(benefitType);
} 

export function isGoodDate (month){
    const date = new Date(month)
    if (isDate(date) && date != "Invalid Date"){
        return (`${date.getFullYear()}-${date.getMonth() +1}`)
    }else return null
}

console.log(idGoodDate("szgfbg"));
