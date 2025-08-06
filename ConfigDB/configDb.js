import {connect} from "mongoose";

const Config_DB = async (database)=>{
    try{
        await connect(`mongodb://localhost:27017/${database}`);
        console.log(`database is connecting : ${database}`);
    }catch(err){
        console.error(err);
    }
}

export default Config_DB;