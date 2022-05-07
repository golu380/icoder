    const name = document.getElementById("t1").value;
    const email = document.getElementById("t2").value;
    const username= document.getElementById("t3").value;
    const pwd = document.getElementById("t4").value;
    const cpwd = document.getElementById("t5").value;
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
    const firebaseConfig = {
        apiKey: "AIzaSyCRNf_-NN7u0zDvwuWX5kfPxCu_QezeGjI",
        authDomain: "users-d70b5.firebaseapp.com",
        databaseURL: "https://users-d70b5-default-rtdb.firebaseio.com",
        projectId: "users-d70b5",
        storageBucket: "users-d70b5.appspot.com",
        messagingSenderId: "303975264572",
        appId: "1:303975264572:web:ad51e504ad9c6d002f6e39",
        measurementId: "G-3KFG7FDGX9"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    import { getDatabase, ref, set, child, get, update } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
    const db = getDatabase();
  
function Validation() {
    


    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name =='') {
        alert('Please enter your name');
        return false;
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    else if (email == '') {
        alert('Please enter your user email id');
        return false;
    }
    else if (!filter.test(email)) {
        alert('Invalid email');
        return false;
    }
     else if(username=='')
     {
         alert('Please enter the user name.');
         return false;
     }
     else if(!letters.test(username))
     {
         alert('User name field required only alphabet characters');
         return false;
     }
    else if (pwd == '') {
        alert('Please enter Password');
        return false;
    }
    else if (cpwd == '') {
        alert('Enter Confirm Password');
        return false;
    }
    else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        return false;
    }
    else if (pwd != cpwd) {
        alert('Password not Matched');
        return false;
    }
    else if (document.getElementById("t5").value.length < 6) {
        alert('Password minimum length is 6');
        return false;
    }
    else if (document.getElementById("t5").value.length > 12) {
        alert('Password max length is 12');
        return false;
    }
    else {
        // alert('Thank You for Registration & You are Redirecting to Website');
        // // Redirecting to other page or webste code. 
        return true;
    }
}
function ResiterUser(){
    const dbRef = ref(db)
    if(!Validation()){
        return;
    }
    get(child(dbRef,"UsersList/" + username.value)).then((snapshot)=>{
        if(snapshot.exists()){
            alert("Account Already Exists!")
        }else{
            set(ref(db,"UsersList/"+username),{
                fullname: name,
                email: email,
                username:username,
                password:pwd
            }).then(()=>{
                alert("user added successfully");
            }).catch((error)=>{
                alert("error"+error)
            })
        }
    })
   
}
submit.addEventListener('click',ResiterUser);