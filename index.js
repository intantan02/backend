import express from "express";
import cors from "cors";
import UserRoute from "./routes/authRoute.js";
import db from "./config/Database.js";

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);


try {
  await db.authenticate();
  console.log("Database connected...");
  await db.sync();
} catch (err) {
  console.error("Connection error:", err);
}

app.listen(port, () => console.log(`Server running on port ${port}`));
