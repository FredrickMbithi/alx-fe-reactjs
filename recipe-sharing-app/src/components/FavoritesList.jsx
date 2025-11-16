import { Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'

function FavoritesList() {
  const favorites = useRecipeStore((s) => s.favorites)
  const recipes = useRecipeStore((s) => s.recipes)
  const favRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean)

  if (favRecipes.length === 0) return null

  return (
    <div style={{ marginTop: 24 }}>
      <h2>My Favorites</h2>
      {favRecipes.map((r) => (
        <div key={r.id} style={{ padding: '6px 0' }}>
          <Link to={`/recipe/${r.id}`}>{r.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList
