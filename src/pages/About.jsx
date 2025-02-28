import React, { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen p-6 pt-12 pb-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`transform transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            About Me
          </h2>
        </div>

        {/* Introduction Section */}
        <div
          className={`backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 rounded-xl shadow-xl p-8 mb-8 transform transition-all duration-700 delay-100 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-lg text-gray-300 mb-6">
            I'm a{" "}
            <span className="font-semibold text-blue-400">
              backend-focused full-stack developer
            </span>{" "}
            with expertise in designing and building scalable, high-performance
            applications. My passion for software development is driven by a
            deep understanding of{" "}
            <span className="font-semibold text-blue-400">
              backend architectures, API development, database optimization
            </span>
            , and writing efficient, maintainable code.
          </p>
          <p className="text-lg text-gray-300">
            I specialize in{" "}
            <span className="font-semibold text-blue-400">
              Java, Spring Boot, Python, SQL
            </span>
            , and have hands-on experience with modern full-stack frameworks
            like{" "}
            <span className="font-semibold text-blue-400">
              Node.js, Express, React, and Next.js
            </span>
            . I enjoy solving complex problems, optimizing backend workflows,
            and creating robust, secure applications that power seamless user
            experiences.
          </p>
        </div>

        {/* Skills Section */}
        <div
          className={`backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 rounded-xl shadow-xl p-8 mb-8 transform transition-all duration-700 delay-200 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="text-xl font-bold mb-4 text-white">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Java",
              "Spring Boot",
              "Python",
              "SQL & PostgreSQL",
              "MongoDB",
              "Node.js & Express.js",
              "React & Next.js",
              "Docker & Kubernetes",
              "Cloud & Firebase",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-3 text-center text-blue-400 hover:bg-gray-800 transition-colors duration-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education & Experience Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transform transition-all duration-700 delay-300 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Education Section */}
          <div className="backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 rounded-xl shadow-xl p-6 group hover:bg-gray-800/40 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-700/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <ul className="space-y-6 pl-2">
              <li className="relative">
                <div className="absolute w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 left-0 -ml-2 opacity-70"></div>
                <div className="pl-4">
                  <h4 className="font-semibold text-white">
                    Post Graduate in Advanced Computing
                  </h4>
                  <p className="text-gray-400">C-DAC, Bengaluru</p>
                  <p className="text-gray-500 text-sm">2024-25</p>
                </div>
              </li>
              <li className="relative">
                <div className="absolute w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 left-0 -ml-2 opacity-70"></div>
                <div className="pl-4">
                  <h4 className="font-semibold text-white">
                    Bachelor of Technology (CSE)
                  </h4>
                  <p className="text-gray-400">Galgotias University</p>
                  <p className="text-gray-500 text-sm">2020 - 2024</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 rounded-xl shadow-xl p-6 group hover:bg-gray-800/40 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-700/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>
            <ul className="space-y-6 pl-2">
              <li className="relative">
                <div className="absolute w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 left-0 -ml-2 opacity-70"></div>
                <div className="pl-4">
                  <h4 className="font-semibold text-white">
                    Java Developer Intern
                  </h4>
                  <p className="text-gray-400">Datafoundry</p>
                  <p className="text-gray-500 text-sm mb-2">2024</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>
                      Designed and developed RESTful APIs using Spring Boot with
                      PostgreSQL for efficient data management.
                    </li>
                    <li>
                      Implemented secure user authentication and authorization,
                      ensuring robust access control and seamless user
                      experience.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div
          className={`backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 rounded-xl shadow-xl p-8 mt-8 transform transition-all duration-700 delay-400 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-700/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Projects</h3>
          </div>
          <ul className="space-y-8">
            <li className="backdrop-blur-sm bg-gray-900/40 rounded-lg p-6 hover:bg-gray-900/60 transition-colors duration-300 border border-gray-800/50">
              <h4 className="font-semibold text-lg text-white mb-1">
                Smart Contact Manager
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Spring Boot", "SQL", "OAuth2", "Cloudinary"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <p className="text-gray-300 text-sm">
                Built a secure authentication system with Spring Security,
                integrated OAuth2 login, and optimized database queries for
                efficient contact management.
              </p>
            </li>
            <li className="backdrop-blur-sm bg-gray-900/40 rounded-lg p-6 hover:bg-gray-900/60 transition-colors duration-300 border border-gray-800/50">
              <h4 className="font-semibold text-lg text-white mb-1">
                NishLiving
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Node.js", "MongoDB", "JWT", "Cloudinary"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <p className="text-gray-300 text-sm">
                Developed a full-stack property listing and booking platform
                with secure authentication, efficient image storage, and email
                notifications.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
