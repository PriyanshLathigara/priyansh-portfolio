export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Priyansh Lathigara</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Software Developer | Backend Engineer | Full-Stack Developer
          </p>

          <p className="text-gray-400 mb-10">
          Turning complex problems into simple, reliable software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-600 transition text-center"
            >
              Contact
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-600 rounded-md hover:border-gray-400 transition text-center"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 p-1">
                <img
                  src="/Profile.jpg"
                  alt="Priyansh Lathigara"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
