import React from 'react';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import ToastContainer from './components/ToastContainer';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="App">
          <header style={{
            textAlign: 'center',
            padding: '20px',
            marginBottom: '30px',
            background: 'linear-gradient(135deg, rgba(255, 71, 87, 0.1) 0%, rgba(55, 66, 250, 0.1) 50%, rgba(46, 213, 115, 0.1) 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(255, 165, 2, 0.3)',
            backdropFilter: 'blur(10px)',
            animation: 'fadeInDown 1s ease-out',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 10
            }}>
              <ThemeToggle />
            </div>
            <h1 style={{
              background: 'linear-gradient(45deg, #ff4757, #3742fa, #2ed573, #ffa502)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '3em',
              margin: '0',
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
              animation: 'glow 2s ease-in-out infinite alternate'
            }}>
              ⚽ Real Madrid Player Statistics ⚽
            </h1>
            <p style={{
              color: '#ffa502',
              fontSize: '1.2em',
              margin: '10px 0 0 0',
              fontWeight: 'bold',
              animation: 'fadeIn 1.5s ease-out 0.5s both'
            }}>
              Powered by Om - Hala Madrid!
            </p>
          </header>
          <Dashboard />
          <footer style={{
            textAlign: 'center',
            padding: '20px',
            marginTop: '40px',
            color: '#ffa502',
            fontSize: '1.1em',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 165, 2, 0.2)'
          }}>
            <p>© 2026 Real Madrid Statistics App | Made with ❤️ for Los Blancos</p>
          </footer>
          <ToastContainer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;