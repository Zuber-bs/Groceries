import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkKmuxxe0UoL_yWnXJvxqw_NkH2a1P1C4",
    authDomain: "groceries-8120d.firebaseapp.com",
    projectId: "groceries-8120d",
    storageBucket: "groceries-8120d.appspot.com",
    messagingSenderId: "447253206681",
    appId: "1:447253206681:web:cb5072790731635e104a08"
}

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);