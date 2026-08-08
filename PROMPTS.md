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



### Chapter 6: The Plus-One Feature (Smart LinkedIn Builder)

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are executing **Chapter 6: The Plus-One Feature (Smart LinkedIn Builder)**.
**Strict Rules:** Do NOT integrate real AI APIs (OpenAI, Gemini, etc.). Do NOT install "copy-to-clipboard" npm packages. Do NOT modify the Tailwind configuration. Do NOT run any destructive Git commands (no commit, no push).

Your goal is to build the `SmartLinkedInBuilder` component. This component solves a major student friction point by providing a pre-written, 1-tap copyable template for their daily LinkedIn post. You will integrate it smoothly into the Challenge Day page above the submission form.

---

### Step 1: Build the `SmartLinkedInBuilder.jsx` Component

Create `src/components/challenge/SmartLinkedInBuilder.jsx`.

* **Props:** `template` (string). If `template` is missing, return `null` (graceful fallback).
* **State:** Use a local React state (e.g., `copyStatus` set to `"idle" | "copied" | "error"`) to manage UI feedback.
* **Copy Logic (Native & Safe):**
* Create an asynchronous `handleCopy` function.
* **Graceful Fallback:** Check if `navigator.clipboard` exists. If not, set `copyStatus` to `"error"`.
* Wrap `navigator.clipboard.writeText(template)` in a `try...catch` block.
* On success, set `copyStatus` to `"copied"`. Use `setTimeout` to revert back to `"idle"` after 2000ms.
* On catch/error, set `copyStatus` to `"error"`.


* **UI Layout:**
* Wrap everything in a `<Card>` or a container with `--border-subtle` and `--bg-surface-elevated`.
* **Header:** A small icon (optional native SVG) and title (e.g., "Smart LinkedIn Template") using `--text-primary`. Add a subtext ("Copy and customize this for today's proof of work") using `--text-secondary`.
* **Content Block:** Display the `template` string inside a well-padded `div` or `<pre>` tag that uses `whitespace-pre-wrap` so formatting is preserved. Give this inner block a slightly darker/lighter background for contrast.
* **Action Area:** A secondary `Button` to copy the text.
* If `"idle"`, show "Copy Template".
* If `"copied"`, show "Copied! ✓" (with `--status-success` text/border if possible).
* If `"error"`, show "Copy failed - Please select and copy manually" and ensure the user can manually highlight the text block.

---

### Step 2: Integrate into `ChallengeDayPage.jsx`

Update `src/pages/ChallengeDayPage.jsx`.

* Locate the layout section between the `TaskBrief` component and the `SubmissionForm` component.
* Import and render the `<SmartLinkedInBuilder template="{challenge.linkedinTemplate}"/>` there.
* Ensure there is proper vertical spacing (e.g., `gap-6` or `space-y-6`) so the flow from reading the brief, to copying the template, to submitting the form feels entirely natural.

---

### Step 3: Styling & Accessibility Checks

* **390px Optimization:** Ensure the template text block breaks words correctly (`break-words` or `whitespace-pre-wrap`) so it never causes horizontal scrolling on mobile devices.
* **Touch Targets:** The "Copy" button must be at least 44px tall.
* **Theme Contrast:** The component must look native to the app in both Light and Dark modes. The text inside the template block should be easily readable, likely using `--text-secondary`.

---

### Step 4: Acceptance Criteria & Output

1. Running `npm run dev` serves the app without errors.
2. Navigating to `/day/5` displays the Smart LinkedIn Builder between the brief and the form.
3. Clicking "Copy Template" successfully copies the text to the clipboard and updates the button visually to "Copied! ✓" for 2 seconds before reverting.
4. If the clipboard API fails, the UI does not crash, and the user receives a clear visual error state but can still manually copy the text.
5. The layout remains fully constrained to 390px on mobile without horizontal overflow.
6. Running `npm run build` succeeds with zero errors.

When completed:

1. Run `git status` so the user can review the created and modified files.
2. Provide a concise summary containing:
* **Files Created/Modified:** [List files]
* **Build Status:** [Pass / Fail]
* **Git Status Output:** [Exact `git status` text]



### Chapter 7: Edge Cases & Empty States

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are executing **Chapter 7: Edge Cases & Empty States**.
**Strict Rules:** Do NOT install any new dependencies. Do NOT modify the Tailwind configuration. Do NOT run any destructive Git commands (no commit, no push).

Your goal is to gracefully handle the hackathon's required edge cases: First Day (Empty Profile), Missed Day, and Completed Task. To make this easily verifiable for the judges, you will build a "Demo State Switcher" that allows toggling the mock data between these specific scenarios directly from the Dashboard.

---

### Step 1: Upgrade `mockData.js` for Scenarios

