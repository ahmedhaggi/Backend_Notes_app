import mongoose from "mongoose";
import Notes from "../models/notesModel.js";

// Get all notes
export const getAllNotes = async (req, res) => {
    try {
        const notes = await Notes.find()
        res.statu(200).json(notes)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}
// Create All Notes
export const creatNotes = async (req, res) => {
    try {
        const { title, descrption } = req.body
        const newNote = new Notes({ title, descrption, date: Date(date) })

        const note = await newNote.save()
        res.status(202).json(note)

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

// Update Notes
export const updateNote = async (req, res) => {
    const { title, descrption } = req.body;
    const note = await Notes(req.params.id)

    if (note) {
        note.ttile = title
        note.descrption = descrptiont
        const updateNote = await note.save();
        res.status(200).json(updateNote)
    }
}
// Delete Notes
export const deleteNote = async (req, res) => {
    try {
        const note = await findByIdAndDelete(req.params.id);
        if (note) {
            res.status(200).json({ message: 'Note deleted successfull' })
        }
    } catch (e) {
        res.status(500).json({ error: e.message })
    }


}
