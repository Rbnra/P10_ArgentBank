import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SignIn } from './pages/SignIn/SignIn';
import { Profil } from './pages/Profil/Profil';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'; // Import de la route protégée
import './index.scss';

/** Composant principal de l'application */
export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* Protégez la route du profil avec le composant ProtectedRoute */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profil />} />
        </Route>
      </Routes>
    </Router>
  );
};