Update `src/data/mockData.js`. Instead of exporting a single static object, export a function `getMockState(scenario)` that returns a `{ user, challenges }` object based on the requested scenario.
Define 4 scenarios:

1. **`first-day`**:
* `user`: `currentStreak: 0`, `bestStreak: 0`, `status: "first-day"`.
* `challenges`: Day 1 is `"pending"`, all others are `"locked"`.


2. **`active-pending`** (The default we've been using):
* `user`: `currentStreak: 4`, `bestStreak: 12`, `status: "active"`.
* `challenges`: Days 1-4 are `"completed"`, Day 5 is `"pending"`, rest are `"locked"`.


3. **`active-completed`**:
* `user`: `currentStreak: 5`, `bestStreak: 12`, `status: "active"`.
* `challenges`: Days 1-5 are `"completed"`, rest are `"locked"`.


4. **`missed-day`**:
* `user`: `currentStreak: 0`, `bestStreak: 12`, `status: "missed"`.
* `challenges`: Days 1-3 `"completed"`, Day 4 `"missed"`, Day 5 `"pending"`, rest `"locked"`.



---

### Step 2: Build `StateSwitcher.jsx` (Judge Tools)

Create `src/components/dev/StateSwitcher.jsx`.

* **Purpose:** A development/judging tool to toggle the mock data scenarios.
* **Props:** `currentScenario` (string), `onScenarioChange` (function).
* **UI Layout:** Wrap it in a container with a dashed border (`border-dashed --border-strong`) and a clear label "🛠 Judge Tools: Toggle Scenario" so it is obviously not a core product feature.
* **Controls:** Render small ghost or outline buttons for the 4 scenarios (`First Day`, `Active`, `Completed`, `Missed Day`). Highlight the active scenario button.
* **Styling:** Ensure it is scrollable horizontally or wraps cleanly on a 390px mobile screen so it doesn't break the layout.

---

### Step 3: Update Dashboard UI Components for Edge Cases

1. **`StreakCard.jsx`**:
* If `user.status === "first-day"`, hide the "Best Streak" and show a welcoming message: "Day 1 Starts Now! Begin your 60-day journey." Use standard `--text-primary`.
* If `user.status === "missed"`, show the 0 streak, but add an empathetic message: "Rest is important. Let's bounce back today." Map the visual accents to `--status-warning` (Amber) instead of the usual Emerald.
* Otherwise, show the standard active streak UI.


2. **`TodayTaskCard.jsx`**:
* Determine "Today's Task" by finding the first `"pending"` challenge. If none are pending, find the most recently `"completed"` challenge.
* If the task is `"pending"`, show the standard "Start Today's Challenge" primary CTA linking to the day.
* If the task is `"completed"` (meaning the `active-completed` scenario is active), replace the CTA button with a read-only, satisfying success indicator (e.g., a non-clickable `<div className="flex items-center text-(--status-success)">✓ Completed for today</div>`).



---

### Step 4: Wire it up in `DashboardPage.jsx`

1. Import `useState` and `getMockState`.
2. Set up local state: `const [scenario, setScenario] = useState("active-pending");`
3. Derive the data: `const { user, challenges } = getMockState(scenario);`
4. Pass `user` to `StreakCard`. Pass `challenges` to `TodayTaskCard` and `ProgressGrid`.
5. Render `<StateSwitcher currentScenario="{scenario}" onScenarioChange="{setScenario}"/>` at the very bottom of the Dashboard page layout, separated by generous padding (`mt-12`).

---

### Step 5: Acceptance Criteria & Output

1. Running `npm run dev` serves the app without errors.
2. The Dashboard loads the `active-pending` state by default.
3. Clicking the Judge Tools toggle successfully swaps the UI between First Day, Active, Completed, and Missed Day scenarios instantly.
4. The Missed Day streak card looks empathetic and utilizes warning (Amber) colors properly in both Light and Dark modes.
5. The Completed scenario correctly changes the task card's CTA to a read-only success state.
6. The layout fits perfectly on a 390px mobile screen with no horizontal scrolling.
7. Running `npm run build` succeeds with zero errors.

When completed:

1. Run `git status` so the user can review the created and modified files.
2. Provide a concise summary containing:
* **Files Created/Modified:** [List files]
* **Build Status:** [Pass / Fail]
* **Git Status Output:** [Exact `git status` text]



### Chapter 8: Responsive Polish & Accessibility

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are executing **Chapter 8: Responsive Polish & Accessibility**.
**Strict Rules:** Do NOT alter the core design tokens from Chapter 1. Do NOT break the existing 390px mobile layouts. Do NOT install external animation or charting libraries. Do NOT run any destructive Git commands (no commit, no push).

Your goal is to elevate the UI to a premium level. You will implement a 2-column desktop layout for the Dashboard, enforce strict accessibility (keyboard focus states and ARIA labels), and add fluid CSS transitions for theme toggling.

---

### Step 1: Desktop Layout for Dashboard (`DashboardPage.jsx`)

Update `src/pages/DashboardPage.jsx` to implement a responsive 2-column layout on desktop while preserving the stacked layout on mobile.

* **Container Layout:** Change the main content wrapper to a CSS Grid on medium/large screens (e.g., `flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-8 md:items-start`).
* **Left Column (Cards):** Wrap the `StreakCard` and `TodayTaskCard` in a `div` that spans 5 columns on desktop (`md:col-span-5 flex flex-col gap-6`).
* **Right Column (Progress Grid):** Place the `ProgressGrid` in a `div` that spans 7 columns on desktop (`md:col-span-7`).
* **Note:** The `StateSwitcher` should remain at the very bottom, spanning full width (`md:col-span-12`).

### Step 2: AppLayout Constraints & Scaling (`AppLayout.jsx`, `LandingPage.jsx`, `ChallengeDayPage.jsx`)

1. **`AppLayout.jsx`**: Ensure the `<main>` container uses `max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8` so the app is elegantly constrained on large monitors and doesn't stretch infinitely.
2. **`LandingPage.jsx`**: Upgrade typography to scale up on desktop. For example, make the Hero H1 `text-4xl md:text-5xl lg:text-6xl`. Ensure desktop padding is generous (`py-16 md:py-24`).
3. **`ChallengeDayPage.jsx`**: Ensure the form and brief don't stretch too wide on desktop (e.g., constrain their wrappers to `max-w-2xl mx-auto`).

### Step 3: Accessibility (a11y) & Focus States

Audit and update all interactive components to ensure flawless keyboard navigation.

1. **`Button.jsx`, `Input.jsx`, & `ThemeToggle**`: Add strict focus classes: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-primary)]` (or use your equivalent design token) to all interactive elements. Ensure ring offsets match the `--bg-app` or `--bg-surface` color contextually if possible, or use transparent offsets.
2. **`ProgressGrid.jsx`**: Ensure the interactive `<Link>` cells have explicit focus states so users can `Tab` through their history.
3. **ARIA Labels:** Ensure the Theme Toggle button has `aria-label="Toggle Dark Mode"`. Ensure any icon-only elements have screen-reader-only text (`sr-only`) or `aria-label`.

### Step 4: Smooth Theme Transitions

1. Update `src/index.css` (or apply utility classes to the root `AppLayout`) to ensure the transition between Light and Dark mode feels fluid.
2. Apply native CSS transitions to backgrounds and text: e.g., `* { transition-property: color, background-color, border-color; transition-duration: 200ms; transition-timing-function: ease-in-out; }` (Implement this safely so it doesn't cause performance lag on standard DOM paints, typically by targeting `body`, `#root`, cards, and text explicitly rather than the universal `*` selector if possible).

