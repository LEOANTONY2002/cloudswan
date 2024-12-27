import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    photo: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default mongoose.models.Company || mongoose.model("Company", CompanySchema);
