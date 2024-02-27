import express from "express";
import { creatNotes, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const routes = express.Router();

routes.route('/').get(getAllNotes).post(creatNotes)
routes.route('/:id').put(updateNote).delete(deleteNote)

export default routes