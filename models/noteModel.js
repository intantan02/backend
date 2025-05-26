import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const User = db.define("Notes", {
  Judul: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Isi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Notes;

