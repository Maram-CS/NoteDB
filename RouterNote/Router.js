import {Router} from "express";
import {AddNote,getANote,getAll,Update,DeletNote} from "../ControllerNote/Controller.js";

const Note = Router();

Note.get("/",getAll);
Note.get("/Note",getANote);
Note.post("/Add",AddNote);
Note.put("/:id",Update);
Note.delete("/:id",DeletNote);

export default Note;