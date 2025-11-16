import { useState, useEffect } from 'react'
import { useRecipeStore } from '../store/recipeStore'

function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const [title, setTitle] = useState(recipe?.title ?? '')
  const [description, setDescription] = useState(recipe?.description ?? '')

  useEffect(() => {
    setTitle(recipe?.title ?? '')
    setDescription(recipe?.description ?? '')
  }, [recipe])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!recipe) return
    updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() })
  }

  if (!recipe) return null

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', width: '100%', padding: 8, minHeight: 80, marginBottom: 8 }}
      />
      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditRecipeForm
