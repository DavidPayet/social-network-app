import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import CreateMessage from '../components/CreateMessage';
import MessageList from '../components/MessageList';
import ConnectionPage from '../pages/ConnectionPage';

import firebase, { FirebaseContext } from '../firebase';
import useAuth from '../hooks/useAuth';


const App = () => {
  const user = useAuth()
  return (

    <FirebaseContext.Provider value={{ user, firebase }}>
      {user ? (
        <div className="home">
          <img className="logo" src="/medias/logo1.1-2.png" alt="logo" />
          <div className='App'>
            <Header />
            <CreateMessage />
            <MessageList />
          </div>
        </div>
      ) : (
          <ConnectionPage />
        )}
    </FirebaseContext.Provider>
  )
}

export default App
