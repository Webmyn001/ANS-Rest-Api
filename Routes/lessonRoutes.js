const express = require('express')
const mongoose = require('mongoose')

const {createLesson,
    deleteLesson,
    getLessons,
    getLesson,
    updatelesson,
   
} = require ("../Controller/lessonController")

const router = express.Router()




router.post('/add', createLesson)
router.get('/', getLessons)
router.get('/:id', getLesson)
router.delete('/:id', deleteLesson)
router.patch('/:id', updatelesson)


 

module.exports= router
