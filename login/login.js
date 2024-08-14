import {
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "../firebase.js";
  
  let form = document.querySelectorAll("#form input");
  const [email, pswd] = form;
  let loginBtn = document.getElementById("login");
  let forgetBtn = document.getElementById("forgotPswd");

  
  const Login = () => {
    loginBtn.innerText = "loading...";
    signInWithEmailAndPassword(auth, email.value, pswd.value)
      .then((userCredential) => {
        loginBtn.innerText = "Login";
        Toastify({
          text: "Successfully logged in",
  
          duration: 3000,
        }).showToast();
        
        email.value = "";
        pswd.value = "";
        
        console.log(userCredential.user);
      })
      .catch((error) => {
        loginBtn.innerText = "login";
  
        Toastify({
          text: error.message,
          duration: 3000,
        }).showToast();
      });
  };
  onAuthStateChanged(auth,(user)=>{
      if(user){
          window.location.href = '../dashboard/dashboard.html'
      }
  })
  loginBtn.addEventListener("click", Login);
  