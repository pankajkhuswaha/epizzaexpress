importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDKXP7nzM5t9XgJuS3UOCWJxP37lyLRvnU",
  authDomain: "epizza-express.firebaseapp.com",
  projectId: "epizza-express",
  storageBucket: "epizza-express.appspot.com",
  messagingSenderId: "455130932034",
  appId: "1:455130932034:web:2171a7caf8e99164e15edb",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
