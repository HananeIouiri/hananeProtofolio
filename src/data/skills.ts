export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data & Analytics",
    description: "Turning raw tables into answers stakeholders can act on.",
    skills: [
      "SQL",
      "Statistical Analysis",
      "Data Visualization",
      "KPI Definition & Monitoring",
      "Star Schema Modeling",
      "Data Quality",
      "Advanced Excel",
    ],
  },
  {
    title: "Business Intelligence",
    description: "Dashboards and reports built for decision-makers, not just data teams.",
    skills: ["Power BI (DAX, Power Query/M)", "Tableau", "Grafana", "Apache Superset", "Reporting & Decision Support"],
  },
  {
    title: "Data Engineering",
    description: "The pipelines and warehouses that make analytics reliable.",
    skills: ["Python", "ETL Pipelines", "Data Warehouse Design", "PostgreSQL", "MySQL", "NoSQL"],
  },
  {
    title: "Big Data",
    description: "Distributed processing for data that doesn't fit on one machine.",
    skills: ["Apache Kafka", "Apache Spark", "Hadoop / HDFS / MapReduce", "Apache Hive", "Apache Airflow"],
  },
  {
    title: "AI & Machine Learning",
    description: "From classical ML to local LLM systems that respect data confidentiality.",
    skills: [
      "Computer Vision (OpenCV)",
      "OCR (Tesseract)",
      "NLP",
      "Model Training & Evaluation",
      "TensorFlow",
      "scikit-learn",
      "RAG Architectures",
      "Local LLM Integration (Ollama)",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Shipping and running what gets built.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Git / GitHub", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Functional Analysis",
    description: "The business-facing half of every project I ship.",
    skills: [
      "Requirements Gathering",
      "Functional Specifications",
      "User Stories",
      "Business Workshop Facilitation",
      "UAT / Functional Testing",
      "Agile / Scrum",
    ],
  },
  {
    title: "Software Development",
    description: "Enough engineering depth to build the systems above, not just design them.",
    skills: ["Python", "SQL", "Java", "JavaScript / TypeScript", "FastAPI", "Next.js / React", "C / C++"],
  },
];
