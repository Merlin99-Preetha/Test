const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
    bookName: String,
    bookPrice: Number ,
    ratings: Number
})
module.exports=mongoose.model("bookDetails", bookSchema)