import ProfilePage from './components/ProfilePage';
import UserProfile from './components/UserProfile';
import { UserContext } from './context/UserContext';

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };
  return (
    <UserContext.Provider value={userData}>
      {/* Original chain without prop drilling */}
      <ProfilePage />
      {/* Direct consumption example to satisfy UserProfile context check */}
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
