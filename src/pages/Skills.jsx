import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    icon: "💻",
    items: [
      { name: "Java", level: 90 },
      { name: "C++", level: 85 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "🔧",
    items: [
      { name: "Spring Boot", level: 90 },
      { name: "Spring Security", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Authentication", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Thymeleaf", level: 75 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "Databases & DevOps",
    icon: "📦",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 95 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    category: "Aerospace & Tools",
    icon: "🚀",
    items: [
      { name: "SCADE", level: 80 },
      { name: "Avionics Systems", level: 75 },
      { name: "TLS/Encryption", level: 85 },
      { name: "JasperReports", level: 75 },
    ],
  },
  {
    category: "Cloud & Security",
    icon: "☁️",
    items: [
      { name: "Cloudinary", level: 80 },
      { name: "Firebase", level: 70 },
      { name: "OAuth2", level: 85 },
      { name: "Cypress Testing", level: 75 },
      { name: "Jest Testing", level: 75 },
    ],
  },
];

const SkillBar = ({ skill, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-lg p-5 hover:border-blue-500/50 transition-all duration-300 group"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="text-blue-400 font-bold text-sm"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-700/40 rounded-full h-2.5 overflow-hidden border border-gray-600/30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: delay + 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 h-2.5 rounded-full shadow-lg shadow-blue-500/50"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black p-8 py-20 text-white relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-32 left-16 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[140px]"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500 rounded-full filter blur-[130px]"
        ></motion.div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-6xl mx-auto relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient across full-stack development, aerospace systems, and cloud technologies
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="backdrop-blur-xl bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-900/30 border border-gray-700/50 rounded-2xl shadow-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-4xl"
              >
                {category.icon}
              </motion.span>
              <div>
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {category.category}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2"></div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((skill, itemIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={categoryIndex * 0.1 + itemIndex * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-16 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Years Experience", value: "1.5+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Award Recipient", value: "✓" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/60 transition-all"
            >
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
