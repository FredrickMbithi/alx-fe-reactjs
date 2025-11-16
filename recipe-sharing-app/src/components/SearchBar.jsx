import { useRecipeStore } from '../store/recipeStore'

function SearchBar() {
  const searchTerm = useRecipeStore((s) => s.searchTerm)
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm)

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '100%', padding: 8, marginBottom: 16 }}
    />
  )
}

export default SearchBar
