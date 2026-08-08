### Chapter 0 Implementation Prompt — Project Foundation & Routing

**Context & Project Goal**
You are working on the ABTalks redesign project. The project is a Vite + React application, configured with Tailwind CSS v4.3 and `react-router-dom`. The user has already initialized the project and configured Tailwind. Your task is to establish a clean foundation, set up React Router, remove default starter code, and create minimal page placeholders for the three required routes.

---

### Step 1: Project Inspection & Constraints (DO THIS FIRST)

Inspect the existing codebase before modifying or creating files:

1. Read `package.json` to confirm installed packages (`react-router-dom`, `react`, `tailwindcss`, etc.).
2. Inspect `src/` to understand the entry point (`main.jsx` / `index.html`) and how Tailwind CSS v4.3 is imported.
3. **Strict Scope Rule:**

- **DO NOT** modify `package.json` unless absolutely necessary.
- **DO NOT** install any new dependencies.
- **DO NOT** modify the Tailwind CSS configuration.
- **DO NOT** modify Vercel configuration.
- **DO NOT** create unnecessary files.

4. **Git Safety Rule:** You must NOT run any destructive Git commands. Do not run `git commit`, `git push`, `git reset`, or `git clean`. The user will handle all Git operations manually.

---

### Step 2: Clean Up Boilerplate

1. Remove default Vite starter content (e.g., `App.css` if redundant, default SVG icons, counter demo code in `App.jsx`).
2. Keep the main Tailwind import in the main CSS file intact.
3. Ensure the project builds without unused boilerplate assets.

---

### Step 3: Folder Structure & Page Shells

Create a simple, clean, and unbloated folder structure inside `src/`. Only create files and folders required for this step:

```text
src/
├── pages/
│   ├── LandingPage.jsx
│   ├── DashboardPage.jsx
│   └── ChallengeDayPage.jsx
├── components/
│   └── HeaderNav.jsx  (temporary minimal nav for route testing)
├── App.jsx
└── main.jsx

```

#### Requirements for Page Components:

1. **`LandingPage.jsx`**: A minimal placeholder component rendering `<main><h1>Landing Page Shell</h1></main>`.
2. **`DashboardPage.jsx`**: A minimal placeholder component rendering `<main><h1>Dashboard Shell</h1></main>`.
3. **`ChallengeDayPage.jsx`**:

- Use `useParams()` from `react-router-dom` to extract `dayId`.
- Render `<main><h1>Challenge Day Shell: Day {dayId}</h1></main>`.

#### Requirements for Navigation Header (`HeaderNav.jsx`):

- A minimal header containing `<Link>` elements pointing to:
- `/` (Landing)
- `/dashboard` (Dashboard)
- `/day/2` (Challenge Day 2)

- Keep `HeaderNav` strictly minimal. It exists only for temporary route verification. Do not spend time designing it. Use simple accessible links with minimal basic layout styling so routes can be easily clicked.

---

### Step 4: Routing Setup in `App.jsx`

1. Configure `BrowserRouter`, `Routes`, and `Route` in `App.jsx` (or `main.jsx` depending on existing setup).
2. Define the exact routes:

- `path="/" element={<LandingPage/>}`
- `path="/dashboard" element={<DashboardPage/>}`
- `path="/day/:dayId" element={<ChallengeDayPage/>}`

3. Include the `HeaderNav` component at the top of the app layout so navigation is accessible on all routes.

---

### What NOT to do in this prompt

- **DO NOT** create `UserContext` or `ThemeContext`.
- **DO NOT** implement final styling, color themes, dark/light mode toggles, or design tokens yet.
- **DO NOT** write mock JSON data files or complex state managers.
- **DO NOT** build the 60-day grid, Smart LinkedIn Builder, or complex forms.
- **DO NOT** add third-party icon packages, animation libraries, or extra npm dependencies.

---

### Acceptance Criteria & Verification

1. Running `npm run dev` serves the application without console errors or warnings.
2. Navigating to `/` displays the Landing Page shell.
3. Navigating to `/dashboard` displays the Dashboard shell.
4. Navigating to `/day/2` displays the Challenge Day shell showing "Day 2".
5. Clicking the navigation links switches between routes without reloading the page.
6. Running `npm run build` executes cleanly with zero build or syntax errors.

---

### Output Summary Requirements

When completed, execute a `git status` command so the user can review exactly what files changed. Then, output a concise summary formatted as follows:

- **Files Created:** [List of created files]
- **Files Modified:** [List of modified files]
- **Routes Implemented:** [List of active routes]
- **Build Status:** [Pass / Fail status for `npm run build`]
- **Git Status Summary:** [Provide the exact output of the `git status` command]
- **Issues/Notes:** [Any warnings or observations, if applicable]
