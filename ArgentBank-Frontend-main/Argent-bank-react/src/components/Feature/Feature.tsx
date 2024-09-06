import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

/** Composant pour les éléments de la section "features" de la page d'accueil. */
export const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
