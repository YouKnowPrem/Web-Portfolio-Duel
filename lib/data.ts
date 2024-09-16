import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import WelcomImg from "@public/Welcome to India .png";
import youtubeImg from "@/public/youtube-clone.png";
import heroSectionImg from "@/public/hero section.png";
import disneyNew from "@/public/disneyNew.png";
import webImg from "@/public/webNew.png";
import moveMouseImg from "@/public/moveMouse.png";
import website3d from "@/public/website3d.png";
import discord from "@/public/discord.png";
import pill_image from "@/public/pil-img.png";
import motion1 from "@/public/motion3.png";
import motion2 from "@/public/motionSig.png";
import obysPick from "@/public/obys.png";
import makeImg from '@/public/pillMake.png'
import pine from '@/public/pine.png'
import brndbt from '@/public/brndbt.png'
import airbnb from '@/public/airbnb.png'
import refo from '@/public/refo.png'

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
    title: "Cuberto Clone",
    description:
      "I made Awwwards winning website Cuberto. It's a single page website with a lot of animations and interactions.",
    tags: ["HTML", "CSS", "Javascript", "GSAP", "Locomotive"],
    imageUrl: cubertoImg,
    imagePath: "https://poojahooda22.github.io/Cuberto-newWebsite-Clone/",
  },
  
  {
    title: "Design Agency Website",
    description:
      "An Awwwards winning Brandbeet design studio website, with a lot of animations and interactions.",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "lenis-locomotive-scroll", "Tailwindcss", "GSAP"],
    imageUrl: brndbt,
    imagePath: "https://designwebsite-nu.vercel.app/"
  },
  {
    title: "Refokus Website",
    description:
      "An Awwwards winning design studio website, with a lot of animations and interactions and navigate through pages",
    tags: ["Nextjs","React", "Typescript", "Framer Motion", "lenis-locomotive-scroll", "Tailwindcss", "GSAP"],
    imageUrl: refo,
    imagePath: "https://refokus-websitedesign.vercel.app/"
  },
  {
    title: "Design Studio Clone",
    description:
      "An Awwwards winning Significo design studio website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", "GSAP"],
    imageUrl: motion2,
    imagePath: "https://motion-project-alpha.vercel.app/"
  },
  {
    title: "Makepill Clone",
    description:
      "An Awwwards winning Makepill studio website, with a lot of animations and interactions.",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "lenis", "Tailwindcss", "GSAP"],
    imageUrl: makeImg,
    imagePath: "https://makepill-redesign.vercel.app/"
  },  
  {
    title: "Motion Website",
    description:
      "An Awwwards winning Ochi design website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Typescript", "Framer Motion", "locomotive-scroll", "Tailwindcss", 'GSAP'],
    imageUrl: motion1,
    imagePath: "https://motion-website-rose.vercel.app/"
  },
  {
    title: "Obys Agency Clone",
    description:
      "An Awwwards winning Obys design website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", 'GSAP'],
    imageUrl: obysPick,
    imagePath: "https://obys-clone-ten.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website, built with vanilla javascript and GSAP for motion.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: webImg,
    imagePath: "https://poojahooda22.github.io/modern-website/"
  },
  {
    title: "Disney+ Clone",
    description:
      "Clone the Disney+ homepage, with a slider that fetches movies from the TMDB API.",
    tags: ["React", "Next js", "Typescript", "Motion"],
    imageUrl: disneyNew,
    imagePath: "https://disney-clone-eight-azure.vercel.app/"
  }, 
  {
    title: "Airbnb Web App",
    description:
      "It is a clone of Airbnb website, with a search bar that fetches hotels from the API.",
    tags: ["React", "Next js", "Typescript", "Three.js", "Prismic", "Framer Motion"],
    imageUrl: airbnb,
    imagePath: "https://airbnb-video-seven.vercel.app/"
  },
  {
    title: "Landing Page",
    description:
      "A web page that display a video and animations.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: heroSectionImg,
    imagePath: "https://poojahooda22.github.io/landing-page-03/"
  },
  {
    title: "Webpage 3D Rotation Animation",
    description:
      "A web page that display a title and 3D rotation animation.",
    tags: ["React", "Javascript", "GSAP", "Framer-motion"],
    imageUrl: pine,
    imagePath: "https://webpage-3danime.vercel.app/"
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
