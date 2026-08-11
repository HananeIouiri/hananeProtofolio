import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { BASE_PATH } from "@/lib/base-path";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://hananeiouiri.github.io/hananeProtofolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hanane Iouiri — Data, AI & Business Intelligence Engineer",
    template: "%s — Hanane Iouiri",
  },
  description:
    "Hanane Iouiri is a Data, AI & Business Intelligence Engineer specializing in ETL pipelines, data warehousing, Power BI reporting, and local AI/RAG systems for decision support. Big Data & Cloud Computing engineering student at ENSET Mohammedia.",
  keywords: [
    "Hanane Iouiri",
    "Data Analyst",
    "BI Analyst",
    "Data Engineer",
    "Business Intelligence",
    "Power BI",
    "ETL",
    "Data Warehouse",
    "Big Data",
    "Cloud Computing",
    "RAG",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Hanane Iouiri" }],
  creator: "Hanane Iouiri",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hanane Iouiri — Data, AI & Business Intelligence Engineer",
    description:
      "Data, AI & Business Intelligence Engineer specializing in ETL pipelines, data warehousing, Power BI reporting, and local AI/RAG systems for decision support.",
    siteName: "Hanane Iouiri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanane Iouiri — Data, AI & Business Intelligence Engineer",
    description:
      "Data, AI & Business Intelligence Engineer specializing in ETL pipelines, data warehousing, Power BI reporting, and local AI/RAG systems for decision support.",
  },
  icons: {
    icon: `${BASE_PATH}/favicon.svg`,
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
