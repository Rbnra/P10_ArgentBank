import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/argentBankLogo.png';
import { AppDispatch, RootState } from '../../app/store';
import { logout } from '../../app/feature/authSlice';

/** Composant pour la barre de navigation. */
export const NavBar: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { isAuthenticated, userProfile } = useSelector((state: RootState) => state.auth);
    const [userName, setUsername] = useState('');

    const handleLogout = () => {
        dispatch(logout());  // Dispatche l'action de déconnexion
    };

    useEffect(() => {
        if (isAuthenticated) {
            setUsername(userProfile?.userName || '');
        }
    }, [isAuthenticated, userProfile?.userName]);

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
                            {userName}
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
