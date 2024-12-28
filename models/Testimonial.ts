import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    media: { type: String },
    isVideo: { type: Boolean },
    company: { type: String },
    designation: { type: String },
    message: {type: String }
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
