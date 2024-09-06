import React from 'react';

interface AccountProps {
  title: string;
  amount: string;
  description: string;
}

/**Composant pour les comptes dans la page utilisateur. */
export const Account: React.FC<AccountProps> = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}