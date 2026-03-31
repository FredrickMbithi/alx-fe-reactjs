# ALX Frontend - React.js Learning Projects

Collection of React.js projects and exercises from the ALX Software Engineering program, demonstrating progressive mastery of React concepts from basics to advanced patterns.

## 📚 Projects Overview

This repository contains **9 React projects** covering:

1. **alx-react-app** — Basic React setup and components
2. **alx-react-app-new** — React fundamentals practice
3. **alx-react-app-props** — Props and component communication
4. **my-company** — Company website with React
5. **recipe-sharing-app** — Recipe management application
6. **recipe-sharing-platform** — Full-featured recipe platform
7. **github-user-search** — GitHub API integration
8. **tailwind-react-integration** — Styling with Tailwind CSS
9. **[Additional projects as subdirectories]**

## 🎯 Learning Objectives

### Core React Concepts
- Component architecture (functional & class components)
- Props and state management
- Event handling
- Conditional rendering
- Lists and keys
- Forms and controlled components

### Advanced Topics
- React Hooks (useState, useEffect, useContext, custom hooks)
- Component lifecycle
- API integration and data fetching
- Routing with React Router
- Styling approaches (CSS Modules, Tailwind CSS)
- State management patterns

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm/yarn
- Git

### Running Projects

```bash
# Clone repository
git clone https://github.com/FredrickMbithi/alx-fe-reactjs.git
cd alx-fe-reactjs

# Navigate to any project
cd alx-react-app

# Install dependencies
npm install

# Start development server
npm start
```

Access at: http://localhost:3000

## 📁 Project Descriptions

### 1. alx-react-app
**Focus:** React fundamentals
- Component creation
- JSX syntax
- Basic styling

### 2. alx-react-app-props
**Focus:** Component communication
- Passing props
- Props validation (PropTypes)
- Default props
- Children props

### 3. recipe-sharing-app / recipe-sharing-platform
**Focus:** Full CRUD application
- Recipe creation and management
- Form handling
- State management
- Search and filtering
- Responsive design

**Features:**
- Add/edit/delete recipes
- View recipe details
- Search recipes by name/ingredients
- Favorite recipes
- User authentication (if implemented)

### 4. github-user-search
**Focus:** API integration
- Fetching data from GitHub API
- Loading states
- Error handling
- Debouncing search input
- Displaying user profiles and repositories

**Key Skills:**
- `fetch` / `axios` usage
- useEffect for side effects
- Conditional rendering based on API state

### 5. my-company
**Focus:** Multi-page website
- React Router implementation
- Navigation components
- About/Services/Contact pages
- Layout components

### 6. tailwind-react-integration
**Focus:** Modern styling
- Tailwind CSS setup with React
- Utility-first CSS approach
- Responsive design
- Component styling patterns

## 🛠️ Technologies Used

- **React 18.x** — Core library
- **React Router** — Client-side routing
- **Tailwind CSS** — Utility-first styling
- **Axios** — HTTP client (some projects)
- **PropTypes** — Runtime type checking
- **Create React App** / **Vite** — Build tools

## 📖 Concepts Demonstrated

### Component Patterns
```jsx
// Functional Component with Hooks
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);
  
  if (loading) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}
```

### State Management
```jsx
// useState for local state
const [count, setCount] = useState(0);

// useReducer for complex state
const [state, dispatch] = useReducer(reducer, initialState);
```

### Event Handling
```jsx
function Form() {
  const [value, setValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 🎓 ALX Program Context

These projects are part of the **ALX Software Engineering Frontend Specialization**, structured to build skills progressively:

**Week 1-2:** React basics  
**Week 3-4:** Props and component composition  
**Week 5-6:** State management and hooks  
**Week 7-8:** Routing and API integration  
**Week 9-10:** Advanced patterns and styling

## 📝 Development Best Practices

Each project demonstrates:
- Clean component structure
- Proper file organization
- Meaningful component names
- Comments for complex logic
- Consistent code formatting
- Error boundary implementation (where applicable)

## 🧪 Testing (If Implemented)

Some projects may include:
- Unit tests with Jest
- Component tests with React Testing Library
- Integration tests

Run tests:
```bash
npm test
```

## 🔗 Related Repositories

- [alx_be_python](https://github.com/FredrickMbithi/alx_be_python) — Backend Python projects
- [Alx_DjangoLearnLab](https://github.com/FredrickMbithi/Alx_DjangoLearnLab) — Django learning projects

## 📚 Resources

**Official Docs:**
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

**Learning Resources:**
- ALX React curriculum
- React official tutorial
- Frontend Masters courses

## 📄 License

Educational projects - MIT License

## 👤 Author

Fredrick Mbithi  
ALX Software Engineering Student

---

**Program:** ALX Software Engineering - Frontend Track  
**Framework:** React.js 18+  
**Focus:** Component-Based UI Development  
**Status:** Progressive Learning Projects
