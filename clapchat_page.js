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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name1'];
massage=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)>";
span_with_tag="<span class='glyphicon glyphicon- thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;



      } });  }); }
getData();
function send() {
msg=document.getElementById("message").value
firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
})
document.getElementById("msg").value=""
}
function updateLike(message_id){
      console.log("clicked on like button Clap- " + message_id);
      button_id =message_id;
      likes =document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            Like:updated_likes
      })
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}