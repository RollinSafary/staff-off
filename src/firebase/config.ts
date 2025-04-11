import {
  initializeApp,
  getApps,
  FirebaseOptions,
  FirebaseApp,
} from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getFunctions, Functions } from "firebase/functions";

// Basic Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "",
};

// Initialize these as null with proper types
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let functions: Functions | null = null;

try {
  // Check if Firebase is already initialized
  if (!getApps().length) {
    // Only initialize if we have an API key
    if (firebaseConfig.apiKey) {
      app = initializeApp(firebaseConfig);
      // Firebase initialized successfully
    } else {
      // Firebase not initialized - missing API key
    }
  } else {
    // Firebase already initialized
  }

  // Initialize services if app exists
  if (app) {
    auth = getAuth(app);
    db = getFirestore(app);
    functions = getFunctions(app);
  }
} catch (error) {
  // Error initializing Firebase
}

export { auth, db, functions };
export default app;
