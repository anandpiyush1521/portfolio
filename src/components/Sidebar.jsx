import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Code2, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import ProfilePic from '../assets/profile-pic.jpeg';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/skills', icon: Code2, label: 'Skills' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/contact', icon: Mail, label: 'Contact' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const index = navItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(index >= 0 ? index : 0);
  }, [location]);

  return (
    <>
      {/* Mobile Menu Toggle Button with animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800/80 backdrop-blur-sm text-white rounded-lg shadow-lg md:hidden hover:bg-gray-700 transition-all duration-300 border border-gray-700/50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} className="animate-fadeIn" /> : <Menu size={24} className="animate-pulse" />}
      </button>

      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-gray-900 to-gray-950 text-white border-r border-gray-800/70 shadow-xl transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-64 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>

          {/* Profile section with improved styling */}
          <div className="p-8 text-center relative">
            <div className="relative inline-block mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-2 border-gray-900"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Piyush Anand</h2>
            <div className="flex items-center justify-center mt-1">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <p className="text-gray-300">Backend Developer</p>
            </div>
          </div>

          {/* Navigation with animation indicator */}
          <nav className="flex-1 px-5 py-2 relative">
            <div className="absolute h-12 my-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl transition-all duration-300 backdrop-blur-sm border-l-2 border-blue-500"
                style={{
                  transform: `translateY(${activeIndex * 48}px)`,
                  width: '94%'
                }}
            ></div>
            
            {navItems.map(({ path, icon: Icon, label }, index) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 mb-2 rounded-xl transition-all duration-300 relative z-10 ${
                    isActive 
                      ? 'text-white font-medium' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} className={`mr-3 transition-transform duration-300 ${activeIndex === index ? 'scale-110' : ''}`} />
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Social links with hover effects */}
          <div className="px-6 py-8 border-t border-gray-800/50">
            <p className="text-xs text-gray-500 mb-4 text-center">Connect with me</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/anandpiyush1521/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <div className="p-2 rounded-lg hover:bg-gray-800/80">
                  <Github size={22} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-anand-635208201/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <div className="p-2 rounded-lg hover:bg-gray-800/80">
                  <Linkedin size={22} />
                </div>
              </a>
              <a
                href="https://leetcode.com/u/whopiyushanand/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="LeetCode"
              >
                <div className="p-2 rounded-lg hover:bg-gray-800/80">
                  <SiLeetcode size={22} />
                </div>
              </a>
            </div>
            
            <div className="mt-6 text-center">
              <span className="inline-block text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">© 2025 Piyush Anand</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}