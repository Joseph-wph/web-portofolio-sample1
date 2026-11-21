import { Code2, Component, Globe, Smartphone } from "lucide-react";
import type {
  ComparisonRow,
  FaqItem,
  Feature,
  JourneyItem,
  PortfolioItem,
  Skill,
  Testimonial,
} from "@/types";
import { ASSETS } from "./assets";

const { tech } = ASSETS.icons;
const { portfolio, logos } = ASSETS.images;

export const MARQUEE_ITEMS = [
  "App Development",
  "Website Development",
  "Pixel Perfect",
  "React Expert",
] as const;

export const ABOUT = {
  label: "About Me",
  headline: "I turn ideas and designs into functional, accessible, and performant websites",
  highlight: "using modern frontend technologies.",
} as const;

export const FEATURES: Feature[] = [
  {
    title: "Frontend Development",
    description:
      "I build responsive, accessible, and scalable websites using modern frontend tools and best practices.",
    icon: Code2,
  },
  {
    title: "Web Performance",
    description:
      "I optimize websites for speed and efficiency to ensure smooth experiences across all devices.",
    icon: Globe,
  },
  {
    title: "Component Based UI",
    description:
      "I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.",
    icon: Component,
  },
  {
    title: "Responsive Design",
    description:
      "I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.",
    icon: Smartphone,
  },
];

export const TOOLS = {
  title: "Tools I Use to Build",
  description: "From code to design — here's the tech that helps me turn ideas into real products.",
  cta: "Send Message",
} as const;

export const SKILLS: Skill[] = [
  { name: "HTML", level: 100, icon: tech.html },
  { name: "CSS", level: 90, icon: tech.css },
  { name: "Javascript", level: 90, icon: tech.javascript },
  { name: "Typescript", level: 80, icon: tech.typescript },
  { name: "Sequelize", level: 80, icon: tech.sequelize },
  { name: "Mongo DB", level: 75, icon: tech.mongodb },
];

export const COMPARISON = {
  title: "Not Your Typical Frontend Developer",
  description: "I care about how it looks, how it works, and how it feels — all at once.",
  columns: { skill: "Skill", withMe: "With Me", other: "Other" },
  rows: [
    { skill: "React Expert", withMe: true, other: false },
    { skill: "Pixel Perfect", withMe: true, other: false },
    { skill: "TypeScript Proficiency", withMe: true, other: false },
    { skill: "Clean, Maintainable Code", withMe: true, other: false },
    { skill: "Performance Optimization", withMe: true, other: false },
    { skill: "Responsive Website", withMe: true, other: false },
    { skill: "UI Design Proficiency (Figma)", withMe: true, other: false },
  ] satisfies ComparisonRow[],
} as const;

export const PORTFOLIO = {
  title: "Bridging Design and Development",
  description:
    "These are real projects where I implemented frontend interfaces with precision and attention to detail.",
  items: [
    { title: "Portfolio 1", year: "2025", image: portfolio.one },
    { title: "Portfolio 2", year: "2025", image: portfolio.two },
    { title: "Portfolio 3", year: "2025", image: portfolio.three },
  ] satisfies PortfolioItem[],
} as const;

const JOURNEY_DESCRIPTION =
  "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.";

export const JOURNEY = {
  title: "My Journey in Tech",
  description:
    "From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.",
  items: [
    {
      role: "Frontend Developer",
      period: "2025- Present",
      description: JOURNEY_DESCRIPTION,
      company: "Airbnb",
      logo: logos.airbnb,
    },
    {
      role: "Frontend Developer",
      period: "2025- Present",
      description: JOURNEY_DESCRIPTION,
      company: "Dribbble",
      logo: logos.dribbble,
    },
    {
      role: "Frontend Developer",
      period: "2025- Present",
      description: JOURNEY_DESCRIPTION,
      company: "Zoom",
      logo: logos.zoom,
    },
  ] satisfies JourneyItem[],
} as const;

export const TESTIMONIALS_CONTENT = {
  title: "Trusted Voices",
  description: "Here's what people say about working with me — across projects, teams, and timelines.",
  items: [
    {
      id: "t1",
      variant: "feature",
      stat: "8X",
      title: "More users converted after redesign",
      quote:
        "Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.",
      author: "Pablo Stanley",
      position: "Product Manager at Pinovate",
      rating: 5,
    },
    {
      id: "t2",
      variant: "stat",
      stat: "3X",
      title: "Improved user engagement and sign-ups",
      quote:
        "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
      author: "Pablo Stanley",
      position: "Product Manager at Pinovate",
      rating: 5,
    },
    {
      id: "t3",
      variant: "basic",
      quote:
        "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
      author: "Pablo Stanley",
      position: "Product Manager at Pinovate",
      rating: 5,
    },
    {
      id: "t4",
      variant: "basic",
      quote:
        "Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our products.",
      author: "Pablo Stanley",
      position: "Product Manager at Pinovate",
      rating: 5,
    },
  ] satisfies Testimonial[],
} as const;

export const FAQ_CONTENT = {
  title: "Still Got Questions?",
  description: "I've listed answers to questions I often get as a frontend developer.",
  defaultActiveId: "faq-2",
  items: [
    {
      id: "faq-1",
      question: "Do you work on freelance or remote projects?",
      answer:
        "Yes, I'm open to freelance and remote projects and have collaborated with teams across different time zones.",
    },
    {
      id: "faq-2",
      question: "What technologies do you work with?",
      answer:
        "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      id: "faq-3",
      question: "Can you convert Figma or Sketch designs into code?",
      answer:
        "Absolutely. I turn Figma and Sketch designs into pixel-perfect, responsive, production-ready code.",
    },
    {
      id: "faq-4",
      question: "Do you collaborate with backend developers or teams?",
      answer:
        "Yes. I work closely with backend engineers and designers to integrate APIs and ship features end to end.",
    },
    {
      id: "faq-5",
      question: "Are you available for full-time roles?",
      answer: "Yes, I'm open to full-time opportunities depending on the role and team.",
    },
  ] satisfies FaqItem[],
} as const;

export const CONTACT_CONTENT = {
  title: "Let's",
  highlight: "Build Something",
  titleEnd: "Great",
  description: "Got an idea, a project, or just want to connect? I'm always open to new conversations.",
  fields: {
    name: { label: "Name", placeholder: "Enter your name" },
    email: { label: "Email", placeholder: "Enter your email" },
    message: { label: "Message", placeholder: "Enter your message" },
  },
  submit: "Send Message",
  submitting: "Sending...",
  bigText: "GET IN TOUCH",
} as const;
