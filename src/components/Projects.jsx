import { HiCode, HiEye } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Expensify",
      description: "Full-stack expense management app with JWT auth and dashboards.",
      image: "/project1.jpg", // Replace with your project image
      github: "https://github.com/KkavyDave/IT314_G26_Expensify",
      live: null
    },
    {
      id: 2,
      title: "LinkSlice",
      description: "URL shortener with analytics, authentication, and MongoDB backend.",
      image: "/project2.jpg", // Replace with your project image
      github: "https://github.com/PriyanshLathigara/URL-Shortener",
      live: null
    },
    {
      id: 3,
      title: "StreamWave",
      description: "Database design project with BCNF normalization and SQL optimization.",
      image: "/project3.jpg", // Replace with your project image
      github: "https://github.com/PriyanshLathigara/Projects/tree/main/DBMS_Project",
      live: null // No live demo available
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gray-800 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Placeholder if image not found */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 hidden items-center justify-center">
                <span className="text-gray-500 text-sm">Project Image</span>
              </div>

              {/* Hover Overlay - Slides in from bottom */}
              <div className="absolute inset-0 bg-black/80 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors z-10"
                    title="View Code"
                  >
                    <HiCode className="text-2xl" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors z-10"
                    title="View Live"
                  >
                    <HiEye className="text-2xl" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
