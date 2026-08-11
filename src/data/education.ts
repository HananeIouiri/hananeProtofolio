export interface EducationItem {
  institution: string;
  degree: string;
  program?: string;
  dates: string;
  location: string;
  note?: string;
}

export const education: EducationItem[] = [
  {
    institution: "ENSET Mohammedia — École Normale Supérieure de l'Enseignement Technique",
    degree: "Engineering Degree in Big Data & Cloud Computing",
    program: "Ingénierie Informatique — Big Data et Cloud Computing (II-BDCC)",
    dates: "2023 – 2026",
    location: "Mohammedia, Morocco",
  },
  {
    institution: "CPGE ERRAZI",
    degree: "Classes Préparatoires — Physics, Chemistry & Engineering Sciences",
    dates: "2021 – 2023",
    location: "El Jadida, Morocco",
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Data Analytics Essentials", issuer: "Cisco" },
  { name: "Scrum Fundamentals", issuer: "SCRUMstudy" },
  { name: "Machine Learning Specialization", issuer: "Coursera" },
  { name: "Cyber Threat Management", issuer: "Cisco" },
  { name: "Introduction to the Threat Landscape 3.0", issuer: "Fortinet" },
  { name: "Networking Essentials", issuer: "Cisco" },
  { name: "Introduction to IoT and Digital Transformation", issuer: "Cisco" },
  { name: "RGPD-CNIL", issuer: "CNIL" },
];
