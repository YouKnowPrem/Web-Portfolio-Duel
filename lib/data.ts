import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import WelcomeImg from "@/public/Welcome.png";
import AnimeWebImg from "@/public/AnimeWeb.png";
import FlappyImg from "@/public/Flappy bird .png";
import MaclarenWeb from "@/public/MaclarenWeb.png";
import MoseosClone from "@/public/MoseosClone.png";
import MotionImg from "@/public/Motion website.png";
import ObysImg from "@/public/ObysClone.png";
import Parinda from "@/public/Parinda.png";
import Snakeweb from "@/public/Snakeweb.png";
import StarImg from "@/public/StarEffect.png";
import WebPortDark from "@/public/WebPortfoliodark.png";
import Webclock from "@/public/Webclock.png";
import WhackImg from "@/public/Whack-a-Mole.png";
import WorkClone from "@/public/WorkClone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Taken Drop after 12th",
    location: "Jammu, J&K, India",
    description:
      "I chose to take a gap year to fully concentrate on my studies and strengthen my preparation for competitive exams. ",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "Wordpress Exp.",
    location: "Jammu, J&K, India",
    description:
      "I contributed to several WordPress websites, managing tasks ranging from DNS setup to staging and deployment.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Wish of year 2025",
    location: "Anywhere in India",
    description:
      "I plan to start my college education in 2025 to enhance my skills and knowledge, complementing my practical experience for personal and professional growth.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - 202X",
  },
  {
    title: "Principled and Multifaceted",
    location: "For World",
    description:
      "I refine my creative problem-solving skills while embodying principled and multifaceted approaches to ensure effective and ethical solutions.",
    icon: React.createElement(FaReact),
    date: "life time",
  },
  {
    title: "The side hobby",
    location: "Jammu, India",
    description:
      "I'm now a up skilling myself to web developement. Learning others langs. and much more in my pipeline.",
    icon: React.createElement(FaServer),
    date: "2024 - present",
  }, 
] as const;

export const projectsData = [
  {
    title: "Welcome Website",
    description:
      "This Website is a kind of welcome page. It's a single page website with a touch of elegant animations.",
    tags: ["HTML", "CSS", "Javascript", "Locomotive"],
    imageUrl: WelcomeImg,
    imagePath: "https://youknowprem.github.io/Welcome-to-India/",
  },
  
  {
    title: "Web Portfolio",
    description:
      "An elegant dark-themed portfolio with smooth transitions and dynamic animations, offering a sleek and modern experience",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", "GSAP", "SCSS"],
    imageUrl: WebPortDark,
    imagePath: "https://youknowprem.github.io/Dark-Theme-Web-Portfolio/"
  },
  {
    title: "Parinda Website",
    description:
      "A clean, paper-themed portfolio with smooth animations and transitions, offering a minimalist & creative layout for showcaseing",
    tags: ["Nextjs","React", "Typescript", "Framer Motion", "lenis-locomotive-scroll", "Tailwindcss"],
    imageUrl: Parinda,
    imagePath: "https://parinda-pi.vercel.app"
  },
  {
    title: "Work Studio Clone",
    description:
      "An Awwwards winning Work Studio design website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", "GSAP"],
    imageUrl: WorkClone,
    imagePath: "https://clone-works-studio.vercel.app"
  },
  {
    title: "Whack a Mole",
    description:
      "A fun, fast-paced Whack-a-Mole game with engaging visuals and smooth animations.",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "lenis", "Tailwindcss", "GSAP"],
    imageUrl: WhackImg,
    imagePath: "https://whack-a-mole-10.vercel.app/"
  },  
  {
    title: "Interactive Star effect",
    description:
      "This star will follow your lead till you hover your mouse on screen",
    tags: ["Vite","React", "Typescript", "Framer Motion", "Tailwindcss", 'GSAP'],
    imageUrl: StarImg,
    imagePath: "https://youknowprem.github.io/starFollower"
  },
  {
    title: "Duel Web clock",
    description:
      "A web based web two clocks made using Basic HTML, CSS & JS ",
    tags: ["HTML", "Javascript", "Framer Motion", "CSS"],
    imageUrl: Webclock,
    imagePath: "https://obys-clone-ten.vercel.app/"
  },
  {
    title: "Snake Web Game",
    description:
      "A web based snake game made using HTML & CSS.",
    tags: ["HTML", "CSS"],
    imageUrl: Snakeweb,
    imagePath: "https://snake-game-ashen-psi.vercel.app"
  },
  {
    title: "Obys Clone",
    description:
      "An Awwwards winning Obys design website, with a lot of animations and interactions.",
    tags: ["React", "Next js", "Typescript", "Motion"],
    imageUrl: ObysImg,
    imagePath: "https://obys-clone-five.vercel.app"
  }, 
  {
    title: "Motion clone",
    description:
      "An Awwwards winning Ochi design website, with a lot of animations and interactions.",
    tags: ["React", "Next js", "Typescript", "Three.js", "Prismic", "Framer Motion"],
    imageUrl: MotionImg,
    imagePath: "https://web-template1-rust.vercel.app/"
  },
  {
    title: "Landing Page",
    description:
      "A web page that display a video and animations.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: MoseosClone,
    imagePath: "https://youknowprem.github.io/website/"
  },
  {
    title: "Theme Webpage",
    description:
      "A web page that is based on Maclaren theme.",
    tags: ["React", "Javascript", "CSS", "HTML"],
    imageUrl: MaclarenWeb,
    imagePath: "https://youknowprem.github.io/Maclaren-Animated-Landing-Page"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Critical thinking",
  "Nextjs",
  "Nodejs",
  "Versatile Problem-Solving",
  "TailwindCSS",
  "Chess Enthusiast",
  "Playing Games",
  "Paragraph person",
  "Not easy to understand",
  "Adaptability",
  "Innovative Thinking",
  "LocomotiveScroll",
  "Java",
  "TriggerScroll",
  "Strategic Planning",
  "Three js",
  "Conflict Resolution",
  "Git",
  "Github",
  "Ethical Decision-Making",
  "Interdisciplinary Knowledge"
] as const;
