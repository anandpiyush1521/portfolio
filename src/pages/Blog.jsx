import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ExternalLink, Search, X, ChevronDown, Filter, Check, Tag } from "lucide-react";
import glassImg from "../assets/glass.png"
import polarityImg from "../assets/polarity.png"
import autopilotImg from "../assets/autopilot.jpeg"

const blogPosts = [
  {
    title: "Decoding the Skies: Autopilot System Explanation",
    excerpt: "When you step into the cockpit of a modern aircraft, one of the most fascinating systems you’ll encounter is the autopilot. Far from the science fiction concept of a “self-flying” plane, the autopilot is a sophisticated assistant that helps pilots maintain precise control over the aircraft during flight. Let me break down how this incredible technology works.",
    date: "2026-01-16",
    readTime: "20 min read",
    category:  ["Aviation Technology", "Flight Pilot Simulator ", "STEM"],
    image: autopilotImg,
    link: "https://medium.com/@piyushanand2580/decoding-the-skies-autopilot-system-explanation-904a57b91d3e",
  },
  {
    title: "Area of Rectangle with Longest Diagonal",
    excerpt: "Master the mathematical approach to finding the maximum area of a rectangle given its longest diagonal constraint.  Learn the geometry behind optimization problems.",
    date: "2025-08-26",
    readTime: "8 min read",
    category:  ["DSA"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    link: "https://medium.com/@piyushanand2580/area-of-rectangle-with-longest-diagonal-0be6bbb51137",
  },
  {
    title:  "Percentage of Letter in String",
    excerpt: "Discover efficient algorithms to calculate the percentage of a specific letter within a string.  Explore character counting and percentage calculation techniques.",
    date: "2023-01-13",
    readTime: "12 min read",
    category:  ["DSA"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    link: "https://medium.com/@piyushanand2580/percentage-of-letter-in-string-62120d5fafd3",
  },
  {
    title: "Determining the Polarity and Statistics of Chat based on Sentiment Analysis",
    excerpt: "Social media networks (SMNs) generate huge amounts of data every day, which can be structured, unstructured or semi-structured. Data can range from plain text to a graphic image or sound or video.  Analyzing this diverse and ever-growing data is a major challenge.  This paper focuses on extracting and analyzing data from the frequently used online text application WhatsApp through the process of sentimental and statistical analysis.",
    date: "2023-05-12",
    readTime: "3 hr read",
    category: ["Machine Learning", "Python", "NLP"],
    image:  polarityImg,
    link: "https://bvicam.in/INDIACom/IJRMS/downloads/pdf/issue2/4. pdf",
  },
  {
    title: "Number of Nodes in the Sub-Tree With the Same Label",
    excerpt: "Learn how to traverse and count nodes in a tree sub-structure that share the same label.  Explore tree traversal algorithms and optimization strategies.",
    date: "2023-01-12",
    readTime: "10 min read",
    category:  ["DSA"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=300&fit=crop",
    link: "https://medium.com/@piyushanand2580/1519-number-of-nodes-in-the-sub-tree-with-the-same-label-8741d219db51",
  },
  {
    title: "Glass Virtual Try-On",
    excerpt: "Virtual try-on is a technology that allows people to virtually check the appearance of accessories, makeup, hairstyle,hair color, clothes and potentially more on themselves. The virtual try-on presents many advantages over real try-on, it speeds up the process providing the possibility to test hundreds of products without the need to reach a physical store.",
    date: "2022-05-12",
    readTime: "2 hr read",
    category:  ["Computer Vision", "AR/VR"],
    image: glassImg,
    link: "https://www.ijraset.com/best-journal/glass-virtual-tryon",
  },
];

// Fixed: Extract all unique categories from array structure
const getAllCategories = () => {
  const allCats = new Set();
  blogPosts.forEach(post => {
    const cats = Array.isArray(post.category) ? post.category : [post. category];
    cats.forEach(cat => allCats.add(cat));
  });
  return ["All", ...Array.from(allCats)];
};

const categories = getAllCategories();

const BlogCard = ({ post, index, onReadMore }) => {
  // Fixed: Handle both string and array categories
  const displayCategory = Array.isArray(post.category) ? post.category[0] : post.category;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -5 }}
      className="backdrop-blur-xl bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-900/40 border border-gray-700/50 rounded-xl shadow-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-blue-500/10"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {Array.isArray(post.category) ? (
            post.category.slice(0, 2).map((cat) => (
              <span key={cat} className="px-2.5 py-1 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-md text-white text-xs font-bold rounded-full border border-blue-400/50">
                {cat}
              </span>
            ))
          ) : (
            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-md text-white text-xs font-bold rounded-full border border-blue-400/50">
              {post.category}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-gray-400 text-xs mb-2.5">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <motion.button
          whileHover={{ x: 3 }}
          onClick={() => onReadMore(post)}
          className="flex items-center gap-2 text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors cursor-pointer group/btn w-fit"
        >
          Read More
          <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </motion.article>
  );
};

// Blog Preview Modal Component
const BlogPreviewModal = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) return null;

  const handleReadOriginal = () => {
    window.open(post.link, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700/50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="sticky top-4 float-right mr-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-all duration-300"
              >
                <X size={20} />
              </button>

              {/* Preview Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden -mt-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {(Array.isArray(post.category) ? post.category : [post.category]).map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-blue-400/50">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pb-6">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h2>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>

                {/* Info Text */}
                <p className="text-gray-500 text-xs mb-4">
                  This article is published on an external platform. Click below to read the full article.
                </p>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReadOriginal}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  <ExternalLink size={18} />
                  Read on Original Link
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  // Fixed: Handle category filtering with arrays
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const postCategories = Array.isArray(post.category) ? post.category : [post.category];
      const categoryMatch = selectedCategory === "All" || postCategories.includes(selectedCategory);
      const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10 p-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity:  1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400">
            Blog & Articles
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on software development, architecture, and technology
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion. div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus: bg-gray-800/70 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative" ref={dropdownRef}>
            {/* Filter Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                selectedCategory !== "All"
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 text-white'
                  : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
              }`}
            >
              <Filter size={18} className={selectedCategory !== "All" ? "text-blue-400" : "text-gray-400"} />
              <span>{selectedCategory === "All" ? "Filter by Topic" : selectedCategory}</span>
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''} ${selectedCategory !== "All" ? "text-blue-400" : "text-gray-400"}`} 
              />
              {selectedCategory !== "All" && (
                <span className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-xs rounded-full">1</span>
              )}
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50"
                >
                  {/* Dropdown Header */}
                  <div className="px-4 py-3 border-b border-gray-700/50 bg-gray-800/30">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                        <Tag size={14} className="text-blue-400" />
                        Select Topic
                      </span>
                      {selectedCategory !== "All" && (
                        <button
                          onClick={() => {
                            setSelectedCategory("All");
                            setIsFilterOpen(false);
                          }}
                          className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Clear filter
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Category List */}
                  <div className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                    {categories.map((category, index) => {
                      const isSelected = selectedCategory === category;
                      const postCount = category === "All" 
                        ? blogPosts.length 
                        : blogPosts.filter(post => {
                            const cats = Array.isArray(post.category) ? post.category : [post.category];
                            return cats.includes(category);
                          }).length;

                      return (
                        <motion.button
                          key={category}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-all duration-200 ${
                            isSelected
                              ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white'
                              : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
                              isSelected
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400'
                                : 'border-gray-600 bg-gray-800/50'
                            }`}>
                              {isSelected && <Check size={12} className="text-white" />}
                            </div>
                            <span className={isSelected ? 'font-medium' : ''}>{category}</span>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-gray-800 text-gray-500'
                          }`}>
                            {postCount}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity:  1 }}
          className="mb-8 text-center text-gray-400 text-sm"
        >
          Showing {filteredPosts.length} of {blogPosts.length} articles
        </motion.div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            >
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.title} post={post} index={index} onReadMore={handleReadMore} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">No articles found. Try a different search!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Coming Soon Message */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              More articles coming soon. Stay tuned! 🚀
            </p>
          </motion.div>
        )}
      </div>

      {/* Blog Preview Modal */}
      <BlogPreviewModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
}
