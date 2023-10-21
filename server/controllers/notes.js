import Note from "../models/Note.js";
import User from "../models/User.js";
import {nanoid} from 'nanoid';

// create
export const createNote = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Note.find({ userId });
    const newNote = new Note({
      userId,
      firstName:user[0].firstName,
      lastName:user[0].lastName,
      note:[...user[0].note,{'id':nanoid(),'text':req.body.text,"date":new Date().toLocaleDateString()}]
    });
    await Note.findByIdAndRemove(user[0]._id);
    await newNote.save();
    const note = await Note.find({ userId });
    res.status(200).json(note[0]);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

//get
export const getUserNotes = async (req, res) => {
  try {
    const { userId } = req.params;
    const note = await Note.find({ userId });
    res.status(200).json(note[0]);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//delete
export const deleteNote=async(req,res)=>{
  try{
    const {userId,nid}=req.params;
    const user=await Note.find({userId});
    const new1=user[0].note.filter(n=>n.id!==nid );
    const newNote = new Note({
      userId,
      firstName:user[0].firstName,
      lastName:user[0].lastName,
      note:[...new1]
    });
    await Note.findByIdAndRemove(user[0]._id);
    await newNote.save();
    const note = await Note.find({ userId });
    res.status(200).json(note[0]);
  }catch(err){
    res.status(405).json({ message: err.message });
  }
}
