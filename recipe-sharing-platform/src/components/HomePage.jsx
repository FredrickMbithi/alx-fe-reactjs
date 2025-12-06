import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data from the JSON file
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Recipe Sharing Platform</h1>
          <p className="text-lg opacity-90">Discover and share delicious recipes</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors">
            🍳 Recipes
          </Link>
          <Link
            to="/add-recipe"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            + Add Recipe
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Recipes</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Recipe Image */}
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Recipe Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{recipe.summary}</p>
              </div>

              {/* View Recipe Button */}
              <div className="px-4 pb-4">
                <span className="inline-block w-full text-center bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
                  View Recipe →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found. Add your first recipe!</p>
            <Link
              to="/add-recipe"
              className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Add Recipe
            </Link>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="text-sm opacity-80">© 2024 Recipe Sharing Platform. Made with ❤️ and React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
