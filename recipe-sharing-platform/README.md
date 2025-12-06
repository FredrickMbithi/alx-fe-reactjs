# Recipe Sharing Platform

A responsive Recipe Sharing Platform built with React and Tailwind CSS.

## Features

- **Home Page**: Browse all recipes in a responsive grid layout with hover effects
- **Recipe Detail Page**: View full recipe details including ingredients and cooking instructions
- **Add Recipe Form**: Submit new recipes with form validation
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Tailwind CSS Styling**: Modern utility-first CSS for consistent design

## Tech Stack

- React 18 (Vite)
- React Router DOM
- Tailwind CSS
- PostCSS & Autoprefixer

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── HomePage.jsx        # Main page with recipe grid
│   ├── RecipeDetail.jsx    # Individual recipe view
│   └── AddRecipeForm.jsx   # Form to add new recipes
├── data.json               # Mock recipe data
├── App.jsx                 # Router configuration
├── main.jsx               # Entry point
└── index.css              # Tailwind directives
```

## Pages

### Home Page (`/`)

- Displays all recipes in a responsive grid
- Recipe cards with image, title, and summary
- Hover effects for interactivity
- Link to add new recipe

### Recipe Detail (`/recipe/:id`)

- Full recipe information
- Ingredients list
- Step-by-step instructions
- Responsive layout

### Add Recipe (`/add-recipe`)

- Form with title, ingredients, and steps fields
- Client-side validation
- Responsive design
- Success feedback

## Tailwind CSS Integration

Tailwind is configured with:

- `tailwind.config.js` for customization
- `postcss.config.js` for processing
- Directives in `src/index.css`
