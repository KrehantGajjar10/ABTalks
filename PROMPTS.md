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



### Chapter 1 Implementation: Permanent Visual Foundation & Theme Engine

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are now executing the **Final Chapter 1 Implementation: Permanent Visual Foundation & Theme Engine**.
**Strict Rules:** Do NOT build the final product pages (`/`, `/dashboard`, `/day/:2`), do NOT install new dependencies, do NOT modify Tailwind v4.3 configuration, and do NOT run any destructive Git commands (no commit, no push). The user will handle Git operations manually.

Your goal is to establish the permanent design tokens, build a robust theme switcher mechanism, fix the Light/Dark mode styling bugs identified during the sandbox review, and update the `/style-guide` sandbox to verify that both themes look exceptional, maintain high accessibility (WCAG AA/AAA), and reflect our approved **"Slate & Indigo" (Calm Mentor + Midnight Developer)** visual direction.

---

### Step 1: Project Inspection & Safety Check

1. Inspect `src/index.css` and existing files to understand how Tailwind v4.3 is configured.
2. Ensure you do not add unnecessary packages or modify configuration files outside of CSS variables and theme state logic.

---

### Step 2: Establish Permanent Semantic Design Tokens in CSS

Update `src/index.css` to define clean, explicit semantic CSS variables for **both** Light and Dark modes. Do not just invert colors; design each theme intentionally.

- **Core Palette & Tokens to Define:**
- `--bg-app`: App background (Light: clean off-white `#F8FAFC`; Dark: deep slate `#0F172A`)
- `--bg-surface`: Card/container surface (Light: pure white `#FFFFFF`; Dark: elevated slate `#1E293B`)
- `--bg-surface-elevated`: Modals/hover surfaces (Light: `#F1F5F9`; Dark: `#334155`)
- `--text-primary`: Main headings/body (Light: deep slate `#0F172A`; Dark: crisp off-white `#F8FAFC`)
- `--text-secondary`: Subtitles/descriptions (Light: `#475569`; Dark: `#94A3B8`)
- `--text-muted`: Placeholders/meta (Light: `#64748B`; Dark: `#64748B`)
- `--border-subtle`: Card borders/dividers (Light: `#E2E8F0`; Dark: `#334155`)
- `--border-strong`: Active borders (Light: `#CBD5E1`; Dark: `#475569`)
- `--accent-primary`: Primary CTAs (Vivid Indigo/Violet `#6366F1` or `#4F46E5`, highly readable in both modes)
- `--accent-hover`: CTA hover state (`#4338ca` / `#818cf8`)
- `--status-success`: Streaks and completion state (Mint/Emerald `#059669` light / `#10B981` dark)
- `--status-warning`: Missed day / warnings (Amber `#D97706` / `#F59E0B`)
- `--status-error`: Error states (Rose/Red `#E11D48` / `#F43F5E`)
- `--focus-ring`: Accessibility focus outline (`#6366F1` with ring offset)

- **Accessibility Requirements:**
- Ensure primary text against surface backgrounds achieves **WCAG AAA** contrast where practical, and at least **WCAG AA** for all normal UI text in _both_ Light and Dark modes.
- Avoid pure pitch black (`#000000`) in dark mode; stick to the deep slate foundation.
- Ensure Light mode cards use light/white surfaces with dark slate text (fixing any previous bug where cards remained dark in light mode).

---

### Step 3: Implement Theme State & Persistence

1. Implement a simple, clean theme toggle mechanism (using React state or a small utility) that toggles the `.dark` class on `document.documentElement` or the root wrapper.
2. Persist the user's theme choice in `localStorage` so refreshing the app preserves the selected mode.
3. Ensure the theme toggle component itself has a minimum 44px touch target, a clear focus state, and smooth transitions.

---

### Step 4: Refine the Temporary `/style-guide` Sandbox

Update `src/pages/StyleGuideSandbox.jsx` to consume these newly defined CSS variables and semantic tokens. The sandbox must test:

1. **Light Mode vs. Dark Mode Switching:** Verify cards instantly update their background (`--bg-surface`), text (`--text-primary`), and borders (`--border-subtle`) correctly without visual artifacting.
2. **Typography Hierarchy:** H1, H2, H3, Body, and Muted text rendered using the new token variables.
3. **Card & Spacing Density:** 390px mobile optimization with generous padding, rounded corners (`rounded-xl` / `rounded-2xl`), and 44px+ touch targets for buttons.
4. **Streak & Success Components:** Testing the emerald success badges and indigo primary buttons.
5. **Form Controls:** Testing the input field with focus ring states.

---

### Step 5: Acceptance Criteria & Verification

1. Running `npm run dev` serves the app without errors.
2. Navigating to `/style-guide` displays the sandbox correctly in both Light and Dark modes.
3. Light mode displays crisp light cards with dark text; Dark mode displays deep slate cards with light text.
4. The theme toggle persists across reloads via `localStorage`.
5. Running `npm run build` succeeds with zero errors.

---

### Step 6: Output Requirements

When completed:

1. Run `git status` so the user can review the modified files.
2. Provide a concise summary:

- **Files Created/Modified:** [List files]
- **Tokens Established:** [Confirmed semantic tokens]
- **Build Status:** [Pass / Fail]
- **Git Status Output:** [Exact `git status` text]
