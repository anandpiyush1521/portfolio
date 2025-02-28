import React from "react";
import invenquity from '../assets/invenquity.png';
import nishliving from '../assets/nishliving.png';
import smartContactManager from '../assets/smartContactManager.png';
import nishDcex from '../assets/nishDcex.png';
import dsaRepo from '../assets/dsaRepo.png';

const projects = [
  {
    title: "Invenquity",
    description:
      "A high-quality inventory management system developed using Java, focusing on efficient stock tracking and management solutions.",
    image: invenquity,
    technologies: ["Java", "React.js", "Spring Boot", "MySQL"],
    demoUrl: "https://github.com/anandpiyush1521/Invenquity",
    githubUrl: "https://github.com/anandpiyush1521/Invenquity",
  },
  {
    title: "Smart Contact Manager",
    description:
      "A full-stack contact management web application built using Spring Boot and React, allowing users to manage and store their contacts efficiently.",
    image: smartContactManager,
    technologies: ["Spring Boot", "React.js", "MySQL", "Cloudinary"],
    demoUrl: "https://github.com/anandpiyush1521/SmartContactManager",
    githubUrl: "https://github.com/anandpiyush1521/SmartContactManager",
  },
  {
    title: "Nish-Dcex",
    description:
      "A decentralized exchange (DEX) platform built on Solana, enabling users to trade cryptocurrencies with speed and security.",
    image: nishDcex,
    technologies: ["Next.js", "Solana", "Anchor", "Tailwind CSS"],
    demoUrl: "https://github.com/anandpiyush1521/Nish-Dcex",
    githubUrl: "https://github.com/anandpiyush1521/Nish-Dcex",
  },
  {
    title: "NishLiving",
    description:
      "A modern platform for property listings and bookings, leveraging React, Express.js, MongoDB, and Cloudinary for a seamless user experience.",
    image: nishliving,
    technologies: ["React", "Express.js", "MongoDB", "Cloudinary"],
    demoUrl: "https://github.com/anandpiyush1521/NishLiving",
    githubUrl: "https://github.com/anandpiyush1521/NishLiving",
  },
  {
    title: 'DSA Repository',
    description: 'A collection of Data Structures and Algorithms solutions in Java, covering problems from LeetCode, Codeforces, and other coding platforms.',
    image: dsaRepo,
    technologies: ['Java', 'DSA', 'LeetCode', 'Codeforces'],
    demoUrl: 'https://github.com/anandpiyush1521/DSA',
    githubUrl: 'https://github.com/anandpiyush1521/DSA',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-6 py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[140px] opacity-20 animate-pulse"></div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400" data-aos="fade-down">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="backdrop-blur-lg bg-gray-800/40 border border-gray-700/50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 ease-out hover:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}