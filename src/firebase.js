import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvI2ok2dAPUsXFZ1y2QOlM0tq5NfC1P-Y",
  authDomain: "chat-app-cc8f5.firebaseapp.com",
  projectId: "chat-app-cc8f5",
  storageBucket: "chat-app-cc8f5.appspot.com",
  messagingSenderId: "650699842588",
  appId: "1:650699842588:web:fe2a84560cd748540bebd9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;