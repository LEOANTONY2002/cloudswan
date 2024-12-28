import mongoose from "mongoose";

const AchieverSchema = new mongoose.Schema(
  {
    photo: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default mongoose.models.Achiever ||
  mongoose.model("Achiever", AchieverSchema);
