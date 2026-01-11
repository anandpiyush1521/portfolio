import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm("service_bda1yud", "template_ix24cul", form.current, {
          publicKey: "zv0PwAA6qtkK_OFba",
        })
        .then(
          () => {
            setMessageSent(true);
            setLoading(false);
            form.current.reset();
            setTimeout(() => setMessageSent(false), 5000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setLoading(false);
          }
        );
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "piyushanand2580@gmail.com",
      href: "mailto:piyushanand2580@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8340774684",
      href: "tel:+918340774684",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/anandpiyush1521",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/whopiyushanand",
      color: "hover:text-blue-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-25"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-25"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full filter blur-[140px] opacity-15"
        ></motion.div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-900/30 border border-gray-700/50 rounded-2xl p-6 group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} p-3 mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.label}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm break-words">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <motion.div
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="from_name"
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
                  placeholder="Your Name"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <motion.input
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email_id"
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:border-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></motion.textarea>
              </motion.div>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={
                  messageSent
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -10 }
                }
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl"
              >
                <p className="text-green-300 font-semibold text-center flex items-center justify-center gap-2">
                  <span className="text-xl">✅</span> Message sent successfully!
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    ></motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ExternalLink className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Box */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Reach Out?
              </h3>
              <ul className="space-y-4">
                {[
                  "Collaborative Project Development",
                  "Technical Consulting & Architecture",
                  "Open Source Contributions",
                  "Mentoring & Knowledge Sharing",
                  "Career & Networking Opportunities",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-800/30 via-gray-800/20 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/40 border border-gray-800/50 group hover:border-blue-500/50 transition-all duration-300"
                    >
                      <Icon className={`w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors`} />
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {link.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-700/30">
                <p className="text-sm text-gray-400">
                  💡 <span className="text-gray-300 font-medium">Typically respond within 24 hours</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
