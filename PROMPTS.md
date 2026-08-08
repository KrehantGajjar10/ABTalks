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



### Chapter 2: Mock Data Architecture & Core UI Components

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are executing **Chapter 2: Mock Data Architecture & Core UI Components**.
**Strict Rules:** Do NOT build the final product pages (`/`, `/dashboard`, `/day/:2`), do NOT install new dependencies (no `clsx`, no `classnames`), do NOT modify Tailwind configuration, and do NOT run any destructive Git commands (no commit, no push). The user will handle Git operations manually.

Your goal is to build a structured mock JSON data file to serve as our "database", build our foundational reusable UI components (`Button`, `Card`, `Badge`) using the design tokens from Chapter 1, and update the `/style-guide` sandbox to test these new components with the mock data.

---

### Step 1: Project Inspection & Safety Check

1. Inspect `src/index.css` to review the semantic design tokens (e.g., `--bg-surface`, `--accent-primary`) created in Chapter 1.
2. Ensure you use native template literals for component class merging. Do not add external utility libraries.

---

### Step 2: Mock Data Architecture

Create a new file `src/data/mockData.js` and export a structured JavaScript object simulating the application state.

* **User Object:**
```javascript
user: {
  name: "Rahul Sharma",
  avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Rahul",
  joinDate: "2024-09-01",
  currentStreak: 3,
  bestStreak: 12,
  status: "active" // Can be "first-day", "missed-yesterday", "active"
}

```


* **Challenges Array:** Create an array of 60 objects representing the 60-day challenge.
* Include fields: `day` (integer), `title`, `description`, `status` (`"completed"`, `"missed"`, `"pending"`, `"locked"`), `githubUrl`, and `linkedinUrl`.
* **Crucial Plus-One Feature Field:** Add a `linkedinTemplate` string field to every challenge containing a pre-written, professional template the student can use.
* *Data Population Strategy:* Fully detail Days 1 through 5 (Day 1-3 completed, Day 4 missed, Day 5 pending). The remaining Days 6-60 can be programmatically generated or mapped as basic `"locked"` state objects to keep the file size reasonable.



---

### Step 3: Build Core UI Components

