import { Code, Lightbulb, Server, Users, Zap } from "lucide-react";
import { BiLogoFirebase } from "react-icons/bi";
import { GiMagicLamp } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { MdOutlineSmartToy } from "react-icons/md";
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiN8N,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-blue-500", size: 24 },
      { name: "Redux", icon: SiRedux, color: "text-purple-500", size: 24 },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
        size: 24,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-600",
        size: 24,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
        size: 24,
      },
      {
        name: "ShadCn",
        icon: SiShadcnui,
        color: "text-muted-forground",
        size: 24,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        size: 24,
      },
      { name: "Material UI", icon: SiMui, color: "text-blue-500", size: 24 },
      { name: "Sass", icon: SiSass, color: "text-pink-500", size: 24 },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600", size: 24 },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500", size: 24 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Firebase", icon: BiLogoFirebase, color: "text-yellow-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-600 dark:text-gray-400",
      },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Restfull Api", icon: Server, color: "text-primary" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "GraphQL", icon: SiGraphql, color: "text-rose-500" },
      { name: "MySQl", icon: GrMysql, color: "text-sky-600" },
      { name: "Socket.io", icon: SiSocketdotio, color: "text-muted-forground" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-600", size: 24 },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-black dark:text-white",
        size: 24,
      },
      { name: "VS Code", icon: VscVscode, color: "text-blue-600", size: 24 },
      {
        name: "Chat GPT",
        icon: SiOpenai,
        color: "text-black dark:text-white",
        size: 24,
      },
      {
        name: "N8N",
        icon: SiN8N,
        color: "text-black dark:text-white",
        size: 24,
      },
      { name: "Figma", icon: SiFigma, color: "text-purple-500", size: 24 },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-black dark:text-white",
        size: 24,
      },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-500", size: 24 },
      {
        name: "Lovable AI",
        icon: MdOutlineSmartToy,
        color: "text-rose-500",
        size: 24,
      },
      {
        name: "V0 AI",
        icon: GiMagicLamp,
        color: "text-muted-forground",
        size: 24,
      },
    ],
  },
];


export   const navigationItems = [
 {label : "Home", href: "/"},
 { label : "About", href: "/about"}, 
 { label : "Portfolio", href: "/portfolio"},
 { label : "Blog", href: "/blogs"},
 { label : "Skills", href: "/skills"},

 {label : "dashboard", href: "/dashboard"},
 { label : "Contact", href: "/contact"},  

];