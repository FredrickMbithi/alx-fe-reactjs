# GitHub User Search Application

A React-based web application that allows users to search for GitHub profiles using the GitHub API with advanced filtering capabilities.

## Features

- **Basic Search**: Search for GitHub users by username
- **Advanced Search**: Filter users by:
  - Location
  - Minimum repository count
- **User Profiles**: View detailed information including:
  - Avatar
  - Name and username
  - Bio
  - Location
  - Repository count
  - Followers/Following count
  - Direct link to GitHub profile
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly UI

## Tech Stack

- **React 18** with Vite
- **Axios** for API requests
- **Tailwind CSS** for styling
- **GitHub REST API**

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Key (Optional)

For higher rate limits, create a `.env` file:

```bash
cp .env.example .env
```

Then add your GitHub personal access token:

```
VITE_APP_GITHUB_API_KEY=your_token_here
```

Get a token from: https://github.com/settings/tokens

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 4. Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── Search.jsx          # Main search component
├── services/
│   └── githubService.js    # GitHub API integration
├── App.jsx                 # Main app with layout
├── main.jsx               # Entry point
└── index.css              # Tailwind directives
```

## Usage

### Basic Search

1. Enter a GitHub username
2. Click "Search"
3. View the user's profile details

### Advanced Search

1. Enter optional username
2. Add filters:
   - Location (e.g., "Nairobi")
   - Minimum repositories (e.g., "10")
3. Click "Search"
4. Browse multiple matching users

## API Endpoints Used

- `GET /users/{username}` - Fetch user details
- `GET /search/users?q={query}` - Advanced search with filters

## Error Handling

- Displays "Loading..." during API requests
- Shows "Looks like we cant find the user" for:
  - User not found (404)
  - No search results
  - API errors

## License

MIT
