import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import EventPage from './pages/EventPage';
import CoordinatorsPage from './pages/CoordinatorsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/coordinators" element={<CoordinatorsPage />} />
                    <Route path="/event/:id" element={<EventPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
