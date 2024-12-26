import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    media: { type: String, required: true },
    isVideo: { type: Boolean, required: true },
    company: { type: String, required: true },
    designation: { type: String, required: true },
    message: {type: String, required: false}
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