---

### Step 5: Acceptance Criteria & Output

1. Running `npm run dev` serves the app without errors.
2. **Desktop Check:** The Dashboard displays the left/right 2-column layout correctly on a wide screen, constrained nicely within the `max-w-5xl` container.
3. **Mobile Check:** The Dashboard remains perfectly stacked at 390px width with no horizontal overflow.
4. **Keyboard Test:** Pressing `Tab` repeatedly cycles through every button, link, and input, highlighting them with a clear, accessible focus ring.
5. **Theme Check:** Toggling the theme creates a smooth, 200ms crossfade of colors rather than a jarring instant flash.
6. Running `npm run build` succeeds with zero errors.

When completed:

1. Run `git status` so the user can review the modified files.
2. Provide a concise summary containing:
* **Files Modified:** [List files]
* **Build Status:** [Pass / Fail]
* **Git Status Output:** [Exact `git status` text]



### Chapter 9: Final Polish & QA

**Context & Goal:**
You are the implementation agent for the ABTalks redesign project. We are in the **Chapter 9: Final Polish & QA** phase.
Your goal is to execute UI/UX polish across navigation, a premium neutral base with a controlled colorful accent system, native CSS micro-interactions, and a specific button styling fix on the Landing Page.

**Strict Boundaries:**

* Do NOT add new features, change mock data, or change routing architecture.
* Do NOT install dependencies or modify Tailwind configuration.
* Do NOT break the existing 390px mobile layout or desktop constraints.
* Do NOT remove the Judge Tools.
* Do NOT rewrite working functionality.
* Preserve accessibility and visible keyboard focus states.
* Do NOT run any Git commands except `git status` at the very end (No commit, no push).

---

### Step 1: Navigation Fix (`Navbar.jsx`)

* Update `src/components/layout/Navbar.jsx`.
* Wrap the "ABTalks" brand/logo text in a React Router `<Link to="/">` to provide a globally accessible "Back to Home" route. Ensure it has clear focus states (`focus-visible:ring-2`).

