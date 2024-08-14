import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "../firebase.js";

let form = document.querySelectorAll("#form input");
const [email, pswd] = form;
let signupBtn = document.getElementById("signup");

const signup = () => {
  signupBtn.innerText = "loading...";
  createUserWithEmailAndPassword(auth, email.value, pswd.value)
    .then((userCredential) => {
      signupBtn.innerText = "Signup";
      Toastify({
        text: "Successfully signed up",

        duration: 3000,
      }).showToast();
      
      email.value = "";
      pswd.value = "";
      console.log(userCredential.user);
    })
    .catch((error) => {
      signupBtn.innerText = "Signup";

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
signupBtn.addEventListener("click", signup);
