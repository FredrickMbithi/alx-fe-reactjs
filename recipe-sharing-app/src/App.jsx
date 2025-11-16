import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useRecipeStore } from './components/recipeStore'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function Home() {
  const setRecipes = useRecipeStore((s) => s.setRecipes)

  // Seed some initial data on first load
  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Spaghetti Bolognese', description: 'Rich meat sauce with pasta.' },
      { id: 2, title: 'Chicken Curry', description: 'Spicy and creamy coconut curry.' },
      { id: 3, title: 'Avocado Toast', description: 'Toasted bread with smashed avocado.' },
    ])
  }, [setRecipes])

  return (
    <div style={{ maxWidth: 720, margin: '24px auto', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
