import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import websa from "../assets/websa.jpg";
import nokia from "../assets/nokia.jpg";
import sg from "../assets/sg.png"
import "../App.css";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1300, once: false });
  }, []);

  const experiences = [
    
    {
      title: "Trainee, Engineering",
      company: "Saks Global",
      location: "Bangalore",
      date: "July 2025 - December 2025",
      description: "Worked on modernizing enterprise applications by migrating legacy services, enhancing monitoring dashboards, improving UI usability, and supporting CI/CD deployments across multiple environments.",
      icon: sg,
      color: "rgb(59, 130, 246)",
      gradient: "from-blue-500 to-purple-600",
      current: false
    },
    {
      title: "Technology Intern",
      company: "Saks Global",
      location: "Bangalore",
      date: "January 2025 - June 2025",
      description: "Gained hands-on experience in full-stack development using C# and ASP.NET Core, building web applications, integrating APIs, and following clean architecture and industry best practices.",
      icon: sg,
      color: "rgb(236, 72, 153)",
      gradient: "from-pink-500 to-orange-600",
      current: false
    },
    {
      title: "Project Intern",
      company: "Nokia",
      location: "Bangalore",
      date: "April 2024 - July 2024",
      description: "Development of an Intent-based LLM for the purpose of Service Orchestration.",
      icon: nokia,
      color: "rgb(20, 184, 166)",
      gradient: "from-teal-500 to-blue-600",
      current: false
    },
    {
      title: "Intern",
      company: "Emertxe Information Technologies - WebStack Academy",
      location: "Remote",
      date: "August 2023 - October 2023",
      description: "MERN Stack Web Development. Internship involved the development of a comprehensive Food Delivery Website.",
      icon: websa,
      color: "rgb(139, 92, 246)",
      gradient: "from-purple-500 to-pink-600",
      current: false
    },
  ];

  return (
    <div
      id="experience"
      className="relative py-20 min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <section className="relative container mx-auto px-5 max-w-7xl">
        
        {/* Section Header */}
        <div 
          className="text-center mb-16 space-y-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          
          <h1 className="font-heading pt-2 text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
            Experience
          </h1>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional journey and contributions across various organizations
          </p>
          
          <div className="relative mx-auto w-32">
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full blur-md"></div>
          </div>
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(148, 163, 184, 0.2)">
          {experiences.map((exp, idx) => (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "1rem",
                boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.3)",
                color: "#fff"
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(15, 23, 42, 0.8)"
              }}
              iconStyle={{
                background: exp.color,
                boxShadow: `0 0 0 4px rgba(15, 23, 42, 1), 0 0 20px ${exp.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              icon={
                <img 
                  src={exp.icon} 
                  alt={exp.company} 
                  className="rounded-full w-full h-full object-cover"
                />
              }
            >
              {/* Card Content */}
              <div className="space-y-4">
                {/* Current Badge */}
                {exp.current && (
                  <div className="inline-block">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold flex items-center gap-2 w-fit">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Current
                    </span>
                  </div>
                )}

                {/* Title */}
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-2`}>
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
                    <FiBriefcase className="w-4 h-4 text-teal-400" />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <FiCalendar className="w-4 h-4 text-purple-400" />
                      {exp.date}
                    </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FiMapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed text-sm">
                  {exp.description}
                </p>

                {/* Bottom Gradient Line */}
                <div className={`h-1 w-full bg-gradient-to-r ${exp.gradient} rounded-full mt-4`}></div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </section>
    </div>
  );
}

export default Experience;