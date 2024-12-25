import { Types } from "mongoose";

export const categories = [
  {
    _id: new Types.ObjectId(),
    name: "Frontend Development",
    photo: "/images/categories/web-dev.webp",
  }, // 00
  {
    _id: new Types.ObjectId(),
    name: "Backend Development",
    photo: "/images/categories/web-dev.webp",
  }, // 01
  {
    _id: new Types.ObjectId(),
    name: "Full Stack Development",
    photo: "/images/categories/web-dev.webp",
  }, // 02
  {
    _id: new Types.ObjectId(),
    name: "Mobile Development",
    photo: "/images/categories/mobile-dev.webp",
  }, // 03
  {
    _id: new Types.ObjectId(),
    name: "DevOps",
    photo: "/images/categories/devops.webp",
  }, // 04
  {
    _id: new Types.ObjectId(),
    name: "Business & Cloud",
    photo: "/images/categories/web-dev.webp",
  }, // 05
  {
    _id: new Types.ObjectId(),
    name: "AI ML Data Science",
    photo: "/images/categories/web-dev.webp",
  }, // 06
  {
    _id: new Types.ObjectId(),
    name: "Testing",
    photo: "/images/tech/tensorflow.webp",
  }, // 07
];

export const techStack = [
  {
    _id: new Types.ObjectId(),
    name: "ReactJS",
    photo: "/images/tech/react.webp",
  }, // 00
  {
    _id: new Types.ObjectId(),
    name: "NodeJS",
    photo: "/images/tech/nodejs.webp",
  }, // 01
  {
    _id: new Types.ObjectId(),
    name: "Python",
    photo: "/images/tech/python.webp",
  }, // 02
  {
    _id: new Types.ObjectId(),
    name: "Java",
    photo: "/images/tech/docker.webp",
  }, // 03
  {
    _id: new Types.ObjectId(),
    name: "MongoDB",
    photo: "/images/tech/mongodb.webp",
  }, // 04
  {
    _id: new Types.ObjectId(),
    name: "Dart",
    photo: "/images/tech/tensorflow.webp",
  }, // 05
  {
    _id: new Types.ObjectId(),
    name: "HTML",
    photo: "/images/tech/tensorflow.webp",
  }, // 06
  {
    _id: new Types.ObjectId(),
    name: "CSS",
    photo: "/images/tech/tensorflow.webp",
  }, // 07
  {
    _id: new Types.ObjectId(),
    name: "JavaScriipt",
    photo: "/images/tech/tensorflow.webp",
  }, // 08
  {
    _id: new Types.ObjectId(),
    name: "TypeScript",
    photo: "/images/tech/tensorflow.webp",
  }, // 09
  {
    _id: new Types.ObjectId(),
    name: "Spring Boot",
    photo: "/images/tech/tensorflow.webp",
  }, // 10
  {
    _id: new Types.ObjectId(),
    name: "Flask",
    photo: "/images/tech/tensorflow.webp",
  }, // 11
  {
    _id: new Types.ObjectId(),
    name: "Djangoo",
    photo: "/images/tech/tensorflow.webp",
  }, // 12
  {
    _id: new Types.ObjectId(),
    name: "PHP",
    photo: "/images/tech/tensorflow.webp",
  }, // 13
  {
    _id: new Types.ObjectId(),
    name: "MySQL",
    photo: "/images/tech/tensorflow.webp",
  }, // 14
  {
    _id: new Types.ObjectId(),
    name: "C#",
    photo: "/images/tech/tensorflow.webp",
  }, // 15
  {
    _id: new Types.ObjectId(),
    name: "Angular",
    photo: "/images/tech/tensorflow.webp",
  }, // 16
  {
    _id: new Types.ObjectId(),
    name: "SQL",
    photo: "/images/tech/tensorflow.webp",
  }, // 17
  {
    _id: new Types.ObjectId(),
    name: ".NET",
    photo: "/images/tech/tensorflow.webp",
  }, // 18
  {
    _id: new Types.ObjectId(),
    name: "Git",
    photo: "/images/tech/tensorflow.webp",
  }, // 19
  {
    _id: new Types.ObjectId(),
    name: "Jenkin",
    photo: "/images/tech/tensorflow.webp",
  }, // 20
  {
    _id: new Types.ObjectId(),
    name: "Docker",
    photo: "/images/tech/tensorflow.webp",
  }, // 21
  {
    _id: new Types.ObjectId(),
    name: "Kubernetes",
    photo: "/images/tech/tensorflow.webp",
  }, // 22
  {
    _id: new Types.ObjectId(),
    name: "Ansible",
    photo: "/images/tech/tensorflow.webp",
  }, // 23
  {
    _id: new Types.ObjectId(),
    name: "RESTful",
    photo: "/images/tech/tensorflow.webp",
  }, // 24
  {
    _id: new Types.ObjectId(),
    name: "NUniit",
    photo: "/images/tech/tensorflow.webp",
  }, // 25
  {
    _id: new Types.ObjectId(),
    name: "Postman",
    photo: "/images/tech/tensorflow.webp",
  }, // 26
  {
    _id: new Types.ObjectId(),
    name: "Selenium",
    photo: "/images/tech/tensorflow.webp",
  }, // 27
  {
    _id: new Types.ObjectId(),
    name: "Artificial Intelligence",
    photo: "/images/tech/tensorflow.webp",
  }, // 28
  {
    _id: new Types.ObjectId(),
    name: "Machine Learning",
    photo: "/images/tech/tensorflow.webp",
  }, // 29
  {
    _id: new Types.ObjectId(),
    name: "Deep Learning",
    photo: "/images/tech/tensorflow.webp",
  }, // 30
  {
    _id: new Types.ObjectId(),
    name: "TensorFlow",
    photo: "/images/tech/tensorflow.webp",
  }, // 31
  {
    _id: new Types.ObjectId(),
    name: "Computer Vision",
    photo: "/images/tech/tensorflow.webp",
  }, // 32
  {
    _id: new Types.ObjectId(),
    name: "NLP",
    photo: "/images/tech/tensorflow.webp",
  }, // 33
  {
    _id: new Types.ObjectId(),
    name: "Flutter",
    photo: "/images/tech/tensorflow.webp",
  }, // 34
  {
    _id: new Types.ObjectId(),
    name: "SQLite",
    photo: "/images/tech/tensorflow.webp",
  }, // 35
  {
    _id: new Types.ObjectId(),
    name: "React Native",
    photo: "/images/tech/tensorflow.webp",
  }, // 36
];

