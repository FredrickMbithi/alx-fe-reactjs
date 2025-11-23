import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create axios instance with default headers
const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {},
});

/**
 * Fetch a specific user's detailed profile
 * @param {string} username - GitHub username
 * @returns {Promise} User data object
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error(`Failed to fetch user data: ${error.message}`);
  }
};

/**
 * Advanced search for GitHub users with filters
 * @param {Object} params - Search parameters
 * @param {string} params.username - Username to search
 * @param {string} params.location - User location filter
 * @param {number} params.minRepos - Minimum repository count
 * @returns {Promise} Array of user objects
 */
export const fetchAdvancedSearch = async ({ username, location, minRepos }) => {
  try {
    // Build query string
    let query = '';
    
    if (username) {
      query += username;
    }
    
    if (location) {
      query += `${query ? '+' : ''}location:${location}`;
    }
    
    if (minRepos) {
      query += `${query ? '+' : ''}repos:>${minRepos}`;
    }
    
    // If no query parameters provided, return empty results
    if (!query) {
      return [];
    }
    
    const response = await githubApi.get('/search/users', {
      params: { q: query }
    });
    
    return response.data.items || [];
  } catch (error) {
    if (error.response?.status === 422) {
      throw new Error('Invalid search query');
    }
    throw new Error(`Failed to search users: ${error.message}`);
  }
};
