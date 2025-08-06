import {Schema,model} from "mongoose";

const NoteDB = new Schema({
    Title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    tags : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : false,
    },
    isFavorite : {
        type : Boolean,
        required : true,
    },
    LastUpdate : {
        type : Date,
        required : true,
    },
})

const NoteModel = model("NoteModel",NoteDB);
export default NoteModel;