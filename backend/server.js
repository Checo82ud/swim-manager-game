import express from "express";
import cors from "cors";
import resultRoutes from "./routes/results.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/results", resultRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));