import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#2c3e50', 
      padding: '15px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '20px', 
        margin: 0, 
        padding: 0,
        justifyContent: 'center'
      }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link></li>
        <li><Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;