import mongoose from "mongoose";




const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    startDate: { type: Date},
    endDate: { type: Date},
    price: { type: Number, required: true }

}, { timestamps: true });
const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;