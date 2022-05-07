const firebaseConfig = {
    apiKey: "AIzaSyBPxh7lV0Scm_CjGMHwdDgfgqpyUpHjrVE",
    authDomain: "users-d48a7.firebaseapp.com",
    databaseURL: "https://users-d48a7-default-rtdb.firebaseio.com",
    projectId: "users-d48a7",
    storageBucket: "users-d48a7.appspot.com",
    messagingSenderId: "765546780232",
    appId: "1:765546780232:web:4768c8ba986fcfe32eea7d",
    measurementId: "G-C7YWHVJ1RF"
  };
  //intialize firebase

  firebase.initializeApp(firebaseConfig);

  //Initialize varibales

  const auth = firebase.auth();
  const database = firebase.database();

  function RegiterUser(){
      //Get all inputs 
      email = document.getElementById('t2').value;
      uname = document.getElementById('t1').value;
      username = document.getElementById('t3').value;
      password = document.getElementById('t4').value;
      password1 = document.getElementById('t5').value;

    //   if(validate_email(email) == false || validate_password(password)){
    //       alert("Email or password is out lined");
    //       return;
    //   }
      if(validate_field(uname) == false || validate_field(email)== false ||validate_field(password)== false|| validate_field(username) == false|| validate_field(password1)==false){
          alert("Please fill the form");
        return ;
      }
      if(compare_pass(password,password1) == false){
          alert('passwords are not matched');
          return;
      }
     //Move with auth

     auth.createUserWithEmailAndPassword(email,password).then(function(){
        var user = auth.currentUser

var databases_ref = database.ref();
//Create User data
var user_data = {
    email:email,
    full_name:uname,
    username:username,
   last_login : Date.now() 
}
databases_ref.child('users/'+user.uid).set(user_data);

        alert('User Created!')
     })
     .catch((error)=>{
         var error_code = error.code
         var error_message = error.message
         alert(error_message);
     })
  }

  function validate_email(email){
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if(expression.test(email) == true){
          return true;
      }else{
          return false;
      }
  }
  function validate_password(password){
      if(password<6){
          return false;
      }else{
          return true;
      }
  }
  function validate_field(field){
      if(field == null){
          return false;
      }
      if(field.length <= 0){
          return false;
      }else{
          return true;
      }
  }
  function compare_pass(password,password1){
      if(password == password1){
          return true;
      }else{
          return false;
      }
  }