import { useState } from 'react';
import { fetchUserData, fetchAdvancedSearch } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchMode, setSearchMode] = useState('basic'); // 'basic' or 'advanced'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);
    setSearchResults([]);

    try {
      // Determine if it's basic or advanced search
      const isAdvanced = location || minRepos;
      
      if (isAdvanced) {
        setSearchMode('advanced');
        const results = await fetchAdvancedSearch({
          username,
          location,
          minRepos: minRepos ? parseInt(minRepos) : null
        });
        setSearchResults(results);
        if (results.length === 0) {
          setError(true);
        }
      } else {
        setSearchMode('basic');
        if (!username.trim()) {
          setError(true);
          setLoading(false);
          return;
        }
        const data = await fetchUserData(username);
        setUserData(data);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Search GitHub Users</h2>
        
        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter GitHub username"
          />
        </div>

        {/* Advanced Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Location Input */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location (Advanced)
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Nairobi"
            />
          </div>

          {/* Minimum Repositories Input */}
          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Repositories (Advanced)
            </label>
            <input
              type="number"
              id="minRepos"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 10"
              min="0"
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="text-center py-8">
          <p className="text-red-600">Looks like we cant find the user</p>
        </div>
      )}

      {/* Basic Search Results */}
      {!loading && !error && userData && searchMode === 'basic' && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {userData.name || userData.login}
              </h3>
              <p className="text-gray-600 mb-2">@{userData.login}</p>
              {userData.bio && (
                <p className="text-gray-700 mb-4">{userData.bio}</p>
              )}
              {userData.location && (
                <p className="text-gray-600 mb-2">
                  📍 {userData.location}
                </p>
              )}
              <div className="flex gap-4 justify-center md:justify-start mb-4">
                <span className="text-gray-600">
                  <strong>{userData.public_repos}</strong> repos
                </span>
                <span className="text-gray-600">
                  <strong>{userData.followers}</strong> followers
                </span>
                <span className="text-gray-600">
                  <strong>{userData.following}</strong> following
                </span>
              </div>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Search Results */}
      {!loading && !error && searchResults.length > 0 && searchMode === 'advanced' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200"
            >
              <div className="flex flex-col items-center">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {user.login}
                </h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
