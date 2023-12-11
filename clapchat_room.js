var firebaseConfig = {
  apiKey: "AIzaSyDCUGD7bXozaIHqlkznVHBnp--uWf6-MXU",
  authDomain: "class-94-30a19.firebaseapp.com",
  databaseURL: "https://class-94-30a19-default-rtdb.firebaseio.com",
  projectId: "class-94-30a19",
  storageBucket: "class-94-30a19.appspot.com",
  messagingSenderId: "696781587581",
  appId: "1:696781587581:web:3c965cb13b2985148d1d14",
  measurementId: "G-GFS3WE6F7R"
};


firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome"+user_name+"!"
function addroom(){
      room_name=document.getElementById("roomname").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"it was rainy in Tennesse"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
row="<div class='room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row
      });});}
getData();

function redirecttoroomname(name){
      localStorage.setItem("room_name",name)
       window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}