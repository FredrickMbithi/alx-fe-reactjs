import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const user = useContext(UserContext);
  return (
    <div style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '8px', maxWidth: '340px', margin: '10px auto' }}>
      <h2 style={{ color: '#2c3e50', margin: '0 0 8px 0' }}>{user.name}</h2>
      <p style={{ margin: 0 }}><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
