import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '400px' }}>
      <h2 style={{ color: '#333', marginBottom: '15px' }}>Main Content</h2>
      <p style={{ lineHeight: '1.6', color: '#666' }}>
        This is the main content area where you can display your application's primary information.
      </p>
      <UserProfile 
        name="Alice Johnson" 
        age={28} 
        bio="Loves traveling and photography" 
      />
      <UserProfile 
        name="Bob Smith" 
        age={35} 
        bio="Software developer and coffee enthusiast" 
      />
    </main>
  );
}

export default MainContent;
