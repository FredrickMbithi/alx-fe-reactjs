const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{name}</h2>
      <p style={{ fontSize: '16px' }}>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
