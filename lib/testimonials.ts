import dbConnect from './mongoose'
import Testimonial from '../models/Testimonial'

export async function getTestimonials() {
  await dbConnect()
  const testimonials = await Testimonial.find().lean()
  return JSON.parse(JSON.stringify(testimonials))
}

