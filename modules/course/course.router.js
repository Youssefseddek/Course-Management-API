import { Router } from "express";
import * as courseController from './controller/course.js'
import { myMulter, validationTypes } from "../../services/cloudMulter.js";

const router = Router()

// get all courses
router.get('/', courseController.getCourses)

// get course by id
router.get('/:id', courseController.getCourseById)

// create course
router.post('/', courseController.createCourse)

// update course
router.put('/:id', myMulter(validationTypes.image).single('image'), courseController.updateCourse)

// delete course
router.delete('/:id', courseController.deleteCourse)





export default router