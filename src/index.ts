import express, { Request, Response } from "express";
import mapRouter from "./routes/map/routes";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/map", mapRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
