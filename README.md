# ABTalks

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.18.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ab-talks-five.vercel.app/)

> **A 60-Day Developer Challenge platform designed to build coding consistency and a public proof-of-work portfolio.**

---

## 🚀 Live Demo

🌐 **Live Application:** [https://ab-talks-five.vercel.app/](https://ab-talks-five.vercel.app/)

---

## 📌 Overview / Problem Statement

College students and aspiring developers often struggle with maintaining long-term coding consistency and showcasing their daily learning publicly. While many attempt "100 Days of Code" challenges, burnout and friction during daily sharing lead to high drop-out rates.

**ABTalks** solves this problem by providing a structured, 60-Day Developer Challenge platform that gamifies daily learning, tracks progress visually through GitHub-style contribution grids, and eliminates daily sharing friction with a Smart LinkedIn Post Builder. By helping students turn daily practice into a verified, public proof-of-work portfolio, ABTalks helps developers build habits that get them noticed by recruiters.

*Note: ABTalks is a frontend-only implementation utilizing a modern mock data architecture to simulate backend persistence and database operations.*

---

## ✨ Key Features

- **60-Day Challenge Grid:** Visual, interactive calendar tracking 60 days of bite-sized engineering tasks with clear status indicators (Completed, Pending, Missed, Locked).
- **Dynamic Streak Tracking:** Instant visual feedback on current streak and personal best streak counts to drive habit loops.
- **Light & Dark Theme System:** Native theme toggle with system preference detection and smooth background transitions across all pages.
- **Smart LinkedIn Builder (Plus-One Feature):** A frictionless template generator and one-click copy-to-clipboard utility tailored for late-night post submissions.
- **Judge & Demo State Switcher:** Built-in floating development toolbar allowing evaluators to dynamically switch between UX states (`First Day`, `Active Pending`, `Active Completed`, `Missed Day`) instantly.

---

## ⚡ Smart LinkedIn Builder (Plus-One Feature)

Submitting daily progress late at night after hours of debugging is exhausting. Tired students often skip sharing on LinkedIn because writing a post from scratch feels like a chore.

The **Smart LinkedIn Builder** addresses this friction point directly:
1. Automatically populates a pre-structured, professionally formatted LinkedIn post template including current challenge day, task summary, repository links, and relevant tags.
2. Offers a **One-Click Copy to Clipboard** interaction with immediate visual feedback ("Copied!").
3. Enables developers to share their daily proof-of-work on social platforms in under 5 seconds without leaving their workflow.

---

## 📊 Dashboard & Progress Tracking

The ABTalks Dashboard acts as the developer's command center:
- **GitHub-Style 60-Day Contribution Grid:** Visual square-grid representation displaying progress across 60 days. Color-coded states clearly differentiate between completed milestones, missed days, active tasks, and upcoming locked challenges.
- **Streak Mechanics:** Prominently highlights `Current Streak` (active daily momentum) and `Best Streak` (all-time peak) to motivate consistent daily check-ins.
- **Today's Action Card:** Quick call-to-action component linking directly to the active day's task page, preventing context searching.

---

## 🎨 UX States & Edge Cases

ABTalks is designed with intentional UX empathy for all student learning scenarios, ensuring non-punitive and encouraging experiences:

| Scenario State | Description & UX Strategy |
| :--- | :--- |
| **First Day State** | Welcoming onboarding state designed to encourage brand-new challenge participants without overwhelming empty screens. |
| **Active / Pending State** | Clearly highlights today's active challenge day with direct CTA to complete and submit work. |
| **Active / Completed State** | Displays celebratory status for tasks completed today, revealing submission details and post-sharing tools. |
| **Missed Day State** | Empathetic "bounce-back" experience. Rather than locking out or shaming the user for a broken streak, it encourages resuming the challenge immediately. |
| **Judge / Demo State Switcher** | A fixed bottom utility widget designed specifically for hackathon judges and recruiters to simulate any edge case state instantly without manual database manipulation. |

---

## 🎯 Design & UX Philosophy

- **390px Mobile-First Optimization:** Built ground-up for mobile devices first (optimized for standard iPhone/Android widths of 390px) while scaling responsively to desktop monitors.
- **Monochrome Foundation & Controlled Accents:** Clean, modern neutral palette paired with high-contrast semantic accents:
  - 🟢 **Emerald:** Success, completed tasks, active streaks.
  - 🟠 **Amber:** Warning states, missed days, pending tasks.
  - 🟣 **Indigo:** Primary CTAs and action buttons.
- **Native CSS Micro-Interactions:** Smooth hover transforms, focus ring highlights, active press scaling, and seamless theme transitions.
- **Accessibility First:** High contrast ratios, semantic HTML5 structure, and fully navigable keyboard focus states (`focus-visible`).

---

## 🛠️ Tech Stack

### Core Technologies
- **Library:** [React 19](https://react.dev/) (`react@^19.2.8`, `react-dom@^19.2.8`)
- **Build Tool & Dev Server:** [Vite 8](https://vitejs.dev/) (`vite@^8.2.0`, `@vitejs/plugin-react@^6.0.4`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`tailwindcss@^4.3.3`, `@tailwindcss/vite@^4.3.3`)
- **Routing:** [React Router v7](https://reactrouter.com/) (`react-router-dom@^7.18.2`)
- **Code Quality:** [ESLint 10](https://eslint.org/) (`eslint@^10.8.0`)

### Architecture
- **Mock Data Architecture:** Pure frontend implementation driven by modular mock state generators (`src/data/mockData.js`), simulating backend database entities, streak calculations, and scenario switching.

---

## 📁 Project Structure

```text
ABTalks/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI & feature components
│   │   ├── challenge/       # TaskBrief, SubmissionForm, SmartLinkedInBuilder
│   │   ├── dashboard/       # ProgressGrid, StreakCard, TodayTaskCard
│   │   ├── dev/             # StateSwitcher (Judge evaluation widget)
│   │   ├── layout/          # AppLayout, Navbar, Footer
│   │   └── ui/              # Button, Card, Badge, Input UI primitives
│   ├── data/
│   │   └── mockData.js      # Challenge dataset & scenario generator
│   ├── hooks/
│   │   └── useTheme.js      # Light/Dark mode state hook & DOM sync
│   ├── pages/
│   │   ├── LandingPage.jsx  # Hero, value props & challenge entry
│   │   ├── DashboardPage.jsx# 60-day grid & streak dashboard
│   │   ├── ChallengeDayPage.jsx # Daily task submission & LinkedIn builder
│   │   └── StyleGuideSandbox.jsx # Design tokens & UI component showcase
│   ├── App.jsx              # Main router configuration & layout wrapping
│   ├── index.css            # Tailwind directives & CSS custom variables
│   └── main.jsx             # React DOM root entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML document entry
├── package.json             # Dependencies & npm scripts
└── vite.config.js           # Vite build configuration
```

---

## 🚦 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KrehantGajjar10/ABTalks.git
   cd ABTalks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

### Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with hot module replacement (HMR). |
| `npm run build` | Compiles and builds production-ready bundle assets to the `dist/` folder. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run lint` | Runs ESLint to check for code formatting and potential code issues. |

---

## 🗺️ Application Routes

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `LandingPage` | Public hero page introducing the 60-Day Challenge and platform value proposition. |
| `/dashboard` | `DashboardPage` | Main developer dashboard with streak metrics and 60-day visual progress grid. |
| `/day/:dayId` | `ChallengeDayPage` | Daily task view featuring task brief, GitHub submission form, and Smart LinkedIn Builder. |
| `/style-guide` | `StyleGuideSandbox` | Internal component design system sandbox showcasing color tokens, buttons, and state cards. |

---

## 🌐 Deployment

The application is deployed on **Vercel** with automatic continuous deployment linked to the primary branch.

- **Live URL:** [https://ab-talks-five.vercel.app/](https://ab-talks-five.vercel.app/)

---

## 🔮 Future Improvements

While ABTalks currently delivers a full-fledged frontend experience, planned future enhancements include:
- **Backend & Database Integration:** Connecting Supabase or Firebase for real user authentication and persistent database storage.
- **OAuth Integrations:** Native GitHub and LinkedIn API integration for automated submission verification and direct social publishing.
- **Community Leaderboard:** A public showcase of top student streaks and challenge completers.
- **Custom Challenge Tracks:** Allowing users to select specialized paths (e.g., Full-Stack Web, Mobile Development, DevOps).

---

## 👥 Team & Credits

- **Krehant Gajjar** — *Frontend Developer & UI/UX Lead*
  - React + Vite project architecture
  - React Router and application page structure
  - Landing Page and permanent application layout
  - Dashboard architecture and responsive layout
  - Reusable UI component system
  - Responsive/mobile-first implementation
  - Light/Dark theme system
  - Accessibility and keyboard-navigation improvements
  - Responsive and visual UI polish
  - Git/GitHub workflow and deployment coordination

- **Aniket Bhil** — *Frontend Developer & Feature/UX Engineer*
  - Challenge Day page and daily task experience
  - GitHub and LinkedIn submission flow UI
  - Smart LinkedIn Builder and copy-to-clipboard interaction
  - Mock challenge data and state handling
  - First Day/Active/Completed/Missed Day scenarios
  - Judge Demo State Switcher
  - UI interaction testing and bug fixing
  - Cross-device responsive and UX testing
