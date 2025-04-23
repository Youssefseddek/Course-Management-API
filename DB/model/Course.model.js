import mongoose from "mongoose";

// o title: String (required)
// o description: String (required)
// o image: String (can be base64 or image URL)
// o startDate: Date (optional)
// o endDate: Date (optional)
// o price: Number (required)
// o createdAt & updatedAt: Timestamps


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