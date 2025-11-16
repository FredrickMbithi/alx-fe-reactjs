import { useState } from 'react'
import { useRecipeStore } from './recipeStore'

function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedTitle = title.trim()
    const trimmedDesc = description.trim()
    if (!trimmedTitle) return
    addRecipe({ id: Date.now(), title: trimmedTitle, description: trimmedDesc })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
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
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
