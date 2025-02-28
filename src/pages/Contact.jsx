import { Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
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
            console.log("SUCCESS!");
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <h2
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          data-aos="fade-down"
        >
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div data-aos="fade-right">
            <div className="backdrop-blur-md bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <a
                    href="mailto:piyushanand2580@gmail.com"
                    className="text-gray-300 hover:text-white transition"
                  >
                    piyushanand2580@gmail.com
                  </a>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">Bangalore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 backdrop-blur-md bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg p-8"
            data-aos="fade-left"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition transform hover:scale-105"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email_id"
                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition transform hover:scale-105"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition transform hover:scale-105"
                placeholder="Type your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            {/* Success Message */}
            {messageSent && (
              <div className="mt-4 text-center text-green-400 font-semibold">
                🎉 Your message has been sent successfully!
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin border-t-2 border-white w-5 h-5 mr-2"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
