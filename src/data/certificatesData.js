/**
 * Certificate Configuration
 * 
 * Configured with real certificate photographs located in:
 * public/assets/certificates/
 * 
 * 1. Typewriting — Junior Grade, First Class with Distinction
 * 2. SwordNex Technologies — Basic to Advanced Computer Applications
 * 3. Vaagai Infotech — Internship Completion
 */

export const certificatesData = [
  {
    id: "typewriting-junior",
    title: "Typewriting — Junior Grade",
    subtitle: "First Class with Distinction",
    issuer: "Government of Tamil Nadu, Department of Technical Education",
    date: "August 2024",
    regNo: "795173",
    certificateNo: "GTE 1636439",
    category: "Technical Skills & Typing Accuracy",
    description:
      "Junior Grade in Typewriting English at 30 Words per Minute, passed with First Class with Distinction in the Government Technical Examinations of Commerce Subjects.",
    filePath: "/assets/certificates/typewriting-junior-distinction.jpeg",
    isAvailable: true,
    fileType: "image",
    skillsCovered: ["30 WPM Speed", "First Class with Distinction", "Keyboard Ergonomics", "Document Accuracy"]
  },
  {
    id: "swordnex-computer-applications",
    title: "Basic to Advanced Computer Applications",
    subtitle: "Certificate of Completion",
    issuer: "SwordNex Technologies Pvt. Ltd.",
    date: "08/12/2025 – 04/02/2026",
    regNo: null,
    certificateNo: "SNX-BAC-2026-002",
    category: "Computer Applications & Software Skills",
    description:
      "Certificate of Completion for successfully finishing the comprehensive course covering Basic to Advanced Computer Applications at SwordNex Technologies Pvt Ltd.",
    filePath: "/assets/certificates/swordnex-computer-applications.jpeg",
    isAvailable: true,
    fileType: "image",
    skillsCovered: ["Computer Applications", "Software Tools", "Productivity Applications", "Technical Problem Solving"]
  },
  {
    id: "vaagai-internship-completion",
    title: "Web Development Internship Completion",
    subtitle: "Certificate of Completion (Grade A)",
    issuer: "Vaagai Infotech",
    date: "May 11, 2025 – June 13, 2025",
    regNo: "U23CS2E086",
    certificateNo: null,
    category: "Frontend Web Development",
    description:
      "Successfully completed internship at Vaagai Computer Training Center, demonstrating exceptional skills in web development, creating responsive webpages, and obtaining Grade A.",
    filePath: "/assets/certificates/vaagai-internship-completion.jpeg",
    isAvailable: true,
    fileType: "image",
    skillsCovered: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Grade A Performance"]
  }
];

// Additional pending certifications that can be displayed if files are provided
export const pendingCertificatesData = [
  {
    id: "ai-engineering",
    title: "AI Engineering Certification",
    category: "Artificial Intelligence & Machine Learning",
    description:
      "Certification in Machine Learning fundamentals, data preprocessing, and model development.",
    filePath: null,
    isAvailable: false,
    fileType: null,
    skillsCovered: ["Machine Learning", "Python", "Model Training", "Data Preprocessing"]
  },
  {
    id: "web-development",
    title: "Web Development Certification",
    category: "Frontend Development",
    description:
      "Certification in modern web technologies, responsive styling, and web standards.",
    filePath: null,
    isAvailable: false,
    fileType: null,
    skillsCovered: ["HTML5", "CSS3", "Responsive UI", "Web Standards"]
  },
  {
    id: "microsoft-excel",
    title: "Microsoft Excel Certification",
    category: "Data Analysis & Productivity",
    description:
      "Certification validating proficiency in tabular data management, formulas, and reporting.",
    filePath: null,
    isAvailable: false,
    fileType: null,
    skillsCovered: ["Data Analysis", "Formulas", "Worksheet Management", "Reporting"]
  }
];
