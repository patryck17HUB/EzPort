// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCL4NhrzlbTlqwmG5wR6mcWLUvAdVtx44I",
  authDomain: "project-467750875455",
  databaseURL: "https://ezport-papus-default-rtdb.firebaseio.com/",
  projectId: "ezport-papus",
  appId: "1:467750875455:android:7b90712cc7bc700405e38a"
};

// Inicializa Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

export { database };
