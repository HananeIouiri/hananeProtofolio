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
  {
    slug: "clearpath",
    name: "ClearPath",
    tagline: "Real-time computer vision accessibility aid for visually impaired navigation",
    problem:
      "Visually impaired pedestrians need real-time awareness of obstacles and hazards — crosswalks, potholes, fire hydrants — that standard object-detection datasets don't cover.",
    solution:
      "A YOLOv8-based real-time detection system trained on a custom-labeled dataset of 25 everyday pedestrian objects, estimating distance through pixel-width and focal-length calibration and announcing obstacles via text-to-speech.",
    features: [
      "Real-time webcam object detection with YOLOv8s",
      "Custom-labeled dataset of 25 pedestrian-relevant object classes (crosswalks, potholes, traffic lights, fire hydrants, etc.)",
      "Distance estimation via pixel-width and focal-length calibration",
      "Audio feedback through text-to-speech announcements",
      "Model trained for 100 epochs at 640×640 resolution with an 80/20 train-validation split",
    ],
    contribution: "Built collaboratively with a teammate, focused on the detection and distance-estimation pipeline.",
    tech: ["YOLOv8", "OpenCV", "Python", "Jupyter", "LabelImg"],
    github: "https://github.com/HananeIouiri/clearPath",
    category: "AI",
  },
  {
    slug: "ml-algorithms-from-scratch",
    name: "ML Algorithms From Scratch",
    tagline: "Classical regression algorithms rebuilt and studied from first principles",
    problem:
      "Using scikit-learn effectively means understanding what it abstracts away — the math and mechanics behind the models it fits in one line.",
    solution:
      "A set of notebooks implementing and comparing simple linear, multiple linear, and polynomial regression on an advertising dataset, including manual train/test splitting and feature normalization alongside scikit-learn's StandardScaler.",
    features: [
      "Simple and multiple linear regression on the Advertising dataset",
      "Polynomial regression implementation",
      "Manual train/test data splitting",
      "Feature normalization, both manual and via scikit-learn's StandardScaler",
    ],
    contribution: "Sole developer.",
    tech: ["Python", "NumPy", "Pandas", "scikit-learn", "Jupyter"],
    github: "https://github.com/HananeIouiri/ML-algorithms-from-scratch",
    category: "AI",
  },
  {
    slug: "breast-cancer-classification",
    name: "Breast Cancer Classification",
    tagline: "Exploratory ML classification notebook on the Wisconsin breast cancer dataset",
    problem:
      "Classifying tumors as malignant or benign from diagnostic measurements is a classic benchmark for validating a full supervised-learning workflow, from raw data to a trained classifier.",
    solution:
      "An end-to-end notebook covering data import, exploratory analysis, preprocessing, and classification model implementation with scikit-learn on the 569-sample Wisconsin breast cancer dataset.",
    features: [
      "Exploratory analysis of diagnosis distribution and cell-nucleus features with Seaborn and Plotly",
      "Data preprocessing pipeline",
      "Classification model implementation with scikit-learn",
    ],
    contribution: "Sole developer.",
    tech: ["Python", "Pandas", "NumPy", "Seaborn", "Plotly", "scikit-learn"],
    github: "https://github.com/HananeIouiri/Breast-Cancer-classification",
    category: "AI",
  },
  {
    slug: "quiz-game-android",
    name: "Quiz Game — Android",
    tagline: "Native Android trivia app with categories, difficulty levels, and a live leaderboard",
    problem:
      "A self-contained mobile project to practice native Android development end-to-end — UI, user accounts, and a cloud backend — outside the data/web stack.",
    solution:
      "A Java Android app with category and difficulty selection feeding a unified quiz engine, backed by Firebase for user registration, authentication, and a persistent leaderboard.",
    features: [
      "Category and difficulty selection screens",
      "Unified quiz engine handling questions across categories",
      "User registration and progress tracking",
      "Firebase Realtime Database leaderboard with Firebase Authentication",
    ],
    contribution: "Sole developer.",
    tech: ["Java", "Android SDK", "Firebase Realtime Database", "Firebase Auth", "Glide"],
    github: "https://github.com/HananeIouiri/Quiz_Game_Android",
    category: "Software Engineering",
  },
];
