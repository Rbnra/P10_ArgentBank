import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/argentBankLogo.png';
import { RootState } from '../../app/store';
import { logout } from '../../app/feature/authSlice';

/** Composant pour la barre de navigation. */
export const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Use useNavigate to redirect
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const handleLogout = () => {
    dispatch(logout());  // Dispatch logout action
    navigate('/sign-in');  // Redirect to sign-in page
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};