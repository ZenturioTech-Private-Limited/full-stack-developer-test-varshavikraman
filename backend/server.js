import express,{json} from "express"
import mongoose from "mongoose"
import cors from "cors"
import noteRouter from "./note.js";

const app = express();

const PORT = 5000;

app.use(cors({
    origin:"http://ui:3000",
    credentials:true
}))

app.use(json());
app.use("/",noteRouter)

mongoose.connect("mongodb://mongodb:27017/NoteDB").then(()=>{
    console.log("mongodb connected successfully");
    
})
.catch((err)=>{
    console.error("Mongodb Connection Error:",err);
    
})

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
    
})