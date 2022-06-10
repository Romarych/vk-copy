import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './components/routers/Routers';
import './index.css';
import * as firebase from 'firebase/app';
import { AuthProvider } from './components/providers/AuthProvider';
// import 'firebase/firestore';
// import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyD5VeOGl5Vg7PRHJVccPhhujBF6WxfRKwQ",
  authDomain: "vk-copy-ce390.firebaseapp.com",
  projectId: "vk-copy-ce390",
  storageBucket: "vk-copy-ce390.appspot.com",
  messagingSenderId: "275441985381",
  appId: "1:275441985381:web:cbc132c7b54443ebeb638c"
});

// interface IContext {}

// const FireBaseContext = createContext<IContext>(null)

// const auth = firebase.auth()
// const fireStore = firebase.firestore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routers />
    </AuthProvider>
  </React.StrictMode>
);

