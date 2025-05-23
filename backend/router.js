const express=require('express')
const router=express.Router()
const controllers=require('./Controller')
router.post('/details', controllers.saveDetails)
module.exports=router