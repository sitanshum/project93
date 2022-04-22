var firebaseConfig = {
      apiKey: "AIzaSyDFlXFiSqvuRpHiBVlpX4l1hEb371FFqTY",
      authDomain: "kwitter-2f463.firebaseapp.com",
      databaseURL: "https://kwitter-2f463-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f463",
      storageBucket: "kwitter-2f463.appspot.com",
      messagingSenderId: "27282758261",
      appId: "1:27282758261:web:d862f347ed1b18cd07b63c"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
