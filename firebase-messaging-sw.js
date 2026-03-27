importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Senin Firebase Bilgilerin
const firebaseConfig = {
  apiKey: "AIzaSyDEIIFHQc3zm_7ocGGWZZd4FO_hScblYyY",
  authDomain: "focusbases-e967a.firebaseapp.com",
  projectId: "focusbases-e967a",
  storageBucket: "focusbases-e967a.firebasestorage.app",
  messagingSenderId: "541869127832",
  appId: "1:541869127832:web:161ad4bc95287d1ceff8cd"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Arka planda bildirim geldiğinde ne yapılacağı
messaging.onBackgroundMessage((payload) => {
  console.log('Arka plan mesajı alındı:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
