import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DB_NAME || "note",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  }
);

export default db;
