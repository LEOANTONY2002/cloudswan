import dbConnect from './mongoose'
import Category from '../models/Category'

export async function getCategories() {
  await dbConnect()
  const categories = await Category.find().lean()
  return JSON.parse(JSON.stringify(categories))
}

