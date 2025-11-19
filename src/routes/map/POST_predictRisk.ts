import { Request, Response } from "express";
import { predictRisk } from "../../services/fastapi";

export async function predictRiskHandler(req: Request, res: Response) {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Missing coordinates" });
    }

    try {
        const prediction = await predictRisk(latitude, longitude);
        res.json({
            input: { latitude, longitude },
            model_output: prediction
        });
    } catch {
        res.status(500).json({ error: "FastAPI unreachable" });
    }
}
