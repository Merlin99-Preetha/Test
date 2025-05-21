const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/database")
const db=mongoose.connection
db.on('error', (err)=>{
    console.log("error for connecting the database");
    
})
db.on('open', ()=>{
    console.log("database connected");
    
})
