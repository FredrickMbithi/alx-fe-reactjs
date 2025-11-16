import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

function RecipeList() {
  const searchTerm = useRecipeStore((s) => s.searchTerm)
  const recipes = useRecipeStore((s) => (s.searchTerm ? s.filteredRecipes : s.recipes))
  const favorites = useRecipeStore((s) => s.favorites)
  const addFavorite = useRecipeStore((s) => s.addFavorite)
  const removeFavorite = useRecipeStore((s) => s.removeFavorite)

  return (
    <div>
      {recipes.map((recipe) => {
        const isFav = favorites.includes(recipe.id)
        return (
          <div
            key={recipe.id}
            style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8, marginBottom: 10 }}
          >
            <h3 style={{ margin: '0 0 6px 0' }}>{recipe.title}</h3>
            <p style={{ margin: '0 0 10px 0', color: '#555' }}>{recipe.description}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/recipe/${recipe.id}`}>View</Link>
              {!isFav ? (
                <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
              ) : (
                <button onClick={() => removeFavorite(recipe.id)}>Unfavorite</button>
              )}
            </div>
          </div>
        )
      })}
      {recipes.length === 0 && (
        <p style={{ color: '#777' }}>
          {searchTerm ? 'No recipes match the search.' : 'No recipes yet. Add one above.'}
        </p>
      )}
    </div>
  )
}

export default RecipeList
