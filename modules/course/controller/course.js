import courseModel from "../../../DB/model/Course.model.js";
import cloudinary from "../../../services/cloudinary.js";

// get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await courseModel.find({});
        if (courses.length === 0) {
            return res.status(404).json({ message: 'Courses not found' });
        }
        res.status(200).json({ message: 'Courses fetched successfully', data: courses });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });

    }
}

// get course by id
export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await courseModel.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course fetched successfully', data: course });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// create course
export const createCourse = async (req, res) => {
    try {
        const { title, description, price } = req.body;
        const newCourse = new courseModel({ title, description, price });
        await newCourse.save();
        res.status(201).json({ message: 'Course created successfully', data: newCourse });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// update course
export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price,startDate ,endDate} = req.body;
        console.log({title, description, price ,startDate,endDate});

        if (!req.file) {
            const updatedCourse = await courseModel.findByIdAndUpdate(id, { title, description, price ,startDate ,endDate }, { new: true });
            if (!updatedCourse) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json({ message: 'Course updated successfully', data: updatedCourse });
        }
        else {
            const { secure_url } = await cloudinary.uploader.upload(req.file.path, { folder: 'courses' });

            const updatedCourse = await courseModel.findByIdAndUpdate(id, { title, description, price ,startDate ,endDate, image: secure_url }, { new: true });
            if (!updatedCourse) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json({ message: 'Course updated successfully', data: updatedCourse });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error',error:error.message });
    }
}

// delete course
export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await courseModel.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully', data: deletedCourse });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}