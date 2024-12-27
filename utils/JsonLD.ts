export function getCourseJSONLD(course: any) {
  return {
    "@context": "http://schema.org",
    "@type": "Course",
    name: course?.name,
    description: course?.description,
    provider: {
      "@type": "Organization",
      name: "Cloudswan",
      url: "https://cloudswansolution.com",
    },
    category: course?.category?.name,
  };
}

//   "hasCourseInstance": {
//     "@type": "CourseInstance",
//     "courseMode": "Online", // Adjust if you have offline courses
//     "instructor": {
//       "@type": "Person",
//       "name": "Instructor Name" // Replace if instructor info is available
//     }
//   }
