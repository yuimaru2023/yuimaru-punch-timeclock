import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNhyVNkWi8h2q1hoSSncTlh_EQQ8dSdZQ",
    authDomain: "yuimaru-punch-timeclock.firebaseapp.com",
    projectId: "yuimaru-punch-timeclock",
    storageBucket: "yuimaru-punch-timeclock.appspot.com",
    messagingSenderId: "762359204483",
    appId: "1:762359204483:web:7bfbc74157ec33615ca9b6",
    measurementId: "G-T6FG470XPQ"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db