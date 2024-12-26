import dbConnect from "./mongoose";
import Course from "../models/Course";
import Category from "@/models/Category";
import Tech from "@/models/Tech";

export async function getTrendingCourses() {
  await dbConnect();
  const courses = await Course.find({isTrending: true})
    .sort({ createdAt: -1 })
    .populate({ path: "category", model: Category })
    .populate({ path: "techStack", model: Tech })
    .limit(4)
    .lean();
  return courses;
}

export async function getAllCourses() {
  await dbConnect();
  const courses = await Course.find()
    .populate("category")
    .populate("techStack")
    .lean();
  return courses;
}

export async function getCourseBySlug(slug: string) {
  await dbConnect();
  const course = await Course.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "techStack", model: Tech })
    .lean();
  return course;
}
