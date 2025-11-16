import create from 'zustand'

export const useRecipeStore = create((set, get) => ({
  // Core state
  recipes: [],
  setRecipes: (recipes) => {
    set({ recipes })
    get().filterRecipes()
  },
  addRecipe: (newRecipe) => {
    set((state) => ({ recipes: [...state.recipes, newRecipe] }))
    get().filterRecipes()
  },
  deleteRecipe: (id) => {
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) }))
    get().filterRecipes()
  },
  updateRecipe: (updated) => {
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updated.id ? { ...r, ...updated } : r)),
    }))
    get().filterRecipes()
  },

  // Search / filtering
  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term })
    get().filterRecipes()
  },
  filteredRecipes: [],
  filterRecipes: () => {
    const { recipes, searchTerm } = get()
    const filtered = searchTerm
      ? recipes.filter((r) => r.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : recipes
    set({ filteredRecipes: filtered })
  },

  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),

  // Recommendations (mock)
  recommendations: [],
  generateRecommendations: () => {
    const { recipes, favorites } = get()
    const recommended = recipes
      .filter((r) => !favorites.includes(r.id) && Math.random() > 0.5)
      .slice(0, 5)
    set({ recommendations: recommended })
  },
}))
