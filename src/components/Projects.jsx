import React, { useEffect } from "react";
import Jiffy from "../assets/jiffy.png";
import Catalysis from "../assets/catalysis.png";
import Hackman from "../assets/HackMan.png";
import Nokia from "../assets/nokia_project.png";
import Armadillo from "../assets/Armadillo.png";
import AuthAuth from "../assets/AuthAuth.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../App.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1300, once: false });
  }, []);

  const projects = [
    {
      title: "JIFFY",
      category: "MERN STACK",
      description: "A responsive and robust food ordering and delivery website designed to streamline and expedite the food delivery process.",
      image: Jiffy,
      link: "https://github.com/Saakshi-Shenoy/FoodApp",
      gradient: "from-teal-500 to-blue-600",
      tech: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "CATALYSIS v2.0",
      category: "MERN STACK",
      description: "Contribution to an intra-college event website for a 3-Day Technical fest, Catalysis v2.0 organized by the Department of ISE, DSCE.",
      image: Catalysis,
      link: "https://github.com/Saakshi-Shenoy/Catalysis2.0",
      gradient: "from-purple-500 to-pink-600",
      tech: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
    title: "Intent-Based LLM for Service Orchestration",
    category: "GENAI / NLP SYSTEM",
    description: "A GenAI-powered intent orchestration system that converts natural language inputs into structured service intents using LLaMA 3, compliant with TMF921 Intent Management API standards. The system processes 500+ service intents and maps user queries into JSON-LD payloads to enable intelligent automation and resource management.",
    image: Nokia, 
    link: "https://github.com/Saakshi-Shenoy", 
    gradient: "from-indigo-500 to-blue-600",
    tech: ["Python", "LLaMA 3", "NLP", "TMF921", "JSON-LD", "REST APIs"]
    },
    {
      title: "HACKMAN v7.0",
      category: "FULL STACK",
      description: "Contribution to the website for an extravagant 30-hour inter-collegiate Hackathon organized by the Department of ISE at DSCE.",
      image: Hackman,
      link: "https://hackmanv7.netlify.app/",
      gradient: "from-pink-500 to-orange-600",
      tech: ["Full Stack", "Web Development"]
    },
    {
      title: "Armadillo",
      category: "FULL STACK | CYBERSECURITY",
      description: "Cybersecurity analytics platform providing breach intelligence and real-time alerts, built with React and Python-based backend services.",
      image: Armadillo, 
      link: "https://github.com/Saakshi-Shenoy/Sentinel", 
      gradient: "from-pink-500 to-orange-600",
      tech: ["React", "JavaScript", "Python", "Flask", "Django", "Web Scraping", "Cybersecurity"]
    },
    {
      title: "Auth-and-Auth",
      category: "FULL STACK",
      description: "MERN-based authentication platform with JWT, refresh token rotation, HTTP-only cookies, RBAC, protected APIs, and Google OAuth 2.0 support.",
      image: AuthAuth, 
      link: "https://github.com/Saakshi-Shenoy/Auth-and-Auth", 
      gradient: "from-blue-500 to-indigo-600",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "RBAC", "OAuth 2.0"]
    }

  ];

  return (
    <div id="projects" className="relative py-20 min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <section className="relative container mx-auto px-5 max-w-7xl">
        
        {/* Section Header */}
        <div 
          className="text-center mb-16 space-y-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          
          <h1 className="font-heading pt-2 text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-blue-200">
            Featured Projects
          </h1>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my work in web development and full-stack applications
          </p>
          
          <div className="relative mx-auto w-32">
            <div className="h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full blur-md"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card-ultra group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay={idx * 100}
            >
              {/* Card Border Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative h-full bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                    alt={project.title}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-bold shadow-lg backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay with Icons */}
                  <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      {project.link.includes('github') ? (
                        <FiGithub className="w-6 h-6 text-white" />
                      ) : (
                        <FiExternalLink className="w-6 h-6 text-white" />
                      )}
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h2>
                  
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 rounded-md bg-slate-800/50 border border-white/10 text-slate-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Bottom Shine Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="500"
        >
        </div>

      </section>
    </div>
  );
}

export default Projects;