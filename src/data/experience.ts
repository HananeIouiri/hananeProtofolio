export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  client?: string;
  summary: string;
  businessSide?: string[];
  technicalSide?: string[];
  responsibilities?: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Scalian Maroc",
    role: "Business Analyst / Data Analyst — Final-Year Internship (PFE)",
    location: "Casablanca, Morocco",
    dates: "Feb 2026 – Aug 2026",
    client: "Alstom — CBTC Metro of Marseille (MARS line)",
    summary:
      "Embedded in Alstom's validation & verification team for the MARS CBTC signalling project, on a mission to fix how hundreds of ACTIS test-campaign reports were being analyzed by hand, then designed and built AI Reporting Assistant end to end.",
    businessSide: [
      "Analyzed the existing ACTIS test process and gathered requirements for validating and exploiting IHM ATS test campaigns",
      "Formalized functional and non-functional requirements: actors, use cases, and business processes",
      "Translated operational needs into a reporting and decision-support solution for the test engineering team",
      "Defined KPIs and alert thresholds in collaboration with test engineers and encadrants",
      "Ran functional and integration testing (UAT) on delivered features",
      "Wrote and maintained functional and technical documentation",
    ],
    technicalSide: [
      "Designed a PostgreSQL data warehouse (star schema) and an idempotent, transactional ETL pipeline to centralize test results",
      "Built a 3-layer alert engine (static thresholds, inter-run regression, ML-based duration anomalies via Isolation Forest + Z-score)",
      "Developed Power BI dashboards, an entity × step heatmap, and KPI reporting on top of dedicated SQL views",
      "Built a local RAG conversational Copilot (LLaMA 3.3 via Ollama + ChromaDB) to query test results in natural language",
      "Contributed a Computer Vision / OCR micro-service (OpenCV, Tesseract) to automate visual verification of the ATS HMI",
      "Deployed the full stack with Docker Compose; followed weekly Scrum sprints with the encadrants",
    ],
    tech: [
      "Python",
      "SQL",
      "PostgreSQL",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Power BI",
      "RAG",
      "LLaMA 3.3",
      "Ollama",
      "ChromaDB",
      "scikit-learn",
      "OpenCV",
      "Tesseract OCR",
      "Docker",
      "Scrum",
    ],
  },
  {
    company: "Alanyo IT",
    role: "Software Engineer — Internship",
    location: "Sidi Kacem, Morocco",
    dates: "Jul 2025 – Aug 2025",
    summary:
      "Designed and developed NutriBot, a serverless AI-powered nutrition chatbot on AWS, integrating the Gemini API for food analysis and personalized recommendations behind a Next.js frontend.",
    responsibilities: [
      "Designed the serverless backend architecture (AWS Lambda, API Gateway, DynamoDB, Cognito)",
      "Integrated the Gemini API for meal analysis and personalized nutrition recommendations",
      "Built the Next.js/React frontend with a responsive dashboard and chatbot interface",
    ],
    tech: ["AWS", "Cloud Security", "Next.js", "TypeScript", "Node.js", "Gemini API"],
  },
  {
    company: "Soorcin",
    role: "Full-Stack Developer — Internship",
    location: "Casablanca, Morocco",
    dates: "Jul 2024 – Aug 2024",
    summary:
      "Developed an e-commerce website supporting user authentication, product management, and online order processing.",
    responsibilities: [
      "Built authentication, product catalog, and order management features",
      "Implemented the full stack from database schema to UI",
    ],
    tech: ["PHP", "SQL", "JavaScript", "HTML/CSS"],
  },
];
