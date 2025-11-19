import { Request, Response } from "express";

export const sendCoords = (req: Request, res: Response) => {
  const { latitude, longitude } = req.body;

  console.log("coordonnées reçues :", latitude, longitude);

  return res.json({
    status: "ok",
    latitude,
    longitude,
  });
};
w