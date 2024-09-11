import React, { useState, useEffect } from 'react';
import './EditUserInfo.scss'; // Fichier SCSS pour le style
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { cancelProfileEdit, updateUserProfile } from '../../app/feature/authSlice';

export const EditUserInfo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { userProfile, loading, error } = useSelector((state: RootState) => state.auth);

  // Variable d'état pour le userName
  const [userName, setUserName] = useState('');

  // Variables d'état pour firstName et lastName (désactivés)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Effet pour mettre à jour les champs locaux lorsque le userProfile est mis à jour
  useEffect(() => {
    if (userProfile) {
      setUserName(userProfile.userName || '');
      setFirstName(userProfile.firstName || '');
      setLastName(userProfile.lastName || '');
    }
  }, [userProfile]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Dispatch de l'action pour mettre à jour le userName
      //unwrap() est utilisé pour retirer les métadonnées Redux et obtenir directement le résultat de l'action (succès ou échec).
      await dispatch(updateUserProfile(userName)).unwrap();
      console.log('UserName updated successfully');
    } catch (error) {
      // Gestion des erreurs si la mise à jour échoue
      console.error('Error while updating user profile:', error);
    }
  };
  

  const handleCancel = () => {
    // Annuler l'édition du profil
    dispatch(cancelProfileEdit());
  };

  //Messages de chargement et d'erreur
  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading profile: {error}</p>;

  return (
    <form className="edit-user-info" onSubmit={handleSave}>
      <h1>Edit user info</h1>
      <div className='form-element'>
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" value={firstName} disabled />
      </div>
      <div className='form-element'>
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" value={lastName} disabled />
      </div>
      <div className="button-container">
        <button type="submit" className="save-button">Save</button>
        <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
};
