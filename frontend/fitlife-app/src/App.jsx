import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import ClientDashboard from './pages/ClientDashboard';
import PTDashboard from './pages/PTDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/client" element={<ClientDashboard />} />
              <Route path="/pt" element={<PTDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
