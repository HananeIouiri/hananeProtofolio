export const pfe = {
  title: "AI Reporting Assistant",
  subtitle: "Intelligent test-campaign analytics for a CBTC rail-signalling system",
  context:
    "Final-year engineering project (PFE), built during an internship at Scalian Maroc on a mission for Alstom, on the CBTC signalling system of the Marseille metro (MARS line).",
  confidentialityNote:
    "Confidential client project — the codebase is not public. Architecture, pipeline design, and aggregate results below are drawn directly from the defended engineering report.",
  problem:
    "Validating the ATS (Automatic Train Supervision) HMI for the MARS line requires running hundreds of test scenarios through the ACTIS platform. Each run produces an Excel report, and by the time this project started, engineers were analyzing these reports by hand — no consolidated history, no automatic regression detection between deliveries, and no objective health score for a test campaign.",
  objective:
    "Design and build a fully local platform that ingests every ACTIS test report automatically, stores results in a structured warehouse, detects regressions and anomalies without manual review, and lets engineers ask questions about test results in plain French — all while keeping sensitive rail-project data entirely offline.",
  pipeline: [
    "ACTIS Excel reports",
    "Watcher (file system monitor)",
    "ETL: Extract → Normalize → Deduplicate → Load",
    "PostgreSQL data warehouse (star schema)",
    "3-layer alert engine",
    "Power BI + Next.js dashboards / RAG Copilot",
  ],
  architecture: {
    style: "Modular monolith — FastAPI backend, Next.js/React/TypeScript frontend",
    dataLayer: "PostgreSQL (star schema: fact_run, fact_step_result, fact_alert + dim_date, dim_entity, dim_scenario) + ChromaDB for RAG document embeddings",
    deployment: "Docker Compose, fully offline — no data leaves the local environment",
  },
  features: [
    {
      title: "Automated ETL pipeline",
      description:
        "A file-system watcher detects new ACTIS Excel reports, extracts and normalizes results, deduplicates conflicting entity results (NOK > NA > OK > N priority), and loads them transactionally — idempotent via SHA-256 file fingerprinting, with automatic rollback on failure.",
    },
    {
      title: "3-layer alert engine",
      description:
        "Layer 1 checks static thresholds (low OK rate, unstable entities). Layer 2 compares each run against the previous one to catch new failures and regressions. Layer 3 flags statistically abnormal test durations by combining Isolation Forest and Z-score — an alert only fires when both agree — then asks a local LLM to generate a plain-language root-cause explanation.",
    },
    {
      title: "Interactive reporting",
      description:
        "A dashboard with KPI cards, health score, and trend charts; an entity × step heatmap; per-equipment-type conformity analysis; and a Power BI report fed by dedicated SQL views for DAX-based analysis.",
    },
    {
      title: "Local RAG Copilot",
      description:
        "A conversational assistant that routes each question to a predefined SQL query catalog for verified facts, retrieves supporting documents from ChromaDB, and generates a grounded, streamed response with LLaMA 3.3 running locally through Ollama — no cloud call, ever.",
    },
    {
      title: "Companion Computer Vision / OCR micro-service",
      description:
        "A decoupled micro-service (OpenCV + Tesseract OCR) exposing color-detection, text-extraction, and template-matching endpoints, bridged into the legacy Python 2.7 ACTIS test framework without touching its qualified codebase — automating visual verification of the ATS HMI.",
    },
  ],
  technologies: [
    "Python",
    "FastAPI",
    "Next.js 14",
    "React",
    "TypeScript",
    "PostgreSQL",
    "SQLAlchemy",
    "Docker Compose",
    "Ollama",
    "LLaMA 3.3",
    "ChromaDB",
    "scikit-learn (Isolation Forest)",
    "OpenCV",
    "Tesseract OCR",
    "Power BI",
    "Watchdog",
  ],
  results: [
    { value: "73", label: "Excel reports ingested" },
    { value: "95.9%", label: "ETL success rate" },
    { value: "~184K", label: "test results loaded" },
    { value: "127", label: "alerts generated (23 critical)" },
    { value: "<35s", label: "Copilot response time" },
  ],
};
