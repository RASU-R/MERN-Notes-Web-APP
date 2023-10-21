import express from "express";
import {getUser} from "../controllers/users.js";
import { getUserNotes,createNote,deleteNote } from "../controllers/notes.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:userId/notes",verifyToken, getUserNotes);
router.get("/:userId/:nid",verifyToken,deleteNote);
router.get("/:userId",getUser);
router.post("/:userId/newnotes",verifyToken,createNote);

export default router;
