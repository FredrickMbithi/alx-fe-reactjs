import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()
  const handleDelete = () => {
    deleteRecipe(id)
    navigate('/')
  }
  return (
    <button onClick={handleDelete} style={{ marginLeft: 8 }}>
      Delete
    </button>
  )
}

export default DeleteRecipeButton
