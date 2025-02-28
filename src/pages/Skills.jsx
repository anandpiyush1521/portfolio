import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Backend & APIs",
    items: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Databases & DevOps",
    items: [
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Docker", level: 50 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 80 },
    ],
  },
  {
    category: "Cloud & Security",
    items: [
      { name: "AWS", level: 60 },
      { name: "Cloudinary", level: 70 },
      { name: "JWT Authentication", level: 80 },
      { name: "Cypress", level: 70 },
      { name: "Jest", level: 65 },
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black p-8 py-20 text-white relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[140px] opacity-20 animate-pulse"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
      >
        Skills & Expertise
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="backdrop-blur-lg bg-gray-800/40 border border-gray-700/50 rounded-xl shadow-lg p-8 hover:bg-gray-800 transition-all"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">
                      {skill.name}
                    </span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
