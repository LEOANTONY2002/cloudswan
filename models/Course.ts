import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    slug: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    techStack: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tech" }],
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
