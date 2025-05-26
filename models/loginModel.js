import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const User = db.define("login", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
