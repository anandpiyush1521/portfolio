import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ExternalLink, Search, X } from "lucide-react";
import glassImg from "../assets/glass.png"
import polarityImg from "../assets/polarity.png"

const blogPosts = [
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

const BlogCard = ({ post, index }) => {
  const handleReadMore = () => {
    window.open(post.link, '_blank');
  };

  // Fixed: Handle both string and array categories
  const displayCategory = Array.isArray(post.category) ? post.category[0] : post.category;

  return (
    <motion. article
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
          src={post. image}
          alt={post. title}
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
          onClick={handleReadMore}
          className="flex items-center gap-2 text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors cursor-pointer group/btn w-fit"
        >
          Read More
          <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </motion.article>
  );
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fixed: Handle category filtering with arrays
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const postCategories = Array.isArray(post.category) ? post.category : [post.category];
      const categoryMatch = selectedCategory === "All" || postCategories.includes(selectedCategory);
      const searchMatch = post.title.toLowerCase().includes(searchQuery. toLowerCase()) ||
                         post. excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y:  10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-400/50 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover: border-gray-600 hover: bg-gray-800'
                }`}
              >
                {category}
              </motion. button>
            ))}
          </div>
        </motion. div>

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
                <BlogCard key={post.title} post={post} index={index} />
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
    </div>
  );
}