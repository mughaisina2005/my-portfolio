# Mughaisina Parveen — Portfolio Website

A minimal, professional, and mobile-responsive personal developer portfolio for **Mughaisina Parveen**, an aspiring **AI/ML Engineer and Python Developer**.

Built with **React**, **Vite**, and clean **Vanilla CSS** with design inspiration drawn from modern developer templates: soft off-white background, deep navy typography, subtle blue and violet accents, and balanced whitespace without oversized cards.

---

## 📂 Project Structure

```text
├── public/
│   ├── assets/
│   │   ├── profile/
│   │   │   └── profile.jpg           <- Verified portrait photo (circular frame)
│   │   ├── certificates/             <- Real uploaded certificate photographs
│   │   │   ├── typewriting-junior-distinction.jpeg
│   │   │   ├── swordnex-computer-applications.jpeg
│   │   │   └── vaagai-internship-completion.jpeg
│   │   ├── projects/
│   │   │   ├── laptop-price-prediction.png
│   │   │   └── ai-syllabus-agent.png
│   │   └── resume/
│   │       └── resume.pdf            <- Verified PDF resume
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css         <- Responsive navigation with mobile drawer
│   │   ├── Hero.jsx / .css           <- Hero intro & circular photo & featured preview
│   │   ├── Summary.jsx / .css        <- Professional summary & core competencies
│   │   ├── Skills.jsx / .css         <- Compact grouped skills layout
│   │   ├── Education.jsx / .css      <- Academic history timeline
│   │   ├── Internship.jsx / .css     <- SwordNex & Vaagai internship details
│   │   ├── Projects.jsx / .css       <- Compact project cards (2-column desktop / 1-column mobile)
│   │   ├── ProjectDetail.jsx / .css  <- Project deep-dive with implemented/planned tags
│   │   ├── Certificates.jsx / .css   <- Thumbnail gallery with accessible Lightbox modal
│   │   ├── Resume.jsx / .css         <- Compact CV view & download section
│   │   ├── Contact.jsx / .css        <- Direct contact cards (Phone, Email, GitHub, LinkedIn)
│   │   ├── Footer.jsx / .css         <- Minimalist footer
│   │   └── Icons.jsx                 <- SVG icons (GitHub, LinkedIn, etc.)
│   ├── data/
│   │   ├── portfolioData.js          <- Personal info, skills, education, internships
│   │   ├── projectsData.js           <- Projects data & feature lists
│   │   └── certificatesData.js       <- Certificate metadata & files
│   ├── App.jsx / .css                <- Main application layout & hash routing
│   ├── index.css                     <- Global tokens, color variables, typography
│   └── main.jsx                      <- Vite entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 1. How to Run Locally

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Start Development Server:
```bash
npm run dev
```
Open your browser at:
```
http://localhost:5173/
```

---

## 🛠️ 2. How to Build for Production

To create an optimized production bundle:
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## 🌐 3. How to Deploy

The website is a static React application prepared for zero-configuration deployment to **Netlify** or **Vercel**.

### A. Deploy to Vercel
1. Push your repository to GitHub (`https://github.com/mughaisina2005/...`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### B. Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site > Import an existing project** (from GitHub).
3. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

Alternatively, drag and drop the `dist/` folder directly into [Netlify Drop](https://app.netlify.com/drop).

---

## 📜 4. Certificates Status

The portfolio is configured with **3 verified certificate photographs**:
1. **Typewriting — Junior Grade (English 30 WPM)**: First Class with Distinction (Dept. of Technical Education, Tamil Nadu).
2. **SwordNex Technologies**: Basic to Advanced Computer Applications (Certificate No: SNX-BAC-2026-002).
3. **Vaagai Infotech**: Web Development Internship Completion (Grade A).

### Additional Certificates:
The following certificate files are not yet in `public/assets/certificates/`:
- **AI Engineering Certification**
- **Web Development Certification**
- **Microsoft Excel Certification**

When you have these files:
1. Save each file in `public/assets/certificates/` (e.g. `ai-engineering.jpg` or `.pdf`).
2. Open `src/data/certificatesData.js` and add or uncomment the corresponding item with `isAvailable: true` and the `filePath`.

---

## 📄 5. Resume

Your verified resume document is active at:
```
public/assets/resume/resume.pdf
```
Both the **View Resume** and **Download Resume** buttons serve this file directly.

---

## 📞 6. Direct Contact

The contact message form has been replaced with clean, clickable direct channels:
- **Phone**: [9361575505](tel:9361575505)
- **Email**: [mughaisinacsgcwk@gmail.com](mailto:mughaisinacsgcwk@gmail.com)
- **GitHub**: [github.com/mughaisina2005](https://github.com/mughaisina2005)
- **LinkedIn**: [linkedin.com/in/mughaisina-parveen-1734aa2a5](https://linkedin.com/in/mughaisina-parveen-1734aa2a5)
