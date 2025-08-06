import { config } from "dotenv";
import Note from "./RouterNote/Router.js";
import express from "express";

config();
const port  = process.env.PORT || "1000";
const note = express();
note.use(express.json());
note.use("/api/note",Note);
note.use(express.urlencoded({extended : true}));

note.listen(port,()=>{
    console.log(`listining on the port ${port}`);
})
