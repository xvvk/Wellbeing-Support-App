// fire base service worker
// Retrieve an instance of Firebase Messaging so that it can handle background messages.

importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js");

firebase.initializeApp({
    apiKey: "AIzaSyDKfjACn-kRlytcaLOxGSkSX6djQ_Si8EQ",
    authDomain: "cs317-group-project-bce35.firebaseapp.com",
    databaseURL: "https://cs317-group-project-bce35-default-rtdb.firebaseio.com/",
    projectId: "cs317-group-project-bce35",
    storageBucket: "cs317-group-project-bce35.appspot.com",
    messagingSenderId: "1024855949204",
    appId: "1:1024855949204:web:b73ae04fc2c11834851981"
});

const messaging = firebase.messaging();
//
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const payloadData = JSON.parse(payload.data.notification);
    const notificationTitle = payloadData.title;
    const notificationOptions = {
        body: payloadData.body,
        icon: './health.jpg'
    };
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions);
});


