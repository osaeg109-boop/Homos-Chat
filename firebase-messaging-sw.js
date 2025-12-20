importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js');

firebase.initializeApp({
  apiKey: "AIzaSyBEazcwOjQFvTTvKP7C-LltEOnIlkF54x0",
  authDomain: "chat-ab546.firebaseapp.com",
  databaseURL: "https://chat-ab546-default-rtdb.firebaseio.com",
  projectId: "chat-ab546",
  storageBucket: "chat-ab546.appspot.com",
  messagingSenderId: "1096336837314",
  appId: "1:1096336837314:web:2abe8434e5ced8ca1a895b"
});

const chatRef = firebase.database().ref('chat');

chatRef.limitToLast(1).on('child_added', snap => {
  const d = snap.val();
  if(!d.user.includes(localStorage.getItem('chatName'))){
    self.registration.showNotification(`رسالة جديدة من ${d.user}`, {
      body: d.text,
      icon: 'Logo.jpeg'
    });
  }
});
