import * as Firebase from 'firebase/app';

function initFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyDDXj4WANVcGkNLMeZaREdp7y2_TaXirx8",
        authDomain: "santimille.firebaseapp.com",
        databaseURL: "https://santimille.firebaseio.com",
        projectId: "santimille",
        storageBucket: "santimille.appspot.com",
        appId: "1:476191856852:web:76689bfc975c73d6ad4341",
    };
    
    Firebase.initializeApp(firebaseConfig);
    
}

export { initFirebase, Firebase };