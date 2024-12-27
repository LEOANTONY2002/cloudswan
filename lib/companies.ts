import dbConnect from './mongoose'
import Company from '@/models/Company'

export async function getCompanies() {
  await dbConnect()
  const companies = await Company.find().lean()
  return JSON.parse(JSON.stringify(companies))
}

