import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import adGif from "../assets/AD.gif";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    "Java",
    "Spring Boot",
    "C++",
    "PostgreSQL",
    "React",
    "Express",
    "Docker",
    "AWS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>

      {/* Cursor glow effect */}
      <div
        className="fixed w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-0 pointer-events-none mix-blend-screen"
        style={{
          left: `${mousePos.x - 80}px`,
          top: `${mousePos.y - 80}px`,
          opacity: 0.15,
          transition: "all 0.1s ease-out",
        }}
      ></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 p-6 min-h-screen">
        {/* Text section with slide-in animation */}
        <div
          className={`flex-1 transform transition-all duration-1000 ease-out space-y-8 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-16 opacity-0"
          }`}
        >
          <div className="inline-block">
            <div className="px-4 py-1 bg-blue-900/20 backdrop-blur-sm rounded-full border border-blue-700/50 text-blue-400 text-sm font-medium">
              Software Developer
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Piyush Anand
              </span>
            </h1>
            {/* <p className="text-xl text-gray-400 font-light">Backend Engineer & Full-Stack Developer</p> */}
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            A dedicated Software Engineer with a strong focus on building
            scalable and efficient server-side applications. Experienced in
            designing robust APIs, optimizing database performance, and ensuring
            seamless integration with frontend systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-700/30"
            >
              View My Work
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl border border-gray-700/50 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Code card section - matching the screenshot */}
        <div
          className={`flex-1 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden group">
            {/* Animated border gradient */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

            {/* Main card container */}
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 overflow-hidden">
              {/* Background GIF */}
              <div className="absolute inset-0 opacity-45">
                <img
                  src={adGif}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Code snippet with syntax highlighting */}
              <div className="relative space-y-4 mb-8">
                <div className="font-mono text-sm space-y-2">
                  <div
                    className="animate-fadeInUp"
                    style={{ animationDelay: "0s" }}
                  >
                    <span className="text-purple-400">public</span>
                    <span className="text-gray-300"> </span>
                    <span className="text-purple-400">class</span>
                    <span className="text-gray-300"> Deploy </span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  <div
                    className="animate-fadeInUp pl-4"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <span className="text-purple-400">public</span>
                    <span className="text-gray-300"> </span>
                    <span className="text-blue-400">static</span>
                    <span className="text-gray-300"> </span>
                    <span className="text-blue-400">void</span>
                    <span className="text-gray-300"> main(</span>
                    <span className="text-blue-400">String</span>
                    <span className="text-gray-300">[] args) </span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  <div
                    className="animate-fadeInUp pl-8"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <span className="text-gray-300">System. out.println(</span>
                    <span className="text-green-400">"Production Ready"</span>
                    <span className="text-gray-300">);</span>
                  </div>
                  <div
                    className="animate-fadeInUp pl-4"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <span className="text-gray-300">{"}"}</span>
                  </div>
                  <div
                    className="animate-fadeInUp"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <span className="text-gray-300">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

              {/* Tech Stack */}
              <div className="relative space-y-6">
                <p className="text-sm font-medium text-gray-400">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
