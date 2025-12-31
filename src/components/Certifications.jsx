export default function Certifications() {
  const certifications = [
    {
      id: 1,
      name: "Postman API Fundamentals – Student Expert",
      relevance: "Hands-on experience with REST APIs, authentication, and automated testing",
      credentialUrl: "https://badges.parchment.com/public/assertions/rbo4qkoDQA-elZZPpGEV5Q?identity__email=phlathigara85%40gmail.com", // Replace with actual credential verification link
    },
    {
      id: 2,
      name: "Google Cloud – Prompt Design in Vertex AI",
      relevance: "Applied prompt engineering concepts for LLMs and generative AI workflows",
      credentialUrl: "https://www.skills.google/public_profiles/7e7ec99e-01b3-4467-bda5-cc700a942061/badges/21231176", // Replace with actual credential verification link
    },
  ];

  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6">Certifications & Badges</h2>
      
      <div className="space-y-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">
              {cert.name}
            </h3>
            <p className="text-gray-400 mb-3">
              {cert.relevance}
            </p>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
            >
              View Credential
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

