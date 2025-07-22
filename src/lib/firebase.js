import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoVDgpiJIAZwqXobi19MzUMAotXVhepiQ",
    authDomain: "furnx-ecommerce.firebaseapp.com",
    projectId: "furnx-ecommerce",
    storageBucket: "furnx-ecommerce.firebasestorage.app",
    messagingSenderId: "606994718740",
    appId: "1:606994718740:web:81c22e3bd088d83c068701",
    measurementId: "G-438PVFK1XQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);