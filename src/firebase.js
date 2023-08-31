
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5_MGIi5E1DgrnYWL2hxkEKSW7ZIRQac4",
  authDomain: "laundry-app-73cf2.firebaseapp.com",
  projectId: "laundry-app-73cf2",
  storageBucket: "laundry-app-73cf2.appspot.com",
  messagingSenderId: "664897534799",
  appId: "1:664897534799:web:4c470d79cde13c69b7233a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;