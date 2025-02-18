"use client";
import { useState } from "react"
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
      description: "This project was built using Next.js and Tailwind CSS, and is deployed using Vercel. It utilises an interactive UI to showcase a selection of my projects.",
      image: "/dsweb.png",
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
      description: "This project was designed for the Largiemore Chalet Owners Association. It was built using Next.js and Tailwind CSS, and is deployed using AWS Amplify. It contains the main home page, an auth subdomain, and a portal subdomain which contains key information for members.",
      image: "/lcoa.png",
      website1: "https://lcoa.d-smith.co.uk",
      website1name: "lcoa.d-smith.co.uk",
      website2: "https://v1.lcoa.d-smith.co.uk",
      website2name: "v1.lcoa.d-smith.co.uk (Version 1.0)",
      technologies: ["Next.js", "Tailwind CSS", "AWS Amplify"],
  },
  {
      halfTitle: "ENG1 Websites",
      halfDescription: "Websites built for Assessment 1 and 2 of my Engineering 1 module.",
      title: "ENG1: Assessment 1 & 2",
      description: "Two websites produced for Assessment 1 and 2 of my Engineering 1 module. The first was designed and built by myself and another group member, the second was taken over from another team and built on to improve flow and add information.",
      image: "/eng1.png",
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
      image: "/ycc.png",
      website1: "https://yorkcommunityconsulting.co.uk",
      website1name: "yorkcommunityconsulting.co.uk",
      technologies: ["Next.js", "React.js", "Google Firebase"],
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  return (
    <>
      <Navbar />    

      <div className="w-full bg-red-600 text-black text-center py-2 text-sm font-semibold fixed top-[64px] left-0 right-0 z-50">
        Please note, this website is currently under construction.
      </div>

      <section id="hero" className="relative h-screen">
        <div className="absolute inset-0 z-40 flex flex-col justify-center items-start 
          text-left text-white bg-black/30 px-10 md:px-20">
          
          <h6 className="text-sm md:text-lg font-semibold mb-3">Hello, I am</h6>
          <h1 className="text-5xl md:text-7xl font-medium">Daniel Smith</h1>
          <h4 className="text-lg md:text-2xl font-semibold mt-3">Computer Science Student at the University of York</h4>

          <div className="flex gap-x-10 mt-4">
            <LinkIcons img="/linkedin.svg" alt="LinkedIn Icon" href="https://www.linkedin.com/in/dansmith08/" text="Visit my LinkedIn" showArrow={true} />
            <LinkIcons img="/github.svg" alt="GitHub Icon" href="https://github.com/dan-08smith" text="Visit my GitHub" showArrow={true}/>
          </div>

        </div>
      </section>

      <MainSection id="about" title="About Me" subtitle="find out more">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet pulvinar vivamus ipsum metus 
          a ultrices auctor accumsan. Cras justo eget consectetur scelerisque potenti class cras aenean 
          purus. Commodo finibus magna massa ante nec commodo; efficitur diam feugiat. Dictumst sodales 
          suspendisse eros elit vitae conubia efficitur suspendisse sollicitudin. Ut elementum venenatis 
          adipiscing suspendisse purus aenean placerat cras.
        </p>
      </MainSection>

      <MainSection id="cv" title="CV & Experience" subtitle="explore my">
        <LinkIcons img="/file-text.svg" alt="File Icon" href="/blank.pdf" text="View my CV" showArrow={false}/>
      </MainSection>

      <MainSection id="portfolio" title="Portfolio" subtitle="Browse my">
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

      <MainSection id="contact" title="Contact Me" subtitle="Feel free to">
        <div className="flex flex-col md:flex-row gap-6 mt-6">
                
          <Link href="mailto:daniel@d-smith.co.uk" target="_blank" className="flex-1">
            <div className="group flex flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition">
              <span className="text-2xl font-medium text-gray-900 dark:text-white">Email Me</span>
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition">daniel@d-smith.co.uk</span>
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/dansmith08/" target="_blank" className="flex-1">
            <div className="group flex flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition">
              <span className="text-2xl font-medium text-gray-900 dark:text-white">LinkedIn</span>
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition">@dansmith08</span>
            </div>
          </Link>

          </div>
      </MainSection>

      <Footer />

    </>
    
  );
}
