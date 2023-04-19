import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbS5QlbqHqfGAZYw4YQop01Zjgu7sOHZo",
  authDomain: "netflix-mern-bf0dd.firebaseapp.com",
  projectId: "netflix-mern-bf0dd",
  storageBucket: "netflix-mern-bf0dd.appspot.com",
  messagingSenderId: "722761318292",
  appId: "1:722761318292:web:3a5f78d863fe7377b45981",
  measurementId: "G-4B9BS0QWCS",
};
// Initialize Firebase and storage
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
