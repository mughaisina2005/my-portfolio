export const projectsData = [
  {
    id: "laptop-price-prediction",
    title: "Laptop Price Prediction",
    slug: "laptop-price-prediction",
    subtitle: "Machine Learning Regression Model",
    shortDescription:
      "A machine learning project that estimates laptop prices using hardware specifications and product features.",
    image: "/assets/projects/laptop-price-prediction.png",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    // Real URLs are optional: only rendered if non-empty string and not null
    githubUrl: null, // Set to repo URL e.g. "https://github.com/mughaisina2005/laptop-price-prediction" when published
    liveDemoUrl: null, // Set to live URL when deployed
    badge: "Machine Learning",
    status: "Completed Project",
    overview:
      "The Laptop Price Prediction project is a supervised regression system developed to predict market prices for laptops using key hardware metrics and manufacturer attributes. With laptops varying across brands, processor generations, RAM capacities, storage architectures, and display panels, consumers and sellers often struggle to determine fair pricing. This model leverages structured data preprocessing and machine learning regression algorithms to generate accurate price estimates.",
    problemStatement:
      "Laptops feature hundreds of configuration combinations, making manual price valuation inconsistent and time-consuming. Buyers frequently find it difficult to assess whether a given price tag is justified, while retailers need systematic valuation benchmarks. The challenge was to clean disparate laptop specification data, extract numerical indicators from textual attributes, and build a regression model that accurately captures nonlinear price dynamics across brand tiers and component specifications.",
    features: [
      {
        title: "Hardware Specification Parsing",
        status: "Implemented",
        description:
          "Extracts and standardizes complex specs including CPU clock speeds, GPU tiers, RAM capacity, and storage types (SSD vs HDD) into structured numeric and encoded vectors."
      },
      {
        title: "Automated Data Preprocessing Pipeline",
        status: "Implemented",
        description:
          "Handles missing values, categorical encoding with label and one-hot encoders, outlier mitigation, and feature scaling for robust model convergence."
      },
      {
        title: "Multi-Model Regression Analysis",
        status: "Implemented",
        description:
          "Trained and evaluated regression algorithms (including Linear Regression, Decision Trees, and Random Forest Regressors) to discover optimal predictive fit."
      },
      {
        title: "Model Performance Evaluation",
        status: "Implemented",
        description:
          "Rigorous validation utilizing R² (Coefficient of Determination), Mean Absolute Error (MAE), and Root Mean Squared Error (RMSE) to gauge predictive reliability."
      },
      {
        title: "Specification-Driven Estimation",
        status: "Implemented",
        description:
          "Enables instant price estimation as users specify brand, screen size, CPU, RAM, GPU, operating system, and weight."
      }
    ],
    technologiesUsed: [
      { name: "Python", category: "Core Language", detail: "Primary language for data manipulation, modeling, and scripting" },
      { name: "Pandas", category: "Data Manipulation", detail: "DataFrame structures, cleaning, and tabular wrangling" },
      { name: "NumPy", category: "Numerical Computing", detail: "Vectorized array calculations and matrix operations" },
      { name: "Scikit-learn", category: "Machine Learning", detail: "Preprocessing transformers, regression estimators, cross-validation, and metrics" },
      { name: "Matplotlib & Seaborn", category: "Visualization", detail: "Exploratory data analysis, correlation heatmaps, and residual plots" }
    ],
    howItWorks: [
      {
        step: "1. Data Acquisition & Cleaning",
        detail: "Ingested raw laptop dataset with mixed text attributes; removed redundant columns, handled nulls, and normalized brand nomenclatures."
      },
      {
        step: "2. Feature Engineering & Extraction",
        detail: "Engineered discrete features: parsed RAM in GB, separated hybrid storage into SSD/HDD components, and categorized CPU/GPU tiers."
      },
      {
        step: "3. Exploratory Data Analysis (EDA)",
        detail: "Analyzed price distributions, identified skewed variables, applied log transformations, and plotted correlation matrices."
      },
      {
        step: "4. Model Training & Hyperparameter Tuning",
        detail: "Split data into training and test sets; fit baseline regressors and ensemble algorithms to minimize error on unseen test splits."
      },
      {
        step: "5. Prediction & Evaluation",
        detail: "Evaluated final model performance using MAE and R² scores, delivering reliable price approximations across brand segments."
      }
    ],
    whatILearned: [
      "Translating raw, unstructured technical product specs into clean, high-signal numerical representations.",
      "The practical impact of categorical encoding schemes (Label Encoding vs One-Hot Encoding) on tree-based vs linear models.",
      "Diagnosing overfitting and underfitting by analyzing training vs test residuals.",
      "Evaluating regression metrics beyond just R², focusing on Mean Absolute Error to quantify direct financial variances."
    ]
  },
  {
    id: "ai-syllabus-agent",
    title: "AI Syllabus Agent",
    slug: "ai-syllabus-agent",
    subtitle: "Intelligent Academic & Interview Preparation Assistant",
    shortDescription:
      "An AI-powered learning assistant concept designed to help students work with syllabus content and prepare for interviews.",
    image: "/assets/projects/ai-syllabus-agent.png",
    technologies: ["Python", "Flask", "AI Integration"],
    // Real URLs are optional: only rendered if non-empty string and not null
    githubUrl: null, // Set to repo URL e.g. "https://github.com/mughaisina2005/ai-syllabus-agent" when published
    liveDemoUrl: null, // Set to live URL when deployed
    badge: "AI Application",
    status: "Active Development",
    developmentStatus: {
      currentPhase: "Architecture & Concept Development",
      summary:
        "The project architecture and core intelligence pipeline are being engineered with modular services for curriculum synthesis, technical question generation, and revision scheduling."
    },
    overview:
      "The AI Syllabus Agent is an intelligent learning assistant concept conceptualized to bridge the gap between heavy university curriculum documents and high-impact career readiness. College students often encounter dense syllabus documents without clear roadmaps on how academic subjects map to technical interview expectations. This system empowers learners by parsing university syllabus units into concise study notes, focused revision plans, and targeted technical interview questions.",
    problemStatement:
      "Academic syllabi are traditionally static PDFs containing long topic lists without guidance on core concepts, practical exercises, or interview relevance. Students frequently scramble across disparate search engines to find revision summaries and practice questions. The AI Syllabus Agent solves this by taking raw syllabus materials and algorithmically extracting key modules to generate structured learning aids and technical assessment drills.",
    features: [
      {
        title: "Syllabus Upload",
        status: "Planned",
        description:
          "Allows students to upload course syllabi in PDF or document format to extract structured subject units and learning objectives."
      },
      {
        title: "Notes Generation",
        status: "Planned",
        description:
          "Generates clean, conceptual summaries and core bullet points for syllabus topics to facilitate rapid understanding."
      },
      {
        title: "Interview Preparation",
        status: "Planned",
        description:
          "Synthesizes academic subjects into job-relevant technical interview topics with real-world industry context."
      },
      {
        title: "Technical Questions",
        status: "Planned",
        description:
          "Constructs targeted conceptual questions and detailed explanatory answers aligned with specific subject units."
      },
      {
        title: "Coding Questions",
        status: "Planned",
        description:
          "Curates algorithmic challenges and Python coding drills tailored to syllabus computer science modules."
      },
      {
        title: "Revision Planning",
        status: "Planned",
        description:
          "Generates structured revision milestones and prioritized checklists based on examination or interview timelines."
      }
    ],
    technologiesUsed: [
      { name: "Python", category: "Core Language", detail: "Powers data processing, prompt pipelines, and agent orchestration" },
      { name: "Flask", category: "Backend Framework", detail: "Provides lightweight REST API endpoints for agent requests and responses" },
      { name: "AI Integration", category: "Intelligent Processing", detail: "Leverages natural language models to summarize topics and formulate assessment questions" },
      { name: "HTML / CSS / JS", category: "Frontend Interface", detail: "Clean, accessible user interface for students to interact with the learning assistant" }
    ],
    howItWorks: [
      {
        step: "1. Syllabus Ingestion",
        detail: "The student inputs syllabus topics or course units into the assistant interface."
      },
      {
        step: "2. Prompt & Context Structuring",
        detail: "The Python backend parses curriculum themes and formats structured prompts specifying pedagogical constraints."
      },
      {
        step: "3. Knowledge Synthesis",
        detail: "The integrated AI service processes the context to distill key formulas, fundamental concepts, and essential definitions."
      },
      {
        step: "4. Interview & Question Generation",
        detail: "Constructs tailored technical interview questions paired with comprehensive benchmark answers."
      },
      {
        step: "5. Formatted Output Delivery",
        detail: "Renders organized, easily readable notes and study checklists directly on the responsive web view."
      }
    ],
    whatILearned: [
      "Structuring prompt workflows and context boundaries to ensure accurate and curriculum-grounded AI responses.",
      "Architecting clean Flask REST endpoints to coordinate frontend requests with backend AI model integrations.",
      "Distinguishing user-facing production readiness from prototype stage features through modular system design.",
      "The value of user-centric AI applications in enhancing student productivity and interview confidence."
    ]
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    slug: "customer-churn-prediction",
    subtitle: "Machine Learning Classification & Retention Analysis",
    shortDescription:
      "A machine learning project that analyzes customer data to predict whether customers are likely to continue using a service or leave.",
    image: "/assets/projects/customer-churn-prediction.png",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    githubUrl: null,
    liveDemoUrl: null,
    badge: "Machine Learning",
    status: "Completed Project",
    overview:
      "The Customer Churn Prediction project is a machine learning classification system developed to analyze customer usage metrics, subscription tiers, and engagement patterns to predict whether customers are likely to continue using a service or leave. By identifying at-risk accounts before termination, this predictive model empowers organizations to optimize proactive retention workflows with data-driven confidence.",
    problemStatement:
      "Customer attrition directly impacts business longevity and revenue stability, with customer acquisition often demanding far greater resources than customer retention. Service providers need automated mechanisms to detect early behavioral warnings of churn buried within diverse account attributes. The challenge was to clean customer usage datasets, engineer high-signal predictive features, and train a supervised classification model capable of distinguishing between churning and loyal accounts with reliable precision.",
    features: [
      {
        title: "Customer Behavioral Profiling",
        status: "Implemented",
        description:
          "Examines contract duration, service usage intensity, payment modes, and monthly charges to uncover key factors influencing customer attrition."
      },
      {
        title: "Data Cleaning & Preprocessing Pipeline",
        status: "Implemented",
        description:
          "Handles missing values, encodes categorical attributes using label and one-hot encoding, and normalizes numeric ranges for stable training convergence."
      },
      {
        title: "Supervised Classification Modeling",
        status: "Implemented",
        description:
          "Trained and evaluated classification estimators including Logistic Regression and Decision Trees using Scikit-learn to identify optimal decision boundaries."
      },
      {
        title: "Churn Propensity Scoring",
        status: "Implemented",
        description:
          "Calculates probabilistic churn risk scores per customer, enabling businesses to prioritize customer success outreach based on calculated attrition risk."
      },
      {
        title: "Evaluation & Confusion Matrix Analysis",
        status: "Implemented",
        description:
          "Validates predictive performance across Accuracy, Precision, Recall, and ROC-AUC metrics to ensure balanced detection on unseen test splits."
      }
    ],
    technologiesUsed: [
      { name: "Python", category: "Core Language", detail: "Primary programming language for data preprocessing, algorithmic pipelines, and modeling" },
      { name: "Pandas", category: "Data Manipulation", detail: "Tabular data wrangling, missing value cleaning, filtering, and aggregation" },
      { name: "Scikit-learn", category: "Machine Learning", detail: "Preprocessing transformers, classification estimators, cross-validation, and metrics" },
      { name: "Machine Learning", category: "Domain", detail: "Supervised binary classification, decision boundaries, and churn risk evaluation" }
    ],
    howItWorks: [
      {
        step: "1. Dataset Loading & Inspection",
        detail: "Ingested customer profile datasets containing account tenure, service usage, payment methods, and historical churn outcomes."
      },
      {
        step: "2. Exploratory Data Analysis & Cleaning",
        detail: "Analyzed churn distribution across contract types, cleaned missing values, and encoded categorical attributes."
      },
      {
        step: "3. Feature Engineering & Scaling",
        detail: "Selected high-impact features such as tenure and monthly charges, standardizing numerical scales for model stability."
      },
      {
        step: "4. Model Training & Validation",
        detail: "Split data into training and testing sets to train Scikit-learn classifiers and tune hyperparameters."
      },
      {
        step: "5. Prediction & Retention Insights",
        detail: "Generated classification predictions and churn risk scores to deliver actionable retention intelligence."
      }
    ],
    whatILearned: [
      "Implementing end-to-end classification pipelines from raw customer records using Pandas and Scikit-learn.",
      "Evaluating classification metrics like Precision, Recall, and ROC-AUC for imbalanced churn datasets.",
      "The practical importance of feature selection in identifying primary drivers of customer attrition.",
      "Translating statistical model predictions into practical business retention strategies."
    ]
  }
];
