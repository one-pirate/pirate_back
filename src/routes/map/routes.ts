import express from "express";
import { sendCoords } from "./POST_sendCoords";
import { predictRiskHandler } from "./POST_predictRisk";

const router = express.Router();

router.post("/send-coords", sendCoords);
router.post("/predict-risk", predictRiskHandler);

export default router;
