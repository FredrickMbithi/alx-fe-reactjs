import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);
  return (
    <div style={{ padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px', margin: '10px' }}>
      <h3 style={{ color: '#4CAF50' }}>User Details (via Context API)</h3>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
