import dbConnect from "./mongoose";
import Course from "../models/Course";
import { Types } from "mongoose";
import Category from "@/models/Category";
import Tech from "@/models/Tech";

export async function getTrendingCourses() {
  await dbConnect();
  const courses = await Course.find()
    .sort({ createdAt: -1 })
    .populate({ path: "category", model: Category })
    .populate({ path: "techStack", model: Tech })
    .limit(4)
    .lean();
  return JSON.parse(JSON.stringify(courses));
}

export async function getCoursesByCategory(categoryId: string) {
  await dbConnect();
  const courses = await Course.find({
    category: new Types.ObjectId(categoryId),
  }).lean();
  return JSON.parse(JSON.stringify(courses));
}

export async function getCourseBySlug(slug: string) {
  await dbConnect();
  const course = await Course.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "techStack", model: Tech })
    .lean();
  return JSON.parse(JSON.stringify(course));
}
