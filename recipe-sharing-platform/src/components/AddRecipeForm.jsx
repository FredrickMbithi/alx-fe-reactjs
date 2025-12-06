import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddRecipeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientList = formData.ingredients.split('\n').filter((i) => i.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients';
      }
    }

    // Preparation steps validation
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    } else if (formData.steps.trim().length < 20) {
      newErrors.steps = 'Please provide more detailed instructions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Recipe submitted:', formData);
      setSubmitted(true);

      // Reset form after short delay
      setTimeout(() => {
        setFormData({ title: '', ingredients: '', steps: '' });
        setSubmitted(false);
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors">
            🍳 Recipes
          </Link>
          <Link
            to="/"
            className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            ← Back to recipes
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Add New Recipe</h1>
          <p className="text-gray-600 mb-6">Share your favorite recipe with the community</p>

          {/* Success Message */}
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
              <p className="font-medium">🎉 Recipe submitted successfully!</p>
              <p className="text-sm">Redirecting to home page...</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Grandma's Apple Pie"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.title
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-orange-200 focus:border-orange-500'
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
                Ingredients * <span className="text-gray-400 font-normal">(one per line)</span>
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows={5}
                placeholder="e.g.,&#10;2 cups flour&#10;1 cup sugar&#10;3 apples, sliced"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                  errors.ingredients
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-orange-200 focus:border-orange-500'
                }`}
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-2">
                Preparation Steps *
              </label>
              <textarea
                id="steps"
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                rows={6}
                placeholder="Describe the cooking process step by step..."
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                  errors.steps
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:ring-orange-200 focus:border-orange-500'
                }`}
              />
              {errors.steps && (
                <p className="mt-1 text-sm text-red-500">{errors.steps}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={submitted}
                className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {submitted ? 'Submitting...' : 'Submit Recipe'}
              </button>
              <Link
                to="/"
                className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Cancel
              </Link>
            </div>
          </form>

          {/* Help Text */}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Fields marked with * are required
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-2xl mx-auto text-center px-4">
          <p className="text-sm opacity-80">© 2024 Recipe Sharing Platform. Made with ❤️ and React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default AddRecipeForm;
