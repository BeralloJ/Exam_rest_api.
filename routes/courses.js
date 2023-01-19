import express from 'express'
import { getCourse, getCourses, addCourses, updateCourses, deleteCourse } from '../controllers/courses.js'
import {verifyToken } from '../middleware/auth.js'

const router = express.router({mergeParams: true})

router.get('/', verifyToken, getCourses)
router.get('/:id', verifyToken, getCourse)
router.post('/', verifyToken, addCourse)
router.put('/:id', verifyToken, updateCourse)
router.delete('/:id', verifyToken, deleteCourse)

export default router