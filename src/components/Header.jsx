import React, { useContext } from 'react';
import FirebaseContext from '../firebase/context';

const Header = () => {
  const { firebase } = useContext(FirebaseContext)
  return (
    <div className="header">
      <h1 className="header-title">2PY1F</h1>
      <button
        onClick={() => firebase.logout()}
        className="logout-btn"
        type="button">
        Logout
      </button>
    </div>
  );
};

export default Header;