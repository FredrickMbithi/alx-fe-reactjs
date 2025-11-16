import { Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'

function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations)
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations)

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <h2 style={{ margin: 0 }}>Recommendations</h2>
        <button onClick={generateRecommendations}>Refresh</button>
      </div>
      {recommendations.length === 0 ? (
        <p style={{ color: '#777' }}>No recommendations yet. Click Refresh.</p>
      ) : (
        recommendations.map((r) => (
          <div key={r.id} style={{ padding: '6px 0' }}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default RecommendationsList
