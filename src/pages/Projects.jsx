import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Invenquity",
    description:
      "A comprehensive inventory management system with role-based access control, real-time stock tracking, and advanced analytics. Built with Spring Boot backend and React frontend for seamless operations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    technologies: ["Java", "Spring Boot", "React.js", "Tailwind CSS", "MySQL", "RBAC", "JWT"],
    demoUrl: "https://github.com/anandpiyush1521/Invenquity",
    githubUrl: "https://github.com/anandpiyush1521/Invenquity",
    highlights: ["Role-based Authentication", "Real-time Updates", "Advanced Analytics"],
    category: "Full Stack",
  },
  {
    title: "Smart Contact Manager",
    description:
      "Full-featured contact management platform with OAuth2 authentication, advanced search capabilities, and cloud-based image storage. Intuitive UI for effortless contact organization.",
    image: "https://images.unsplash.com/photo-1555707462-c2b59d7cb64e?w=500&h=300&fit=crop",
    technologies: ["Spring Boot", "React", "Tailwind CSS", "MySQL", "Cloudinary", "OAuth2"],
    demoUrl: "https://github.com/anandpiyush1521/SmartContactManager",
    githubUrl: "https://github.com/anandpiyush1521/SmartContactManager",
    highlights: ["OAuth2 Authentication", "Cloud Storage", "Search & Filter"],
    category: "Full Stack",
  },
  {
    title: "Nish-Dcex",
    description:
      "Decentralized cryptocurrency exchange platform built on Solana blockchain. Enables fast, secure peer-to-peer trading with smart contract integration and real-time price feeds.",
    image: "https://images.unsplash.com/photo-1516354928771-14e42b8d3d51?w=500&h=300&fit=crop",
    technologies: ["Next.js", "Solana", "Anchor", "Tailwind CSS", "Web3"],
    demoUrl: "https://github.com/anandpiyush1521/Nish-Dcex",
    githubUrl: "https://github.com/anandpiyush1521/Nish-Dcex",
    highlights: ["Blockchain Integration", "Smart Contracts", "Real-time Trading"],
    category: "Web3",
  },
  {
    title: "NishLiving",
    description:
      "Modern property listing and booking platform with user authentication, property filtering, reviews system, and integrated payment processing for seamless bookings.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4198f5e7e?w=500&h=300&fit=crop",
    technologies: ["React", "Express.js", "MongoDB", "Cloudinary", "JWT", "Node.js"],
    demoUrl: "https://github.com/anandpiyush1521/NishLiving",
    githubUrl: "https://github.com/anandpiyush1521/NishLiving",
    highlights: ["Property Listings", "Booking System", "Reviews & Ratings"],
    category: "Full Stack",
  },
  {
    title: "DSA Repository",
    description:
      "Comprehensive collection of Data Structures and Algorithms solutions in Java. Covers LeetCode problems, competitive programming challenges, and complex algorithmic patterns with detailed explanations.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    technologies: ["Java", "DSA", "LeetCode", "Graphs", "Trees", "Dynamic Programming"],
    demoUrl: "https://github.com/anandpiyush1521/DSA",
    githubUrl: "https://github.com/anandpiyush1521/DSA",
    highlights: ["500+ Solutions", "Optimized Algorithms", "Pattern Recognition"],
    category: "DSA",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="backdrop-blur-xl bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-900/30 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-900/50">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 left-4"
        >
          <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-blue-400/50">
            {project.category}
          </span>
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end"
        >
          <div className="w-full p-4">
            <p className="text-gray-200 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.highlights.map((highlight, idx) => (
            <motion.span
              key={highlight}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="px-2 py-1 bg-green-900/40 text-green-300 rounded-full text-xs border border-green-700/50 font-medium"
            >
              ✓ {highlight}
            </motion.span>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-5">
          <p className="text-xs text-gray-400 font-semibold mb-2">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-900/40 to-blue-800/40 text-blue-300 rounded-full text-xs border border-blue-600/50 hover:border-blue-400/70 transition-all duration-300 font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-700/30">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm"
          >
            ⭐ View Code
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center px-4 py-2.5 border-2 border-gray-400 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-300 transition-all duration-300 text-sm"
          >
            💻 GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full Stack", "Web3", "DSA"];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen p-6 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-32 left-16 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[140px]"
        ></motion.div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of full-stack applications, blockchain solutions, and algorithmic expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800/40 text-gray-300 border border-gray-700/50 hover:border-blue-500/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
