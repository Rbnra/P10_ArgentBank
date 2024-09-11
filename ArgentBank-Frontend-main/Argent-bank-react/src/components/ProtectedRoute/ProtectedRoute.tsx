import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../app/store';

//Composant pour les routes protégées , ici la route protégée est celle du profil
 export const ProtectedRoute: React.FC = () => {
    const { isAuthenticated} = useSelector((state: RootState) => state.auth);
  

  // Si l'utilisateur n'est pas authentifié, on le redirige vers la page de connexion
  //S'il est authentifié on affiche les composants enfants de la route protégée
  //le composant Outlet de react-router-dom permet d'afficher les composants enfants de la route protégée
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};
