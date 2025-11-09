# ALX React App (Vite)

This project demonstrates core React fundamentals across four task domains: styling, state management, Context API, routing, and forms — all in a single Vite-powered application.

## Quick Start

```bash
# from project root
cd alx-react-app
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Feature Overview

| Task | Feature                         | Files                                                                                              |
| ---- | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 0    | Inline styled layout components | `src/components/Header.jsx`, `MainContent.jsx`, `Footer.jsx`, `UserProfile.jsx`                    |
| 1    | Counter with `useState`         | `src/components/Counter.jsx`                                                                       |
| 2    | Context API (no prop drilling)  | `src/context/UserContext.jsx`, `src/components/UserDetails.jsx`, `UserInfo.jsx`, `ProfilePage.jsx` |
| 3    | Routing + pages + form          | `src/components/Navbar.jsx`, `src/pages/{Home,About,Services,Contact}.jsx`                         |

The demo view switcher in `src/App.jsx` lets you toggle between Task groupings:

- Task 0 & 1: Styled components + Counter
- Task 2: Context API example
- Task 3: Company site with Router

## How It Works

### Styling

All components use inline style objects to satisfy the styling task without external CSS frameworks. A single global font family is applied at the App root.

### State (Counter)

`Counter.jsx` uses `useState` for local count, with Increment / Decrement / Reset actions and basic UI feedback.

### Context API

`UserProvider` supplies user data (`name`, `email`) via React Context, consumed in `UserDetails` without prop drilling through intermediate components (`UserInfo`, `ProfilePage`).

### Routing

`react-router-dom` v6 handles client-side routing. `Navbar` uses `<Link>` elements, and `App.jsx` renders `<Routes>` with four page components. The Contact page includes a controlled form using `useState`.

### Form Handling

`Contact.jsx` manages a `formData` object, updates controlled inputs via `handleChange`, and resets on submit with a simple alert.

## Extending

Ideas for incremental improvements:

- Add form validation (required fields, email pattern)
- Persist user context to `localStorage`
- Add a NotFound / 404 route
- Introduce a theme toggle (light/dark) via context

## Scripts

| Script            | Purpose                  |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Vite dev server    |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |

## Tech Stack

- React 18
- Vite 5
- react-router-dom 6

## Kali / Debian Tip

Avoid using `sudo` with npm. If you get permission errors, configure npm to use a user directory for global installs (`npm config set prefix "$HOME/.npm"`).

## License

Educational sample code — adapt freely for learning purposes.
