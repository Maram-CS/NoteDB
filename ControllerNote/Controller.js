import Config_DB from "../ConfigDB/configDb.js" ;
import NoteModel from "../modelDB/ModeNote.js";
import { config } from "dotenv";

config();
Config_DB(process.env.NAME_DB || "NOTE_DB" );

const AddNote = async(req,res,next)=>{
    try{
        const Note =  new NoteModel(req.body);
        const NewNote = await Note.save();
        if(NewNote){
            res.status(200).json(NewNote);
        }else{
            res.status(404).json(); 
        }
        next();
    }catch(err){
        console.error(err);
    }
}

const getAll = async (req,res,next) => {
    try{
        const Notegetted = await NoteModel.find({});
        if(Notegetted){
            res.status(200).json(Notegetted);
        }else{
            res.status(404).json();
        }
        next();
    }catch(err){
         console.error(err);
    }
}

const getANote = async (req,res,next) => {
    try{
        const Note = await NoteModel.findById(req.params.id);
        if(Note){
            res.status(200).json(Note);
        }else{
            res.status(404).json();
        }
        next();
    }catch(err){
         console.error(err);
    }
}

const Update = async (req,res,next) => {
    try{
        const NoteUpdated = await NoteModel.findByIdAndUpdate(req.params.id,req.body);
        if(NoteUpdated){
            res.status(200).json(NoteUpdated);
        }else{
            res.status(404).json();
        }
        next();
    }catch(err){
         console.error(err);
    }
}

const DeletNote = async (req,res,next) => {
    try{
        const NoteDeleted = await NoteModel.findByIdAndDelete(req.params.id);
        if(NoteDeleted){
            res.status(200).json(NoteDeleted);
        }else{
            res.status(404).json();
        }
        next();
    }catch(err){
         console.error(err);
    }
}

export {AddNote,getANote,getAll,Update,DeletNote};