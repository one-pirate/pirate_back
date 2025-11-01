import { Request, Response } from "express";

export const sendCoords = (req: Request, res: Response) => {
  const { lat, lng } = req.body;
  res.send(
    `Coordinates received: Latitude ${lat}, Longitude ${lng}`
  );
};