export const courses = [
  {
    name: "ReactJS",
    description: "Learn to build modern web applications from front to back.",
    photo: "/images/courses/full-stack.webp",
    slug: "react-frontend-development",
    category: categories[0]._id,
    techStack: [
      techStack[6]._id,
      techStack[7]._id,
      techStack[8]._id,
      techStack[0]._id,
    ],
    isOnline: true,
  },
  {
    name: "AngularJS",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "angular-frontend-development",
    category: categories[0]._id,
    techStack: [
      techStack[6]._id,
      techStack[7]._id,
      techStack[8]._id,
      techStack[16]._id,
    ],
  },
  {
    name: "NodeJS",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "node-backend-development",
    category: categories[1]._id,
    techStack: [techStack[8]._id, techStack[2]._id, techStack[4]._id],
    isOnline: true,
  },
  {
    name: "Spring Boot",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "springboot-backend-development",
    category: categories[1]._id,
    techStack: [techStack[3]._id, techStack[10]._id, techStack[4]._id],
  },
  {
    name: "MERN Stack Development",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "mern-fullstack-development",
    category: categories[2]._id,
    techStack: [techStack[0]._id, techStack[1]._id, techStack[4]._id],
    isTrending: true,
  },
  {
    name: "Java Full Stack Development",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "java-fullstack-development",
    category: categories[2]._id,
    techStack: [
      techStack[3]._id,
      techStack[0]._id,
      techStack[10]._id,
      techStack[4]._id,
    ],
    isTrending: true,
  },
  {
    name: "Python Full Stack Development",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "python-fullstack-development",
    category: categories[2]._id,
    techStack: [
      techStack[2]._id,
      techStack[11]._id,
      techStack[6]._id,
      techStack[7]._id,
    ],
    isTrending: true,
  },
  {
    name: ".NET Full Stack Development",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "dotnet-fullstack-development",
    category: categories[2]._id,
    techStack: [
      techStack[16]._id,
      techStack[15]._id,
      techStack[18]._id,
      techStack[17]._id,
    ],
  },
  {
    name: "React Native Full Stack Development",
    description: "Build cross-platform mobile apps with React Native.",
    photo: "/images/courses/react-native.webp",
    slug: "react-native-fullstack-development",
    category: categories[2]._id,
    techStack: [
      techStack[6]._id,
      techStack[7]._id,
      techStack[8]._id,
      techStack[0]._id,
      techStack[36]._id,
      techStack[1]._id,
      techStack[4]._id,
    ],
    isTrending: true,
  },
  {
    name: "Flutter Full Stack Development",
    description: "Build cross-platform mobile apps with React Native.",
    photo: "/images/courses/react-native.webp",
    slug: "flutter-fullstack-development",
    category: categories[2]._id,
    techStack: [
      techStack[5]._id,
      techStack[34]._id,
      techStack[1]._id,
      techStack[4]._id,
    ],
  },
  {
    name: "Core PHP Stack Development",
    description: "Build cross-platform mobile apps with React Native.",
    photo: "/images/courses/react-native.webp",
    slug: "core-php-fullstack-development",
    category: categories[2]._id,
    techStack: [
      techStack[6]._id,
      techStack[7]._id,
      techStack[8]._id,
      techStack[13]._id,
      techStack[14]._id,
    ],
  },
  {
    name: "React Native Mobile Development",
    description: "Build cross-platform mobile apps with React Native.",
    photo: "/images/courses/react-native.webp",
    slug: "react-native-mobile-development",
    category: categories[3]._id,
    techStack: [
      techStack[6]._id,
      techStack[7]._id,
      techStack[8]._id,
      techStack[0]._id,
    ],
    isOnline: true,
  },
  {
    name: "Flutter Mobile Development",
    description: "Build cross-platform mobile apps with React Native.",
    photo: "/images/courses/react-native.webp",
    slug: "flutter-mobile-development",
    category: categories[3]._id,
    techStack: [techStack[5]._id, techStack[34]._id],
  },
  {
    name: "DevOps Engineering",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "devops-engineering",
    category: categories[4]._id,
    techStack: [
      techStack[19]._id,
      techStack[20]._id,
      techStack[21]._id,
      techStack[22]._id,
      techStack[23]._id,
    ],
  },
  {
    name: "AWS",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "aws",
    category: categories[4]._id,
    techStack: [],
  },
  {
    name: "GCP",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "gcp",
    category: categories[4]._id,
    techStack: [],
  },
  {
    name: "Azure",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "azure",
    category: categories[4]._id,
    techStack: [],
  },
  {
    name: "Digital Marketing",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "digital-marketing",
    category: categories[5]._id,
    techStack: [],
  },
  {
    name: "Power BI",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "power-bi",
    category: categories[5]._id,
    techStack: [],
  },
  {
    name: "Oracle",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "power-bi",
    category: categories[5]._id,
    techStack: [],
  },
  {
    name: "SAP ABAP Programming",
    description: "Learn to streamline development and operations processes.",
    photo: "/images/courses/devops.webp",
    slug: "sap-abap-programming",
    category: categories[5]._id,
    techStack: [],
  },
  {
    name: "Advanced Artificial Intelligence",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "advanced-artiificiial-intelligence",
    category: categories[6]._id,
    techStack: [
      techStack[30]._id,
      techStack[31]._id,
      techStack[32]._id,
      techStack[33]._id,
    ],
  },
  {
    name: "Data Analytics",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "data-analytics",
    category: categories[2]._id,
    techStack: [
      techStack[17]._id,
      techStack[2]._id,
      techStack[29]._id,
      techStack[30]._id,
    ],
  },
  {
    name: "Software Testing",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "software-testing",
    category: categories[2]._id,
    techStack: [
      techStack[17]._id,
      techStack[3]._id,
      techStack[29]._id,
      techStack[30]._id,
    ],
  },
  {
    name: "API Testing",
    description: "Create powerful iOS applications using Swift and Xcode.",
    photo: "/images/courses/ios-dev.webp",
    slug: "api-testing",
    category: categories[2]._id,
    techStack: [
      techStack[3]._id,
      techStack[24]._id,
      techStack[25]._id,
      techStack[26]._id,
      techStack[20]._id,
    ],
  },
];

export const testimonials = [
  {
    name: "John Doe",
    media: "/images/testimonials/john-doe.webp",
    isVideo: false,
    company: "Tech Innovators Inc.",
    designation: "Senior Developer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  },
  {
    name: "Jane Smith",
    media: "/videos/testimonials/jane-smith.mp4",
    isVideo: true,
    company: "Data Insights Co.",
    designation: "Data Scientist",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  },
  {
    name: "Mike Johnson",
    media: "/images/testimonials/mike-johnson.webp",
    isVideo: false,
    company: "Mobile Solutions Ltd.",
    designation: "iOS Developer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  },
  {
    name: "Sarah Brown",
    media: "/videos/testimonials/sarah-brown.mp4",
    isVideo: true,
    company: "Cloud Systems Corp.",
    designation: "DevOps Engineer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  },
];
