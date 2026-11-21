import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: `#${string}` };

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Skill = {
  name: string;
  level: number;
  icon: string;
};

export type ComparisonRow = {
  skill: string;
  withMe: boolean;
  other: boolean;
};

export type PortfolioItem = {
  title: string;
  year: string;
  image: string;
};

export type JourneyItem = {
  role: string;
  period: string;
  description: string;
  logo: string;
  company: string;
};

export type Testimonial = {
  id: string;
  variant: "feature" | "stat" | "basic";
  stat?: string;
  title?: string;
  quote: string;
  author: string;
  position: string;
  rating: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SubmitStatus = "success" | "error";
