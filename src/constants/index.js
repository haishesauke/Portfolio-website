import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  ibm,
  shopify,
  carrent,
  socratesai,
  yvs,
  pw,
  jobit,
  tripguide,
  threejs,
  python,
  mysql,
  powerbi
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Machine Learning Specialist",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Data Visualization Expert",
    icon: creator,
  },
  {
    title: "SQL Expert",
    icon: web
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst Intern",
    company_name: "IBM SkillsBuild",
    icon: ibm,
    iconBg: "#DFEFFFFF",
    date: "June 2024 - August 2024",
    points: [
      "Collaborated on a team project to develop a vector disease prediction tool using predictive analytics and data processing.",
      "Analyzed patient data to generate actionable insights for improving diagnostic accuracy and public health outcomes.",
      "Utilized Python and data visualization tools to communicate findings effectively to both technical and non-technical stakeholders.",
      "Contributed to improving model performance by identifying key features and optimizing predictive algorithms.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Socrates-Ai",
    description:
      "Socrates-AI engages users through the Socratic method, fostering critical thinking by asking probing questions. This interactive approach helps users explore topics deeply, enhancing understanding and logical reasoning skills.",
    tags: [
      {
        name: "Python-flask",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: socratesai,
    source_code_link: "https://github.com/haishesauke/Socrates-Ai",
  },
  {
    name: "YouTube Video Summarizer",
    description:
      "Web application that summarizes YouTube videos using the T5 model and YouTube Transcript API, providing concise insights and saving you time on content consumption. Built with Flask, Vite, and Tailwind CSS for a smooth user experience.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "transformers",
        color: "green-text-gradient",
      },
      {
        name: "YoutubeTranscriptAPI",
        color: "pink-text-gradient",
      },
    ],
    image: yvs,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio Website",
    description:
      "3D portfolio project showcasing interactive 3D models built with Three.js. Designed using a React template in Vite and styled with Tailwind CSS, this application offers a visually stunning and engaging experience to display your work.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: pw,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };