import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    // EmailJS configuration from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate environment variables
    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS configuration missing. Please check your environment variables.");
      setStatus({
        type: "error",
        message: "Email service is not configured. Please contact the administrator.",
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Let's Connect */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Let's Get In Touch</h2>
          
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm always open to new opportunities, collaborations,
            or just a friendly chat.
          </p>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            If you have any questions, suggestions, or ideas,
            feel free to reach out — I'll try my best to respond!
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/PriyanshLathigara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyansh-lathigara-8b4743342/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>

          {/* Direct Email */}
          <p className="text-gray-400 text-sm">
            You can also directly Email me at :{" "}
            <a
              href="mailto:priyanshlathigara.work@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              priyanshlathigara.work@gmail.com
            </a>
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Regarding an opportunity"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd like to discuss a potential opportunity with you."
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
            </div>

            {/* Status Message */}
            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-900/30 border border-green-700 text-green-300"
                    : "bg-red-900/30 border border-red-700 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
