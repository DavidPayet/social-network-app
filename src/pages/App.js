import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import CreateMessage from '../components/CreateMessage';
import MessageList from '../components/MessageList';

import firebase, { FirebaseContext } from '../firebase';
import useAuth from '../hooks/useAuth';


const App = () => {
  const user = useAuth()
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
    <div className='App'>
      <Header />
      <CreateMessage />
      <MessageList />
    </div>
    </FirebaseContext.Provider>
  )
}

export default App
