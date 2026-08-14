export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  client?: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Scalian Morocco",
    role: "Data Engineer / Data Analyst — Final-Year Internship",
    location: "Casablanca, Morocco",
    dates: "Feb 2026 – Aug 2026",
    client: "Alstom",
    summary:
      "Interned with Alstom's test engineering team, analyzing how software test campaigns were reviewed and reported, then designing and building an end-to-end reporting platform to automate that process.",
    responsibilities: [
      "Analyzed business and technical requirements for improving how test campaigns were validated and reported",
      "Designed a data warehouse and ETL pipeline to centralize and structure test data",
      "Built Power BI dashboards and KPIs to monitor campaign performance and support decisions",
      "Implemented an alert engine to flag anomalies and performance issues automatically",
      "Developed a RAG-based conversational assistant for natural-language access to test results",
      "Contributed to automating interface test verification with computer vision and OCR",
      "Prepared and ran integration and validation tests within an Agile/Scrum process",
      "Created and maintained functional and technical documentation",
    ],
    tech: ["SQL", "PostgreSQL", "Python", "Power BI", "ETL", "RAG", "LLM", "FastAPI", "OpenCV", "Tesseract OCR", "Docker", "Git", "Scrum"],
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
