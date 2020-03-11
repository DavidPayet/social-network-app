import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    /* this.githubProvider = new app.auth.GithubAuthProvider()
    this.googleProvider = new app.auth.GoogleAuthProvider() */
    this.twitterProvider = new app.auth.TwitterAuthProvider()
    this.db = app.firestore()
  }
  login = async provider => {
    await this.auth.signInWithPopup(this[`${provider}Provider`])
  }

  logout = async () => await this.auth.signOut()
}

const firebase = new Firebase()
 
export default firebase;