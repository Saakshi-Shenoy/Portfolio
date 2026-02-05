import {  BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Header from "./Header";
import ME from "../assets/me.jpeg";
import "aos/dist/aos.css";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDocker,
  DiDotnet,
} from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { SiExpress, SiMysql } from "react-icons/si";
import "../App.css";

function About(props) {

  const emailAddress = "shenoy.saakshi910@gmail.com";

const handleView = () => {
  const fileUrl =
    "https://drive.google.com/file/d/1QGbFZstA1W9W-M81kQI4M6otZm4MPQdT/view?usp=sharing";
  window.open(fileUrl, "_blank", "noopener,noreferrer");
};

  const techStack = [
    { icon: CgCPlusPlus, name: "C++", color: "hover:text-blue-600" },
    { icon: DiJavascript1, name: "JavaScript", color: "hover:text-yellow-500" },
    { icon: DiReact, name: "React", color: "hover:text-cyan-500" },
    { icon: DiNodejs, name: "Node.js", color: "hover:text-green-600" },
    { icon: SiExpress, name: "Express", color: "hover:text-slate-800" },
    { icon: DiMongodb, name: "MongoDB", color: "hover:text-green-500" },
    { icon: SiMysql, name: "MySQL", color: "hover:text-blue-600" },
    { icon: DiGit, name: "Git", color: "hover:text-orange-600" },
    { icon: DiDocker, name: "Docker", color: "hover:text-blue-600" },
    { icon: DiPython, name: "Python", color: "hover:text-blue-500" },
    { icon: SiCsharp, name: "Git", color: "hover:text-orange-600" },
    { icon: DiDotnet, name: "Dotnet", color: "hover:text-blue-500" }
  ];

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 opacity-95"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div id="about" className="relative pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-5 max-w-7xl">
          
          {/* Hero Header */}
          <Header />

          {/* Main Glass Card */}
          <div 
            className="p-1 mb-16"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className=" p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                
                {/* Left Column - Profile */}
                <div 
                  className="flex flex-col items-center lg:w-1/3 space-y-8"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {/* Profile Image with Advanced Effects */}
                  <div className="relative group">
                    {/* Animated Rings */}
                    <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 animate-ping-slow"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping-slower"></div>
                    </div>
                    
                    {/* Gradient Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-slow"></div>
                    
                    {/* Main Image */}
                    <div className="relative">
                      <img
                        src={ME}
                        className="relative rounded-full w-56 h-56 object-cover ring-4 ring-white/10 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                        alt="Saakshi Shenoy"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur-sm shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-semibold">Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center space-y-4">
                    <h2 className="font-heading font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-blue-200 animate-gradient-text">
                      SAAKSHI SHENOY
                    </h2>
                    
                    <div className="relative">
                      <div className="h-1 w-32 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full mx-auto"></div>
                      <div className="absolute inset-0 h-1 w-32 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full mx-auto blur-md"></div>
                    </div>
                    

                  </div>

                  {/* Social Links */}
                   <div className="flex gap-3">
                      {[
                        {
                          href: "https://www.linkedin.com/in/saakshi-shenoy/",
                          icon: BsLinkedin,
                          label: "LinkedIn",
                        },
                        {
                          href: `mailto:${emailAddress}`,
                          icon: IoMdMail,
                          label: "Email",
                        },
                        {
                          href: "https://github.com/Saakshi-Shenoy",
                          icon: BsGithub,
                          label: "GitHub",
                        },
                      ].map((social, idx) => (
                        <a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group flex items-center gap-2
                            px-4 py-3 rounded-lg
                            border border-slate-700
                            hover:border-cyan-400
                            transition-all
                          "
                        >
                          <social.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          <span className="text-slate-300 group-hover:text-white font-medium text-sm transition-colors">
                            {social.label}
                          </span>
                        </a>
                      ))}
                    </div>

                </div>

                {/* Right Column - Bio & CTA */}
                <div 
                  className="flex-1 lg:border-l lg:border-white/10 lg:pl-12 space-y-8"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="space-y-6">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                      Hello!
                      <span className="inline-block ml-3 text-6xl animate-wave">👋</span>
                    </h1>
                    
                    <div className="relative">
                      <div className="h-1.5 w-32 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full"></div>
                      <div className="absolute inset-0 h-1.5 w-32 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full blur-md"></div>
                    </div>
                    
                    <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                      <p className="">
                          I’m a Software Engineer with experience building scalable web applications and enterprise dashboards using React, JavaScript, and the MERN stack. I’ve gained hands-on industry exposure through internships at product-based organizations such as Nokia and Saks Global, where I worked on application modernization, API integration, and usability improvements.
                          <br/><br/>
                          <p>I enjoy creating data-driven interfaces and clean, maintainable code, and I’m continuously exploring machine learning to understand its real-world applications. I’m currently seeking opportunities to contribute to impactful, user-focused products while continuing to grow as an engineer.
</p>
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="">
                      <button
                        onClick={handleView}
                        className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl
                                  border-2 border-cyan-400 text-cyan-400 font-semibold
                                  transition-all duration-300
                                  hover:text-white hover:border-cyan-300"
                      >
                        {/* neon glow */}
                        <span className="absolute inset-0 rounded-xl border-2 border-cyan-400 blur-md opacity-40 group-hover:opacity-70 transition pointer-events-none"></span>

                        {/* content */}
                        <span className="relative flex items-center gap-2">
                          View Resume
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </button>


                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div 
            className="glass-card-ultra rounded-3xl p-1 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="glass-inner rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="font-heading text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-blue-200 mb-4">
                  Tech Arsenal
                </h3>
              </div>
              
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
                  {techStack.map((tech, idx) => (
                    <div 
                      key={idx}
                      className="tech-icon-ultra group"
                      data-aos="zoom-in"
                      data-aos-delay={500 + idx * 50}
                    >
                      <tech.icon className={`w-14 h-14 text-slate-400 ${tech.color} transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`} />

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
