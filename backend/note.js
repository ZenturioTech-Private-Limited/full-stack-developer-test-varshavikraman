import {Router} from "express"
import {Schema, model} from "mongoose"

const noteRouter = Router();

const noteSchema = new Schema({
    note:{type:String,required:true}
})

const Note = model("Note", noteSchema)

noteRouter.post("/notes", async (req,res) => {
    try {
        const {note} = req.body;
        if (!note) {
            return res.status(400).json("Content is required")
        }
        const newNote = new Note({
            note
        })
        await newNote.save();
        res.status(201).json("Note added successfully")
    } catch (error) {
        console.error("Error in adding Note");
        res.status(500).json("Internal Server Error")
    }
})

noteRouter.get("/notes", async (req,res) => {
    try {
        const allNotes = await Note.find();
        if (!allNotes) {
            return res.status(404).json("No Note Found")
        }
        res.status(200).json({data:allNotes})
    } catch (error) {
        console.error("Error in fetching Note:",error);
        res.status(500).json("Internal Server Error")
    }
})

export default noteRouter