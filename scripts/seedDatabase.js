import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  categories,
  techStack,
  courses,
  testimonials,
  companies,
  achievers,
} from "../lib/dummyData.js";
import Category from "../modelsDB/Category.js";
import Tech from "../modelsDB/Tech.js";
import Course from "../modelsDB/Course.js";
import Testimonial from "../modelsDB/Testimonial.js";
import Company from "../modelsDB/Company.js";
import Achiever from "../modelsDB/Achiever.js";

dotenv.config({ path: ".env" });

async function seedDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://name:Password1234@cluster.lc0iq.mongodb.net/cloudswan"
    );
    console.log("Connected to MongoDB");

    // Clear existing data
    await Category.deleteMany({});
    await Tech.deleteMany({});
    await Course.deleteMany({});
    await Testimonial.deleteMany({});
    await Company.deleteMany({});
    await Achiever.deleteMany({});

    // Seed categories
    await Category.insertMany(categories);
    console.log("Categories seeded");

    // Seed tech stack
    await Tech.insertMany(techStack);
    console.log("Tech stack seeded");

    // Seed courses
    await Course.insertMany(courses);
    console.log("Courses seeded");

    // Seed testimonials
    await Testimonial.insertMany(testimonials);
    console.log("Testimonials seeded");

    // Seed companies
    await Company.insertMany(companies);
    console.log("Companies seeded");

    // Seed achievers
    await Achiever.insertMany(achievers);
    console.log("Achievers seeded");

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedDatabase();

// Output:
// Connected to MongoDB
// Categories seeded
// Tech stack seeded
// Courses seeded
// Testimonials seeded
// Database seeded successfully
