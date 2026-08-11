export interface Project {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  contribution: string;
  tech: string[];
  github?: string;
  category: "Data Engineering" | "AI" | "Software Engineering";
}

export const projects: Project[] = [
  {
    slug: "smart-city-traffic",
    name: "Smart City Traffic Analytics",
    tagline: "End-to-end Big Data pipeline for real-time urban mobility monitoring",
    problem:
      "Urban traffic operators need real-time visibility into congestion and vehicle flow, but raw sensor streams have no path from ingestion to a usable dashboard.",
    solution:
      "Built a streaming pipeline that ingests simulated traffic-sensor data through Kafka, lands it in HDFS, and processes it with Spark before serving aggregated metrics through PostgreSQL, Grafana, and Airflow-orchestrated workflows.",
    features: [
      "Kafka-based real-time ingestion of traffic sensor events",
      "Spark jobs computing average traffic per zone, average speed per segment, and congestion rate",
      "HDFS data lake with Parquet storage for processed data",
      "Airflow DAGs orchestrating the end-to-end pipeline",
      "Grafana dashboards for live congestion and mobility monitoring",
      "Fully containerized with Docker",
    ],
    contribution: "Sole developer — designed and implemented the full pipeline solo.",
    tech: ["Python", "Apache Kafka", "Apache Spark", "HDFS", "PostgreSQL", "Grafana", "Apache Airflow", "Docker"],
    github: "https://github.com/HananeIouiri/Smart-City-Bigdata-project",
    category: "Data Engineering",
  },
  {
    slug: "ecommerce-log-analytics",
    name: "E-commerce Log Analytics",
    tagline: "Distributed processing of e-commerce browsing logs into business dashboards",
    problem:
      "Large volumes of raw e-commerce session logs contained user behavior and product-demand signals, but no structured way to query or visualize them existed.",
    solution:
      "Stored logs in HDFS, ran parallel MapReduce jobs in Java to transform and aggregate them, exposed the results to SQL-based analysis via Apache Hive, and built interactive dashboards in Apache Superset.",
    features: [
      "HDFS-based distributed storage for raw session logs",
      "Custom Java MapReduce jobs for parallel transformation",
      "Hive tables for SQL-based analytical queries",
      "Apache Superset dashboards on user activity and product demand",
    ],
    contribution: "Sole developer — designed the pipeline and wrote the accompanying technical report.",
    tech: ["Java", "Hadoop", "HDFS", "MapReduce", "Apache Hive", "Apache Superset", "ETL"],
    github: "https://github.com/HananeIouiri/Big-Data-Pipeline-E-commerce-Log-Analysis",
    category: "Data Engineering",
  },
  {
    slug: "nutribot",
    name: "NutriBot",
    tagline: "Serverless AI nutrition chatbot built on AWS",
    problem:
      "People tracking their diet need fast, personalized feedback on what they eat, without a heavyweight app or manual calorie lookup.",
    solution:
      "A serverless nutrition assistant that logs meals, computes TDEE-based calorie tracking, and uses the Gemini API to analyze food and generate personalized recommendations through a conversational interface.",
    features: [
      "Meal logging and calorie/TDEE tracking dashboard",
      "Gemini API integration for food analysis and recommendations",
      "AWS Cognito authentication with JWT-secured API Gateway",
      "Serverless backend on AWS Lambda + DynamoDB",
      "Responsive Next.js frontend with Recharts visualizations",
    ],
    contribution: "Designed and developed as part of an internship at Alanyo IT.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Cognito", "Gemini API", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/HananeIouiri/NutriBot",
    category: "AI",
  },
  {
    slug: "lambda-architecture",
    name: "Lambda Architecture with Spark & Kafka",
    tagline: "Reconciling batch and real-time processing in a single serving layer",
    problem:
      "Analytics systems often need both deep historical accuracy and low-latency freshness — two requirements that batch-only or streaming-only architectures can't satisfy together.",
    solution:
      "Implemented a simplified Lambda Architecture with an independent batch layer (Spark over historical data) and speed layer (Kafka + Spark Structured Streaming), merged by a serving layer that reconciles both views.",
    features: [
      "Batch layer processing historical transaction data with Spark",
      "Speed layer consuming Kafka topics via Spark Structured Streaming",
      "Serving layer reconciling batch and real-time outputs",
      "Fully containerized with Docker Compose",
    ],
    contribution: "Sole developer — built as a deep-dive into Big Data architecture patterns.",
    tech: ["Apache Spark", "Apache Kafka", "Python", "Docker Compose"],
    github: "https://github.com/HananeIouiri/Lambda-Architecture-with-Spark-Kafka",
    category: "Data Engineering",
  },
  {
    slug: "e-banking-backend",
    name: "E-Banking Backend",
    tagline: "Secure Spring Boot REST API for banking clients and accounts",
    problem:
      "A banking backend needs strict access control, auditable transactions, and a data model that can evolve without breaking existing clients.",
    solution:
      "A Spring Boot REST API with JWT authentication and role-based access control (USER/ADMIN), covering customer management and account operations — balance tracking, transaction history, transfers — with the JPA inheritance strategy evolved through three iterations for cleaner data modeling.",
    features: [
      "JWT authentication with admin/user role separation",
      "Customer and account management endpoints with pagination",
      "Debit, credit, and transfer operations with transaction history",
      "CORS-configured API ready for a separate frontend",
    ],
    contribution: "Sole developer.",
    tech: ["Java 17", "Spring Boot 3", "Spring Security", "JWT", "Maven", "MySQL"],
    github: "https://github.com/HananeIouiri/Digital-Banking-App-Backend",
    category: "Software Engineering",
  },
];
