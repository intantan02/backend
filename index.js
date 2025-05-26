import express from "express";
import cors from "cors";
import UserRoute from "./routes/authRoute.js";
import db from "./config/Database.js";

const app = express();
const PORT = process.env.PORT || 8080;

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


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