---

### Step 2: The 80/20 Visual Redesign (Monochrome Base + Colorful Accents)

Update the CSS variables in `src/index.css`. The UI must maintain an 80-90% neutral foundation, introducing a carefully controlled 10-20% colorful accent system. **Do not use pure `#000000` or `#FFFFFF` as large backgrounds.** Do not scatter raw hex colors throughout JSX.

* **1. Neutral Foundation (80-90% of UI):**
* **Light Mode:** Soft off-white backgrounds (`--bg-app`: e.g., `#F4F4F5` or `#F9FAFB`), slightly elevated surfaces (`--bg-surface`: e.g., `#FCFCFC`), deep charcoal text (`--text-primary`: `#18181B`), medium gray text (`--text-secondary`: `#52525B`), soft gray borders (`--border-subtle`: `#E4E4E7`).
* **Dark Mode:** Deep charcoal/zinc backgrounds (`--bg-app`: e.g., `#09090B`), elevated charcoal surfaces (`--bg-surface`: `#18181B`), soft off-white text (`--text-primary`: `#FAFAFA`), muted gray text (`--text-secondary`: `#A1A1AA`), dark gray borders (`--border-subtle`: `#27272A`).


* **2. Controlled Colorful Accents (10-20% of UI):**
* `--accent-primary` (Indigo/Violet): Use for primary CTAs, links, and selected states. Must have excellent contrast.
* `--status-success` (Emerald): Use for completed challenges, streak success, and positive feedback.
* `--status-warning` (Amber): Use for missed-day states and warnings.
* `--status-error` (Red): Use only for actual errors.
* `--accent-special` (Violet): Introduce this token subtly for the Smart LinkedIn Builder so it feels distinct.



---

### Step 3: Component Application & CTA Fix

Apply these design tokens consistently across the application:

* **Dashboard (`DashboardPage.jsx` & components):** Cards remain predominantly neutral. Streak/Completed cells use emerald. Missed cells use amber. Pending/current day cells use the primary indigo/violet accent. Locked days remain neutral gray.
* **Challenge Day (`ChallengeDayPage.jsx` & components):** Task Brief is neutral. Smart LinkedIn Builder uses the `--accent-special` violet accent/border. Submit button uses primary indigo. Success state uses emerald.
* **Buttons (`Button.jsx`):** Primary buttons use the accent color. Secondary/Outline/Ghost buttons remain neutral with subtle accent hovers.
* **Landing Page CTA Fix (`LandingPage.jsx`):**
* I need ONE very specific CSS-only change here. Make the secondary "View Dashboard" button visually EXACTLY match the "Start the 60-Day Challenge" button (background, text color, border, hover state, active state, focus-visible state, and transitions).
* *CRITICAL RULE FOR THIS FIX:* Do NOT change the "View Dashboard" button's size, padding, width, height, font size, font weight, position, layout, or text. Only copy/adapt the existing visual CSS colors/styling from the primary button to the secondary one.



---

### Step 4: UX Polish & Animations (Native CSS Only)

Implement subtle, premium micro-interactions. Use `motion-safe:` prefixes or CSS media queries to respect `prefers-reduced-motion`.

1. **Global Page Entrance:** Add a keyframe in `index.css` for a subtle fade-in-up effect (e.g., opacity 0 to 1, translate Y from 10px to 0 over 400ms). Apply this to `<main>` in `AppLayout.jsx` or page wrappers.
2. **Button Interactions:** Add `motion-safe:transition-all motion-safe:duration-200` and a subtle press-down effect (`active:scale-[0.98]`).
3. **Card Interactions:** Add a very subtle hover lift or border highlight (`hover:border-[var(--border-strong)]`) for interactive cards, keeping it understated.
4. **Grid Interactions (`ProgressGrid.jsx`):** Ensure interactive cells have a smooth hover scale (`hover:scale-110 hover:z-10`).
5. **Clipboard Feedback:** Ensure the "Copied!" feedback transition on the Smart LinkedIn Builder feels smooth.

---

### Step 5: Final Validation & Output

1. Check the 390px mobile layout across `/`, `/dashboard`, and `/day/2` to ensure zero horizontal overflow and no broken components.
2. Verify `focus-visible` rings remain highly visible against the new neutral backgrounds.
3. Execute `npm run build` to ensure the build completes with zero errors.
4. Execute `git status`.

**Output Requirements:**
Provide a concise summary:

* **Files Modified:** [List files]
* **Design System Summary:** [Briefly explain the implemented neutral/accent token structure]
* **Landing Page Fix:** [Confirm exactly which classes were updated on the View Dashboard button]
* **Build Status:** [Pass / Fail output of `npm run build`]
* **Git Status Output:** [Exact `git status` text]