import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find recipe by ID from the data
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h2>
        <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          ← Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors">
            🍳 Recipes
          </Link>
          <Link
            to="/"
            className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            ← Back to all recipes
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4">
        {/* Recipe Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{recipe.summary}</p>
          </div>
        </div>

        {/* Recipe Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🥘</span> Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700"
                >
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📝</span> Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions && recipe.instructions.map((step, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
          >
            ← Back to All Recipes
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-sm opacity-80">© 2024 Recipe Sharing Platform. Made with ❤️ and React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default RecipeDetail;
