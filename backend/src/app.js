import appRoutes from "./routes/app.routes.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", appRoutes);

export default app;
