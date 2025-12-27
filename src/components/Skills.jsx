import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiMongodb,
  SiGit,
  SiPostman,
  SiTypescript,
  SiMysql
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "C++", icon: SiCplusplus },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "React", icon: SiReact },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    { name: "Matplotlib", icon: SiPlotly },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: SiGit },
    { name: "Postman", icon: SiPostman }
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="bg-gray-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        {/* Sliding Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide gap-4">
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors flex items-center gap-3"
                >
                  <IconComponent className="text-2xl flex-shrink-0" />
                  <span className="text-white font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
