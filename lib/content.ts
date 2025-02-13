import Feat1 from "@/public/images/Feat1.webp";
import Feat2 from "@/public/images/Feat2.webp";
import Feat3 from "@/public/images/Feat3.webp";
import Feat4 from "@/public/images/Feat4.webp";
import Google from "@/public/images/Google.webp";
import Paypal from "@/public/images/Paypal.webp";
import PWC from "@/public/images/PWC.webp";
import W1 from "@/public/images/W1.webp";
import W2 from "@/public/images/W2.webp";
import W3 from "@/public/images/W3.webp";
import W4 from "@/public/images/W4.webp";
import W5 from "@/public/images/W5.webp";

export const features = [
  {
    title: "Skilled Instructors",
    description:
      "Get Personally Mentored by the Experts from the industry. Get the practical experience.",
    image: Feat1,
  },
  {
    title: "Live Projects",
    description:
      "Get an Opportunity to work in Real-time Projects that will give you a Deep Experience.",
    image: Feat2,
  },
  {
    title: "Flexibility",
    description:
      "Get Ultimate Flexibility. Classroom or Online Training? Regular Pace or Fast Track? - Pick your best.",
    image: Feat3,
  },
  {
    title: "Regular Classes",
    description:
      "No overcrowded batches, Customized courses for your needs, flexible class timings & Days as per your convenient.",
    image: Feat4,
  },
];

export const highlights = [
  {
    count: "10+",
    title: "Excellence Years of Service",
  },
  {
    count: "100+",
    title: "Career Courses",
  },
  {
    count: "1000+",
    title: "Valued Recruiters",
  },
  {
    count: "10000+",
    title: "Students Certified",
  },
];

export const cloud = [
  {
    name: "AWS",
    description:
      "The AWS (Amazon Web Services) Cloud Computing course provides a thorough introduction to cloud services offered by AWS, focusing on building, deploying, and managing applications in the cloud. Students will learn about key AWS services, including EC2 (virtual servers), S3 (storage), RDS (databases), Lambda (serverless computing), and VPC (networking). The course covers setting up scalable and secure cloud infrastructures, implementing IAM (Identity and Access Management), monitoring with CloudWatch, and using CloudFormation for infrastructure as code (IaC). By the end of the course, students will have the skills to design, deploy, and manage cloud-based applications and services using AWS.",
    photo: "/images/courses/aws.webp",
    slug: "aws",
    techStack: [],
  },
  {
    name: "GCP",
    description:
      "The GCP (Google Cloud Platform) Cloud Computing course introduces students to Google’s suite of cloud services, focusing on building and managing applications in the cloud. Students will learn about key GCP services, including Compute Engine (virtual machines), Cloud Storage, BigQuery (data analytics), Cloud Functions (serverless computing), and Kubernetes Engine (container orchestration). The course covers cloud architecture, networking, security, and monitoring with tools like Stackdriver. Students will also gain hands-on experience deploying applications, managing infrastructure, and leveraging GCP’s scalable solutions. By the end of the course, students will be proficient in using GCP to design, deploy, and manage cloud applications.",
    photo: "/images/courses/gcp.webp",
    slug: "gcp",
    techStack: [],
  },
  {
    name: "Azure",
    description:
      "The Azure Cloud Computing course provides a comprehensive introduction to Microsoft Azure, focusing on building, deploying, and managing applications in the cloud. Students will learn about key Azure services, including Azure Virtual Machines, Azure Blob Storage, Azure Kubernetes Service (AKS), Azure Functions (serverless computing), and Azure SQL Database. The course covers networking, security, monitoring with Azure Monitor, and managing infrastructure with Azure Resource Manager. Students will also explore DevOps practices using Azure DevOps for CI/CD pipelines. By the end of the course, students will be equipped to design, implement, and manage cloud-based solutions on Microsoft Azure.",
    photo: "/images/courses/azure.webp",
    slug: "azure",
    techStack: [],
  },
];

export const companies = [
  {
    _id: "1",
    name: "Google",
    photo: Google,
    url: "https://google.com",
  },
  {
    _id: "2",
    name: "Paypal",
    photo: Paypal,
    url: "https://google.com",
  },
  {
    _id: "3",
    name: "PWC",
    photo: PWC,
    url: "https://google.com",
  },
  {
    _id: "4",
    name: "Google",
    photo: Google,
    url: "https://google.com",
  },
  {
    _id: "5",
    name: "Paypal",
    photo: Paypal,
    url: "https://google.com",
  },
  {
    _id: "6",
    name: "PWC",
    photo: PWC,
    url: "https://google.com",
  },
];

export const videos = ["H8xllNtB1YM", "n07Mu1C4kIA", "njpmB5gcIWc"];

export const benefits = [
  {
    _id: "1",
    value: "FREE Demo Class",
  },
  {
    _id: "2",
    value: "FREE Softskill & Placement Training",
  },
  {
    _id: "3",
    value:
      "Tie up with more than 25+ companies from MNC’s , CMM level and domestic IT companies.",
  },
  {
    _id: "4",
    value: "100% FREE Placement Assistance",
  },
  {
    _id: "5",
    value: "Course Completion Certificate",
  },
  {
    _id: "6",
    value: "Training with Real Time Projects",
  },
  {
    _id: "7",
    value: "Industry-Based Coaching By MNC IT Professionals",
  },
];

export const faqs = [
  {
    _id: "1",
    question: "What is the learning methodology at CloudSwan?",
    answer:
      "We follow a blended learning approach, combining theoretical knowledge with hands-on practical experience. Our training includes: Live instructor-led classes, Project-based learning, Interactive quizzes and assignments, Industry-oriented case studies, 24/7 access to recorded sessions (for online students), Mentorship and peer collaboration",
  },
  {
    _id: "2",
    question: "Do you offer online or offline classes?",
    answer:
      "We offer both online and offline (classroom) training programs to cater to different learning preferences. Our online classes are live, instructor-led sessions with interactive features, while our offline courses are conducted at our state-of-the-art training centers.",
  },
  {
    _id: "3",
    question:
      "Do you provide placement assistance after completing the course?",
    answer:
      "Yes, we offer placement assistance to all eligible students. Our dedicated career services team helps with: Resume building, Interview preparation, Job referrals, Networking opportunities",
  },
  {
    _id: "4",
    question: "Can I take a demo class before enrolling?",
    answer:
      "Yes, we offer free demo classes for most of our courses! This gives you the opportunity to experience the teaching style, course structure, and interact with the instructor before making a commitment.",
  },
];

export const whys = [
  {
    title: "Expert Faculty",
    image: W1,
  },
  {
    title: "Flexible Scheduled Classes",
    image: W2,
  },
  {
    title: "Affordable Cost",
    image: W3,
  },
  {
    title: "Ongoing Challenging Assignment",
    image: W4,
  },
  {
    title: "Ensured Interview",
    image: W5,
  },
];

export const locations = [
  {
    address:
      "#171, B-Wing, Raj Complex, DPF Street, P N Palayam, Near Lakshmi Mills Stop",
    city: "COIMBATORE",
    url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.77088939465835!2d76.9833595!3d11.0135305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b4c44847b5%3A0x4ed5b3b244e12629!2sXortican%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1735282309204!5m2!1sen!2sin",
  },
  {
    address: "No: 200A, 4th Street Gandipuram",
    city: "COIMBATORE",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2712893709713!2d76.9652243754956!3d11.018260754685551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b4c388bbbb%3A0x10f74e67296be643!2sCloudSwan%20Solution!5e0!3m2!1sen!2sin!4v1735282362137!5m2!1sen!2sin",
  },
];
