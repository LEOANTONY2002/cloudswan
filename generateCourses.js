import fs from "fs";
import path from "path";
import { getAllCourses } from "./lib/courses";

async function generateCoursesData() {
  const courses = await getAllCourses();
  const filePath = path.join(__dirname, "public", "courses.json");
  fs.writeFileSync(filePath, JSON.stringify(courses, null, 2));
  console.log("Courses data generated successfully.");
}

generateCoursesData().catch((err) => console.error(err));
