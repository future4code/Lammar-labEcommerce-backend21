import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.DB_PORT || 3003, () => {
  console.log("Server is running in http://localhost:3003");
});

export default app;
