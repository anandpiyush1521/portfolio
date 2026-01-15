import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Code2, Briefcase, Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import ProfilePic from '../assets/profile-pic.jpeg';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/skills', icon: Code2, label: 'Skills' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/blog', icon: BookOpen, label: 'Article' },
  { path: '/contact', icon: Mail, label: 'Contact' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/anandpiyush1521/' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/piyush-anand-635208201/' },
  { icon: SiLeetcode, label: 'LeetCode', url: 'https://leetcode.com/u/whopiyushanand/' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const index = navItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(index >= 0 ? index : 0);
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800/80 backdrop-blur-sm text-white rounded-lg shadow-lg md:hidden hover:bg-gray-700 transition-all duration-300 border border-gray-700/50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-900 to-gray-950 text-white border-r border-gray-800/70 shadow-xl transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 scrollbar-hide`}
      >
        <div className="flex flex-col h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-64 overflow-hidden opacity-20 pointer-events-none z-0">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>

          {/* Profile section */}
          <div className="p-8 text-center relative">
            <div className="relative inline-block mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-2 border-gray-900 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <a href="/" className="inline-block hover:opacity-80 transition-opacity">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Piyush Anand</h2>
            </a>
            <div className="flex items-center justify-center mt-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <p className="text-sm text-gray-300">Software Engineer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 relative">
            <div 
              className="absolute h-12 left-3 right-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl transition-all duration-300 ease-out backdrop-blur-sm border-l-2 border-blue-500"
              style={{
                transform: `translateY(${activeIndex * 56}px)`,
              }}
            ></div>
            
            {navItems.map(({ path, icon: Icon, label }, index) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 mb-2 rounded-xl transition-all duration-300 relative z-10 group ${
                    isActive 
                      ? 'text-white font-medium' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} className={`mr-3 transition-transform duration-300 ${activeIndex === index ? 'scale-110' : ''}`} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Social links */}
          <div className="px-6 py-6 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
            <p className="text-xs text-gray-500 mb-4 text-center">Connect with me</p>
            <div className="flex gap-2 justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </a>
                );
              })}
            </div>
            
            <div className="mt-4 text-center">
              <span className="inline-block text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full hover:bg-gray-800/70 transition-colors">
                © 2025 Piyush Anand
              </span>
            </div>
          </div>
        </div>
      </aside>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
