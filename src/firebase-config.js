import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAorTBzydDr8tpVkI5sCt--Lie3lwvIfWE",
    authDomain: "foodieapp-70fc5.firebaseapp.com",
    projectId: "foodieapp-70fc5",
    storageBucket: "foodieapp-70fc5.appspot.com",
    messagingSenderId: "533325508259",
    appId: "1:533325508259:web:23e2dd349552e3f92e5916",
    measurementId: "G-6ZGDTHJJHX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
