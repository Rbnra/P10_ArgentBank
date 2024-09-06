import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SignIn } from './pages/SignIn/SignIn';
import { Profil } from './pages/Profil/Profil';
import './index.css';


/** Composant principal de l'application. */
export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profil />} />
      </Routes>
    </Router>
  );
}



