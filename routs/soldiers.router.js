import express from "express";
import { postCreateBenefit, getBenifitBySoldierIdMethod, patchUpdateBenefit} from "../ctrl/soldiers.ctrl.js";


const router = express.Router()

router.post("/:soldierId/benefits", postCreateBenefit)
router.get("/:soldierId/benefits", getBenifitBySoldierIdMethod)
router.patch("/:soldierId/benefits", patchUpdateBenefit)


export default router