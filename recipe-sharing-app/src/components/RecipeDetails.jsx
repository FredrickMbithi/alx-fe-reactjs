import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

function RecipeDetails() {
  const { id } = useParams()
  const numericId = Number(id)
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === numericId))

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">{'<'} Back</Link>
      <h1 style={{ marginBottom: 8 }}>{recipe.title}</h1>
      <p style={{ color: '#555' }}>{recipe.description}</p>
      <div style={{ marginTop: 8 }}>
        <DeleteRecipeButton id={recipe.id} />
      </div>
      <h3 style={{ marginTop: 20 }}>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />
    </div>
  )
}

export default RecipeDetails
