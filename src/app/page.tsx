"use client";
import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import LinkIcons from "@/components/LinkIcons";
import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioModal from "@/components/PortfolioModal";

interface Project {
  halfTitle: string;
  halfDescription: string;
  title: string;
  description: string;
  image: string;
  website1: string;
  website1name: string;
  website2?: string;
  website2name?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
      halfTitle: "Portfolio Website",
      halfDescription: "My personal portfolio website to showcase my projects.",
      title: "Portfolio Website",
      description: "This website was built using Next.js and Tailwind CSS, and is deployed using Vercel. It utilises an interactive UI to showcase a selection of my projects.",
      image: "/img/dsweb.png",
      website1: "https://d-smith.co.uk",
      website1name: "d-smith.co.uk",
      website2: "https://v1.d-smith.co.uk",
      website2name: "v1.d-smith.co.uk (Version 1.0)",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
      halfTitle: "LCOA Website",
      halfDescription: "A website built for the Largiemore Chalet Owners Association.",
      title: "Largiemore Chalet Owners Association",
      description: "This website was designed for the Largiemore Chalet Owners Association. It was built using Next.js and Tailwind CSS, and is deployed using AWS Amplify. It contains the main home page, an auth subdomain, and a portal subdomain which contains key information for members.",
      image: "/img/lcoa.png",
      website1: "https://lcoa.d-smith.co.uk",
      website1name: "lcoa.d-smith.co.uk",
      website2: "https://v1.lcoa.d-smith.co.uk",
      website2name: "v1.lcoa.d-smith.co.uk (Version 1.0)",
      technologies: ["Next.js", "Tailwind CSS", "AWS"],
  },
  {
      halfTitle: "ENG1 Websites",
      halfDescription: "Websites built for Assessment 1 and 2 of my Engineering 1 module.",
      title: "Engineering 1: Assessment 1 & 2",
      description: "Two websites produced for Assessment 1 and 2 of my Engineering 1 module. The first was designed and built by myself and another group member, the second was taken over from another team and built on to improve flow and add information.",
      image: "/img/eng1.png",
      website1: "https://uoy-team-six.github.io",
      website1name: "uoy-team-six.github.io (Assessment 1)",
      website2: "https://uoy-team-six.github.io/a2",
      website2name: "uoy-team-six.github.io/a2 (Assessment 2)",
      technologies: ["HTML", "CSS", "GitHub"],
  },
  {
      halfTitle: "York Community Consulting",
      halfDescription: "A student-led consultancy website I have contributed to.",
      title: "York Community Consulting",
      description: "A website for a student-led consultancy, of which I am on the committee. It is build using Next.js and React.js, and the backend is hosted and managed through Google's firebase console.",
      image: "/img/ycc.png",
      website1: "https://yorkcommunityconsulting.co.uk",
      website1name: "yorkcommunityconsulting.co.uk",
      technologies: ["Next.js", "React.js", "Google Firebase"],
  },
  {
      halfTitle: "SCAIL Website",
      halfDescription: "A website I am currently building for the Centre for Assuring Autonomy.",
      title: "SCAIL",
      description: "A description will be added shortly.",
      image: "/img/placeholder.png",
      website1: "https://scail.uk",
      website1name: "scail.uk",
      technologies: ["WordPress", "cPanel"]
  }
];

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 75 },
  { name: "SQL", level: 70 },
  { name: "CSS", level: 75 },
  { name: "HTML", level: 80 },
  { name: "JS", level: 65 },
  { name: "Next.js", level: 60}
];

const SkillCircle = ({ name, level, isAnimated }: { name: string; level: number; isAnimated: boolean }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-24">
      <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
        <circle className="text-gray-300" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
        <motion.circle className="text-orange-400" strokeWidth="10" stroke="currentColor" fill="transparent"
          r="40" cx="50" cy="50" strokeDasharray="251.2"
          strokeDashoffset={isAnimated ? 251.2 - (251.2 * level) / 100 : 251.2}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-semibold text-lg text-gray-800">{level}%</span>
    </div>
    <p className="text-sm font-medium text-gray-700 mt-2">{name}</p>
  </div>
);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect( () => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);
  
  return (
    <>
      <Navbar />    

      <section id="hero" className="relative h-screen">
        <div className="absolute inset-0 z-40 bg-black/30 text-white">
          <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center items-start px-10">
            <h6 className="text-sm md:text-lg font-semibold mb-3">Hello, I am</h6>
            <h1 className="text-5xl md:text-7xl font-medium">Daniel Smith</h1>
            <h4 className="text-lg md:text-2xl font-semibold mt-3">
              Computer Science Student at the University of York
            </h4>
            <div className="flex flex-col sm:gap-10 sm:flex-row gap-4 mt-4">
              <LinkIcons
                img="/icons/linkedin.svg"
                alt="LinkedIn Icon"
                href="https://www.linkedin.com/in/dansmith08/"
                text="Visit my LinkedIn"
                showArrow={true}
              />
              <LinkIcons
                img="/icons/github.svg"
                alt="GitHub Icon"
                href="https://github.com/dan-08smith"
                text="Visit my GitHub"
                showArrow={true}
              />
            </div>
          </div>
        </div>
      </section>



      <MainSection id="about" title="About Me" subtitle="find out more">
        <p>
          Hello! I am Daniel Smith, a second-year Computer Science student at the University of York with a passion 
          for web development, artificial intelligence, and cyber security.
        </p>
        <br/>
        <p>
          I have experience building websites using frameworks and technologies such as Next.js, Tailwind CSS, AWS, 
          Vercel, and Firebase. This website showcases some of my recent projects — feel free to explore!
        </p>
        <br/>
        <p className="text-gray-600 font-semibold">My CV is available upon request — don&apos;t hesitate to&nbsp;
          <Link href="mailto:daniel@d-smith.co.uk" target="_blank" className="hover:underline hover:underline-offset-4"
          >reach out</Link>!</p>
      </MainSection>

      <MainSection id="skills" title="Skills" subtitle="explore my">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill) => (
            <SkillCircle key={skill.name} name={skill.name} level={skill.level} isAnimated={isAnimated} />
          ))}
        </div>
      </MainSection>

      <MainSection id="portfolio" title="Portfolio" subtitle="browse my">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <PortfolioCard 
              key={index}
              halfTitle={project.halfTitle}
              halfDescription={project.halfDescription}
              image={project.image}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </MainSection>

      <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <MainSection id="contact" title="Contact Me" subtitle="feel free to">
        <div className="flex flex-col md:flex-row gap-6 mt-6">
                
          <Link href="mailto:daniel@d-smith.co.uk" target="_blank" className="flex-1">
            <div className="group flex flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition">
              <span className="text-2xl font-medium text-gray-900 dark:text-white">Email</span>
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-orange-500 transition">daniel@d-smith.co.uk</span>
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/dansmith08/" target="_blank" className="flex-1">
            <div className="group flex flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition">
              <span className="text-2xl font-medium text-gray-900 dark:text-white">LinkedIn</span>
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-orange-500 transition">@dansmith08</span>
            </div>
          </Link>

        </div>
      </MainSection>

      <Footer />
    </>
  );
}
