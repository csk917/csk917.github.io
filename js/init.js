
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-analytics.js"></script>

 
<script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-database.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-firestore.js"></script>

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<script>

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJkyIbzUrqeUAXwEHxBieJTvKUIOrGMkE",
    authDomain: "sharedapp.firebaseapp.com",
    databaseURL: "https://sharedapp.firebaseio.com",
    projectId: "sharedapp",
    storageBucket: "sharedapp.appspot.com",
    messagingSenderId: "581994426403",
    appId: "1:581994426403:web:c377656358e312f5894196",
    measurementId: "G-4SDMNGZBW9"
  };
 

  // Initialize Firebase with a "default" Firebase project
  var defaultProject = firebase.initializeApp(firebaseConfig);
  console.log(defaultProject.name);  // "[DEFAULT]" 
  firebase.analytics();
  //firebase.database();

    var auth = firebase.auth();
var db=firebase.firestore();


  
 var database = firebase.database();



 
 var child = database.ref('1/2');
 // alert(database);
	//var userId = firebase.auth().currentUser.uid;
console.log(database.ref('1/').key);
console.log(child.toString());




var test=db.collection('/1').doc('Testa');
console.log(test.get());


db.collection("/1").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


/*
db.collection("/1").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});*/

//var docRef =db.collection('1').doc('Testa');

  var docRef = db.collection("/1").doc('Testa');
  
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
