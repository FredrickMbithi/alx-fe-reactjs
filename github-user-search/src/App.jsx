import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            GitHub User Search
          </h1>
          <p className="text-center mt-2 text-blue-100">
            Search for GitHub users and explore their profiles
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Search />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-300">
            Powered by GitHub API | Built with React & Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 GitHub User Search Application
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
