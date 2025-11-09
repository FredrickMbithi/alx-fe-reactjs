import UserInfo from './UserInfo';
import UserProfile from './UserProfile';

function ProfilePage() {
  return (
    <div style={{ padding: '20px' }}>
      <UserProfile />
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
