importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBt9waSp8PtKsBznhkMj4UhOKrQTP7nO-s",
  authDomain: "e-pizza-express.firebaseapp.com",
  projectId: "e-pizza-express",
  storageBucket: "e-pizza-express.appspot.com",
  messagingSenderId: "672137301661",
  appId: "1:672137301661:web:d8e08956f3f8a43e7b0e74",
  measurementId: "G-CZDSXWVH85",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
