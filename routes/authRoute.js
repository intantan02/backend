import express from "express";
import { getNotes, createNotes, updateNotes, deleteNotes, getNotesById } from "../controllers/noteController.js";
import { register, login } from "../controllers/loginController.js";
import verifyToken from "../middleware/jwt.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/Notes", verifyToken, getNotes);
router.get("/Notes/:id", verifyToken, getNotesById);
router.post("/add-Notes", verifyToken, createNotes);
router.patch("/edit-Notes/:id", verifyToken, updateNotes);
router.delete("/del-Notes/:id", verifyToken, deleteNotes);

export default router;
