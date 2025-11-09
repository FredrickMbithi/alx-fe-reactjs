import './App.css';
import { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import { UserProvider } from './context/UserContext';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [view, setView] = useState('task1');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation for Demo */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#ecf0f1',
        borderBottom: '2px solid #bdc3c7',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 15px 0' }}>React Project Demo</h2>
        <button onClick={() => setView('task1')} style={{ margin: '5px', padding: '8px 15px' }}>Task 0 & 1</button>
        <button onClick={() => setView('task2')} style={{ margin: '5px', padding: '8px 15px' }}>Task 2</button>
        <button onClick={() => setView('task3')} style={{ margin: '5px', padding: '8px 15px' }}>Task 3</button>
      </div>

      {/* Task 0 & 1: Styled Components + Counter */}
      {view === 'task1' && (
        <div>
          <Header />
          <MainContent />
          <Counter />
          <Footer />
        </div>
      )}

      {/* Task 2: Context API Demo */}
      {view === 'task2' && (
        <UserProvider>
          <div style={{ padding: '20px' }}>
            <h1>Context API Example</h1>
            <p>User data is provided via Context, no prop drilling needed!</p>
            <ProfilePage />
          </div>
        </UserProvider>
      )}

      {/* Task 3: Company Website */}
      {view === 'task3' && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
