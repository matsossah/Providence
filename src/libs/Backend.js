import firebase from 'firebase';

class Backend {
  store = null;
  messagesRef = null;
  uid = '';
  setStore(store) {
    this.store = store;
  }
  getStore() {
    return this.store;
  }
  init() {
    var config = {
      apiKey: "AIzaSyBA3T83xxByFY3RUFURcBDC30PnXXsK6QM",
      authDomain: "providence-ee8a2.firebaseapp.com",
      databaseURL: "https://providence-ee8a2.firebaseio.com",
      storageBucket: "providence-ee8a2.appspot.com",
      messagingSenderId: "843139229080"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getStore().setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
}

export default new Backend();
