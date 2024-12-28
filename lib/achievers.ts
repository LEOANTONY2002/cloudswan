import dbConnect from "./mongoose";
import Achiever from "@/models/Achiever";

export async function getAchievers() {
  await dbConnect();
  const achievers = await Achiever.find().lean();
  return JSON.parse(JSON.stringify(achievers));
}
