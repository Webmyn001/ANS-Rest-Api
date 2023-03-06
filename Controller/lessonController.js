const Lesson = require("../Models/lessonModels")
const mongoose = require('mongoose')
const cloudinary = require("../Cloudinary/cloudinary")








// create new lesson
const createLesson = async (req, res,next) =>  {
  const { Name, School, BankName, AcctNo, AcctName, Shortnote ,Whatsapp ,images } = req.body
      try{
        
      
         let images = [...req.body.images];
         let imagesBuffer = [];
         for(let i=0; i< images.length; i++){
          const uploadimg = await cloudinary.uploader.upload(images[i],
            {
              folder:"Images"
            })
            imagesBuffer.push({
              public_id: uploadimg.public_id,
              url: uploadimg.secure_url
            })
         }
           
         req.body.images= imagesBuffer

        const lesson = await Lesson.create(req.body)
        res.status(201).json({
          success: true,
          lesson
        })
      }
      catch (error) {
          console.log(error);
          next(error);
      }
  }




 
 // get all lessons

 const getLessons = async (req,res) => {
   const lesson = await Lesson.find({}).sort({createdAt:-1})
   res.status(200).json(lesson)
 }

 // get a single lesson 

 const getLesson = async (req,res) => { 
   const {id} = req.params

   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "Not found"})
   }
   
   const lesson = await Lesson.findById(id)
  if (!lesson) {
   return res.status(404).json({error: "Not found"})
 }
  res.status(200).json(lesson)
 }

 //delete lesson

 const deleteLesson = async (req, res) => {
   const {id} = req.params
   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "Not found"})
   }
   
   const lesson = await Lesson.findOneAndDelete({_id:id})
  if (!lesson) {
   return res.status(400).json({error: "Not found"})
 }
  res.status(200).json(lesson)
 }


// update lesson

const updatelesson = async(req, res) => {
   const {id} = req.params
   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "Not found"})
   }
   const lesson = await Lesson.findOneAndUpdate({_id:id}, {...req.body})
   if (!lesson) {
       return res.status(400).json({error: "Not found"})
     }
      res.status(200).json(lesson)
     }


module.exports = {
  getLesson,
  getLessons,
  deleteLesson,
  updatelesson,
  createLesson,  
}



















     

    