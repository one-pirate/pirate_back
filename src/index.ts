import express, { Request, Response } from "express";
import cors from "cors";
import mapRouter from "./routes/map/routes";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173", // Adjust the port if your frontend runs on a different one
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/map", mapRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
