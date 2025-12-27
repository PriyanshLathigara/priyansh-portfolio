import { useState, useEffect } from "react";

export default function HowIWork() {
  const steps = [
    {
      id: 1,
      title: "Step 01 — Understand the Problem",
      description:
        "I analyze requirements, clarify goals, and break the problem into smaller, well-defined tasks before writing any code.",
      microline: "Requirements analysis · Scope definition · Edge cases",
    },
    {
      id: 2,
      title: "Step 02 — Design the Solution",
      description:
        "I design clean system architecture, RESTful APIs, and database schemas with scalability, security, and maintainability in mind.",
      microline: "System design · REST APIs · Database schema",
    },
    {
      id: 3,
      title: "Step 03 — Build & Implement",
      description:
        "I develop features using modular code, implement authentication and authorization, optimize database queries, and handle edge cases.",
      microline: "JWT auth · PostgreSQL & MongoDB · Optimized queries",
    },
    {
      id: 4,
      title: "Step 04 — Testing, Iteration & Collaboration",
      description:
        "I debug, refine, and improve the application while collaborating through Git workflows and iterative Agile development.",
      microline: "Debugging · Git workflows · Agile iterations",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Change step every 4 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <section id="how-i-work" className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <button className="px-3 py-1.5 bg-white rounded-lg text-gray-900 text-sm font-medium mb-4">
            How I work
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            How I Build Software
          </h2>
          <p className="text-gray-600 text-base">
          A structured approach I follow to build reliable, scalable, and production-ready applications.
          </p>
        </div>

        {/* Flashcard */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-6 min-h-[220px] flex flex-col justify-center relative overflow-hidden">
          <div
            key={currentStep}
            className="animate-fade-in"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-3">
              {steps[currentStep].description}
            </p>
            <p className="text-gray-500 text-sm">
              {steps[currentStep].microline}
            </p>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex gap-2 justify-center flex-wrap">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(index)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentStep === index
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              Step {String(step.id).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