Create a `src/components/ui/` folder and implement the following reusable atomic components. They must consume the CSS variables defined in Chapter 1 (e.g., using Tailwind arbitrary values like `bg-[var(--bg-surface)]` or mapped theme variables depending on Chapter 1's exact implementation).

1. **`Button.jsx`**
* Props: `variant` (`primary`, `secondary`, `outline`, `ghost`), `size`, `children`, `className`, standard button attributes.
* Styling: Must have a minimum height of **44px** for mobile touch targets. Include clear focus rings (`focus-visible:ring-2`) and hover states using our token variables.
* Use `rounded-xl` or `rounded-2xl` based on the visual direction.


2. **`Card.jsx`**
* Props: `children`, `className`.
* Styling: Use the `--bg-surface` background, `--border-subtle` for borders, and `rounded-2xl` or `rounded-3xl` radii. Do not use heavy drop shadows.


3. **`Badge.jsx`**
* Props: `variant` (`success`, `warning`, `neutral`), `children`, `className`.
* Styling: A small pill shape (`rounded-full`) for statuses. Use `--status-success` colors for the success variant, etc.



---

### Step 4: Update the Style Guide Sandbox

Modify `src/pages/StyleGuideSandbox.jsx` to replace the hardcoded atomic elements with these new reusable components.

1. Import `Button`, `Card`, and `Badge`.
2. Import `mockData` from `src/data/mockData.js`.
3. Render a "Today's Task" Card in the sandbox by mapping the `pending` challenge (Day 5) from the mock data into the new UI components. Display the `title`, `description`, and a `Button` to act as the primary CTA.
4. Render a few `Badge` components showcasing the different statuses.
5. Ensure the layout remains optimized for a 390px mobile viewport and responds instantly to the Light/Dark theme toggle.

---

### Step 5: Acceptance Criteria & Output

1. Running `npm run dev` serves the app without errors.
2. The `/style-guide` route correctly displays the mock data inside the new reusable components.
3. Light and Dark modes continue to function flawlessly, proving the components are properly wired to the Chapter 1 CSS variables.
4. Running `npm run build` succeeds with zero errors.

When completed:

1. Run `git status` so the user can review the created and modified files.
2. Provide a concise summary containing:
* **Files Created/Modified:** [List files]
* **Build Status:** [Pass / Fail]
* **Git Status Output:** [Exact `git status` text]



### Chapter 3: Permanent Layout Shell & Landing Page (`/`)

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are executing **Chapter 3: Permanent Layout Shell & Landing Page (`/`)**.
**Strict Rules:** Do NOT build the final Dashboard (`/dashboard`) or Challenge Day (`/day/:dayId`) pages yet. Do NOT install new dependencies. Do NOT modify the Tailwind configuration. Do NOT run any destructive Git commands (no commit, no push).

Your goal is to replace the temporary routing header with a permanent Application Layout (Navbar, Footer, AppLayout) and build the complete, mobile-first Landing Page utilizing the `Button`, `Card`, and `Badge` components created in Chapter 2 and the CSS tokens from Chapter 1.

---

### Step 1: Create the Permanent Layout Shell

Create a new folder `src/components/layout/` and build the following components:

1. **`Navbar.jsx`**:
* A polished top navigation bar.
* Include a text-based logo ("ABTalks") that links to `/`.
* Include the Light/Dark Theme Toggle button on the right side.
* Style: Use `--bg-app` or a slightly translucent background with a `--border-subtle` bottom border. Ensure a minimum 44px height.


2. **`Footer.jsx`**:
* A minimal footer (e.g., "© 2026 ABTalks. Build consistently.").
* Style: Use `--text-muted` and center the text with generous top and bottom padding.


3. **`AppLayout.jsx`**:
* A wrapper component that accepts `children` or uses React Router's `<Outlet/>`.
* Structure: `<Navbar/>` -> `<main>` (content) -> `<Footer/>`.
* Desktop formatting: Ensure the `<main>` content area doesn't stretch infinitely on wide screens (e.g., use `max-w-5xl mx-auto w-full`).



---

### Step 2: Update App Routing (`App.jsx`)

1. Remove the temporary `HeaderNav.jsx` component completely from the project.
2. Wrap all routes in `App.jsx` with the new `AppLayout` component so the Navbar and Footer persist across all pages.

---

### Step 3: Build the Landing Page (`src/pages/LandingPage.jsx`)

Replace the temporary Landing Page shell with the final product landing page. The design must be mobile-first (390px) and expand cleanly for desktop. Use native Tailwind transitions for hover effects; do NOT add animation libraries.

**Section 1: Hero**

* **Content:** A strong, motivating headline (e.g., "Code Every Day. Get Noticed."). A subheadline addressing the college student (e.g., "The 60-day challenge that turns tired students into hired developers.").
* **Action:** A massive primary `Button` component ("Start the 60-Day Challenge") that wraps a React Router `<Link to="/dashboard">`.
* **Styling:** Center-aligned, generous padding (`py-16` or `py-24`), utilizing `--text-primary` and `--text-secondary`.

**Section 2: How It Works**

* **Layout:** Stacked single column on mobile (390px), 3-column grid on desktop (`md:grid-cols-3`).
* **Cards:** Use the `Card` component for three steps:
1. *Build:* "Get a daily task."
2. *Post:* "Submit your GitHub & LinkedIn proof."
3. *Get Noticed:* "Build a 60-day streak recruiters can't ignore."


* **Styling:** Use `--bg-surface`. Keep icons/numbers simple (use native text or simple SVG shapes, no heavy libraries).

**Section 3: Value/Reward & Final CTA**

* **Content:** A brief reminder of the value of consistency.
* **Action:** A secondary CTA `Button` ("View Dashboard") linking to `/dashboard`.
* **Styling:** A slightly elevated section or distinct background using `--bg-surface-elevated` with rounded corners.

---

### Step 4: Component & Design Token Enforcement

* **MUST** use the `Button`, `Card`, and `Badge` components from `src/components/ui/` instead of raw HTML buttons/divs where applicable.
* **MUST** rely strictly on the CSS variables defined in `index.css` (e.g., `text-[var(--text-primary)]`, `bg-[var(--bg-app)]` if not mapped globally, though native Tailwind mapped classes are preferred if you set them up that way).
* Ensure text contrast and readability remain excellent in both Light and Dark modes.

---

### Step 5: Acceptance Criteria & Output

1. Running `npm run dev` serves the app without errors.
2. Navigating to `/` displays the polished Landing Page.
3. The Navbar and Footer are visible on `/`, `/dashboard`, and `/day/2`.
4. Clicking the Hero CTA instantly navigates to `/dashboard`.
5. The layout looks excellent at 390px (no horizontal scrolling) and expands intelligently on desktop.
6. Running `npm run build` succeeds with zero errors.

When completed:

1. Run `git status` so the user can review the created and modified files.
2. Provide a concise summary containing:
* **Files Created/Modified/Deleted:** [List files]
* **Build Status:** [Pass / Fail]
* **Git Status Output:** [Exact `git status` text]



### Chapter 4: Dashboard Foundation & Progress Grid (`/dashboard`)

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are executing **Chapter 4: Dashboard Foundation & Progress Grid (`/dashboard`)**.
**Strict Rules:** Do NOT build the final Challenge Day execution page (`/day/:dayId`). Do NOT install new dependencies (no charting libraries). Do NOT modify the Tailwind configuration. Do NOT run any destructive Git commands (no commit, no push).

Your goal is to build the Dashboard page using the mock data from Chapter 2, construct a custom 60-day progress grid, and use the existing `Card`, `Badge`, and `Button` components. The grid must be interactive and highly accessible.

---

### Step 1: Component Structure & Mock Data Integration

Create a new folder `src/components/dashboard/`.
Update `src/pages/DashboardPage.jsx` to import the `user` and `challenges` array from `src/data/mockData.js`. Pass the necessary data down to the three new components you will create in the `dashboard` folder.

---

### Step 2: Build `StreakCard.jsx`

* **Purpose:** Display the user's current standing.
* **Content:** Show `user.currentStreak` as a massive, proud number. Show `user.bestStreak` as secondary text.
* **Styling:** Wrap in the `Card` component. Use the `--status-success` (Emerald/Mint) token to make the current streak visually rewarding. Keep it compact but highly readable on a 390px screen.

---

### Step 3: Build `TodayTaskCard.jsx`

* **Purpose:** Provide a frictionless CTA for today's action.
* **Content:** Find the challenge object where `status === "pending"` (e.g., Day 5). Display the `day` number, `title`, and `description`.
* **Action:** Add a primary `Button` ("Start Today's Challenge") wrapped in a React Router `<Link to="/day/5">`.
* **Styling:** Use the `Card` component. Emphasize the primary CTA so it acts as the primary focal point of the dashboard.

---

### Step 4: Build `ProgressGrid.jsx` (Crucial Implementation)

* **Layout:** A native CSS grid optimized for mobile. Use exactly 10 columns (`grid-cols-10`) so 60 days form a 10x6 block. Ensure `gap-1` or `gap-1.5` so it fits on a 390px screen without horizontal scrolling. Make cells perfectly square (`aspect-square`).
* **Data Mapping:** Map through the 60 `challenges`.
* **Cell Styling by Status:**
* `completed`: Use `--status-success` background.
* `missed`: Use a subtle warning/muted red or amber background.
* `pending`: Use `--accent-primary` or a clearly outlined focus state.
* `locked`: Use a muted `--bg-surface-elevated` background with `--border-subtle`.


* **Interactivity & Routing:**
* If `status` is NOT `"locked"`, wrap the cell in a `<Link to="{`/day/${challenge.day}`}">` from `react-router-dom`. Add an interactive hover state (`hover:scale-105` or similar native transition).
* If `status` is `"locked"`, render it as a standard `div` or visually disabled element without hover effects. Do NOT wrap it in a Link.


* **Accessibility:** Every cell MUST have a semantic label for screen readers. Add `aria-label={`Day ${challenge.day}:${challenge.status}`}` and an equivalent `title` attribute for native browser tooltips.

---

### Step 5: Compose the Dashboard Layout

* **File:** Assemble everything in `src/pages/DashboardPage.jsx`.
* **Mobile Layout (390px):** Stack the components in this exact hierarchy: `StreakCard` -> `TodayTaskCard` -> `ProgressGrid`. Ensure generous padding between sections (e.g., `gap-6` or `space-y-6`).
* **Desktop Layout:** Allow the layout to expand gracefully (e.g., placing the `StreakCard` and `TodayTaskCard` in a left column, and a larger `ProgressGrid` in the right column, or a balanced multi-column grid) constrained by the `AppLayout` wrapper.

---

### Step 6: Acceptance Criteria & Output

1. Running `npm run dev` serves the app without errors.
2. Navigating to `/dashboard` renders the complete layout cleanly on a 390px screen with NO horizontal overflow.
3. The 10x6 Progress Grid fits perfectly on mobile, and non-locked cells successfully route to the `/day/:dayId` placeholder.
4. Locked cells are visibly distinct and unclickable.
5. Light and Dark modes render clearly, with all status colors highly visible against their respective backgrounds.
6. Running `npm run build` succeeds with zero errors.

When completed:

1. Run `git status` so the user can review the created and modified files.
2. Provide a concise summary containing:
* **Files Created/Modified/Deleted:** [List files]
* **Build Status:** [Pass / Fail]
* **Git Status Output:** [Exact `git status` text]


> **Chapter 4 Bug Fix — Mobile Progress Grid Day Numbers**
>
> I tested the Dashboard at 390px mobile width. Everything is working correctly except one visual bug:
>
> **Issue:** The numbers inside the 60-Day Journey grid cells become invisible / extremely low-contrast on mobile. The cells themselves are visible, but the day numbers (1–60) cannot be properly read.
>
> Please inspect `src/components/dashboard/ProgressGrid.jsx` and its responsive Tailwind classes.
>
> **Requirements:**
>
> * Fix ONLY the day-number visibility/contrast issue.
> * Day numbers **1–60 must remain clearly readable at 390px mobile and desktop**.
> * Maintain the existing status colors:
>
>   * Completed → Emerald
>   * Missed → Rose/Red
>   * Pending → Indigo outline
>   * Locked → Slate
> * Locked day numbers should still have enough contrast to be readable, while remaining visually muted.
> * Do not change the existing grid structure, 10×6 layout, spacing, card design, or overall visual direction.
> * Do not install dependencies.
> * Do not modify the Tailwind configuration or global design tokens.
>
> After fixing:
>
> 1. Run `npm run build`.
> 2. Verify `/dashboard` at 390px and desktop.
> 3. Report exactly what was changed and the build result.
> 4. Do NOT run Git commit/push.

### Chapter 5: Challenge Day & Submission Flow (`/day/:dayId`)

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are executing **Chapter 5: Challenge Day & Submission Flow (`/day/:dayId`)**.
**Strict Rules:** Do NOT implement the "Smart LinkedIn Builder" (our Plus-One feature) yet. Do NOT install form validation libraries (use native HTML5 validation). Do NOT modify the Tailwind configuration. Do NOT run any destructive Git commands (no commit, no push).

Your goal is to build the execution environment where the student reads today's task and submits their links. You will build a reusable `Input` component, upgrade the `ChallengeDayPage`, and implement a simulated submission form using local React state.

---

### Step 1: Build the `Input.jsx` Component

Create `src/components/ui/Input.jsx`.

* **Props:** `label`, `id`, `helperText`, plus standard input attributes (`type`, `required`, `placeholder`, `value`, `onChange`).
* **Styling:**
* Use `--bg-surface` or a slightly darker/lighter `--bg-app` for the input background to ensure contrast.
* Must have a minimum height of **44px** for touch targets.
* Include a highly visible focus state using `focus-visible:ring-2` mapped to our `--accent-primary` or `--focus-ring` token.
* Ensure the text color (`--text-primary`) and placeholder text (`--text-muted`) contrast well in both Light and Dark modes.
* If `label` is provided, render it cleanly above the input using `--text-secondary`.



---

### Step 2: Build `TaskBrief.jsx`

Create `src/components/challenge/TaskBrief.jsx`.

* **Purpose:** Display the read-only information about what needs to be built.
* **Props:** `challenge` (object).
* **Content:**
* Display the `day` number and a `Badge` indicating the status (e.g., "Pending").
* Display the `title` as a prominent H1 or H2.
* Display the `description` text clearly with generous line height for readability (`leading-relaxed`).


* **Styling:** Wrap this information inside a `Card` or a well-padded section.

---

### Step 3: Build `SubmissionForm.jsx`

Create `src/components/challenge/SubmissionForm.jsx`.

* **Purpose:** Allow the user to submit their GitHub and LinkedIn URLs.
* **State:** Use local React `useState` to track `isSubmitted` (boolean, default `false`).
* **Form Implementation:**
* Create a `<form>` element with an `onSubmit` handler that prevents default and sets `isSubmitted` to `true`.
* Use the new `Input` component for "GitHub Repository URL" and "LinkedIn Post URL". Set `type="url"` and `required` on both to leverage native HTML5 browser validation.
* Add a massive, thumb-friendly primary `Button` ("Submit Proof of Work") at the bottom.


* **Success State:**
* If `isSubmitted` is `true`, do NOT render the inputs. Instead, render a highly satisfying success state (e.g., a green checkmark icon, "Proof Submitted Successfully!", and a secondary `Button` to "Return to Dashboard").


* **Styling:** Wrap the form (and success state) in a `Card`.

---

### Step 4: Upgrade `ChallengeDayPage.jsx`

Update `src/pages/ChallengeDayPage.jsx`.

* **Data Fetching:** Use `useParams` to get `dayId`. Convert it to a number and find the matching challenge in the `challenges` array from `mockData.js`.
* **Fallback:** If the challenge doesn't exist (e.g., `/day/999`), render a clean fallback UI ("Challenge not found") with a `Button` to return to the Dashboard.
* **Layout Assembly (Mobile First):**
* Top: A simple "← Back to Dashboard" link using React Router `<Link>`.
* Middle: Render the `TaskBrief` component passing the challenge data.
* Bottom: Render the `SubmissionForm` component.
* Ensure generous spacing (`gap-6` or `space-y-6`) between elements. Constrain the maximum width on desktop so the inputs don't stretch across the entire monitor.



---

### Step 5: Acceptance Criteria & Output

1. Running `npm run dev` serves the app without errors.
2. Navigating from the Dashboard to `/day/5` renders the Task Brief and Submission Form.
3. The inputs are at least 44px tall and visible in both Light and Dark modes.
4. Clicking "Submit" with empty or invalid URLs triggers the browser's native HTML5 validation UI.
5. Clicking "Submit" with valid URLs instantly swaps the form to the satisfying Success State.
6. The layout fits perfectly on a 390px mobile screen with no horizontal scrolling.
7. Running `npm run build` succeeds with zero errors.

When completed:

1. Run `git status` so the user can review the created and modified files.
2. Provide a concise summary containing:
* **Files Created/Modified:** [List files]
* **Build Status:** [Pass / Fail]
* **Git Status Output:** [Exact `git status` text]

