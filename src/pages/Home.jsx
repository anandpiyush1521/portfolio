import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background elements - matching sidebar gradient style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Text section with slide-in animation */}
        <div className={`flex-1 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
          <div className="flex items-center mb-4">
            <div className="inline-block px-4 py-1 bg-blue-900/20 backdrop-blur-sm rounded-full border border-blue-700/50 text-blue-400 text-sm font-medium">
              Backend Developer
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Piyush Anand</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A dedicated Backend Developer with a strong focus on building scalable and efficient server-side applications. Experienced in designing robust APIs, optimizing database performance, and ensuring seamless integration with frontend systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-700/30"
            >
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl border border-gray-700/50 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Image section with slide-in and glow effect */}
        <div className={`flex-1 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
          <div className="relative rounded-xl overflow-hidden group">
            {/* Animated border gradient - matching sidebar profile pic style */}
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Image container */}
            <div className="relative p-1 rounded-xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="relative rounded-lg overflow-hidden bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600"
                  alt="Developer"
                  className="w-full rounded-lg shadow-2xl object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Overlay with tech icons or code snippets */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                {/* Tech stack badges - matching sidebar styling */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Express'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs font-medium rounded-full border border-gray-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}