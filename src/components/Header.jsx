import React, { useContext } from 'react';
//import { FaFacebook } from 'react-icons/fa';
import FirebaseContext from '../firebase/context';

const Header = () => {
  const { /* user,  */firebase } = useContext(FirebaseContext)
  return (
    <div className="header">
      <h1 className="header-title">2PY1F</h1>
      {/* {user ? ( */}
      <button
        onClick={() => firebase.logout()}
        className="logout-btn"
        type="button">
        Logout
      </button>{/* 
      ) : (
        <button
          onClick={() => firebase.login('facebook')}
          className="login-btn"
          type="button">
          <FaFacebook /> Login
        </button>
        )} */}
    </div>
  );
};

export default Header;