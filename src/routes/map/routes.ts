import express from "express";
import { sendCoords } from "./POST_sendCoords";

const routes = express.Router();

routes.post("/send-coords", (req, res) => {
  sendCoords(req, res);
});

export default routes;
