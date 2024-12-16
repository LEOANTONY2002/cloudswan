import { Types } from 'mongoose';

export const categories = [
  { _id: new Types.ObjectId(), name: 'Web Development', photo: '/images/categories/web-dev.jpg' },
  { _id: new Types.ObjectId(), name: 'Mobile Development', photo: '/images/categories/mobile-dev.jpg' },
  { _id: new Types.ObjectId(), name: 'Data Science', photo: '/images/categories/data-science.jpg' },
  { _id: new Types.ObjectId(), name: 'DevOps', photo: '/images/categories/devops.jpg' },
];

export const techStack = [
  { _id: new Types.ObjectId(), name: 'React', photo: '/images/tech/react.png' },
  { _id: new Types.ObjectId(), name: 'Node.js', photo: '/images/tech/nodejs.png' },
  { _id: new Types.ObjectId(), name: 'Python', photo: '/images/tech/python.png' },
  { _id: new Types.ObjectId(), name: 'Docker', photo: '/images/tech/docker.png' },
  { _id: new Types.ObjectId(), name: 'MongoDB', photo: '/images/tech/mongodb.png' },
  { _id: new Types.ObjectId(), name: 'TensorFlow', photo: '/images/tech/tensorflow.png' },
];

export const courses = [
  {
    name: 'Full Stack Web Development',
    description: 'Learn to build modern web applications from front to back.',
    photo: '/images/courses/full-stack.jpg',
    slug: 'full-stack-web-development',
    category: categories[0]._id,
    techStack: [techStack[0]._id, techStack[1]._id, techStack[4]._id],
  },
  {
    name: 'iOS App Development with Swift',
    description: 'Create powerful iOS applications using Swift and Xcode.',
    photo: '/images/courses/ios-dev.jpg',
    slug: 'ios-app-development-swift',
    category: categories[1]._id,
    techStack: [techStack[2]._id],
  },
  {
    name: 'Machine Learning Fundamentals',
    description: 'Dive into the world of machine learning and AI.',
    photo: '/images/courses/machine-learning.jpg',
    slug: 'machine-learning-fundamentals',
    category: categories[2]._id,
    techStack: [techStack[2]._id, techStack[5]._id],
  },
  {
    name: 'DevOps Engineering',
    description: 'Learn to streamline development and operations processes.',
    photo: '/images/courses/devops.jpg',
    slug: 'devops-engineering',
    category: categories[3]._id,
    techStack: [techStack[3]._id, techStack[1]._id],
  },
  {
    name: 'React Native Mobile Development',
    description: 'Build cross-platform mobile apps with React Native.',
    photo: '/images/courses/react-native.jpg',
    slug: 'react-native-mobile-development',
    category: categories[1]._id,
    techStack: [techStack[0]._id, techStack[1]._id],
  },
];

export const testimonials = [
  {
    name: 'John Doe',
    media: '/images/testimonials/john-doe.jpg',
    isVideo: false,
    company: 'Tech Innovators Inc.',
    designation: 'Senior Developer',
  },
  {
    name: 'Jane Smith',
    media: '/videos/testimonials/jane-smith.mp4',
    isVideo: true,
    company: 'Data Insights Co.',
    designation: 'Data Scientist',
  },
  {
    name: 'Mike Johnson',
    media: '/images/testimonials/mike-johnson.jpg',
    isVideo: false,
    company: 'Mobile Solutions Ltd.',
    designation: 'iOS Developer',
  },
  {
    name: 'Sarah Brown',
    media: '/videos/testimonials/sarah-brown.mp4',
    isVideo: true,
    company: 'Cloud Systems Corp.',
    designation: 'DevOps Engineer',
  },
];

