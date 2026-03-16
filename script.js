// script.js
let modal = document.getElementById("loginModal");
let btn = document.getElementById("loginBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none";
  }
}

function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234"){
    alert("تم تسجيل الدخول بنجاح");
    modal.style.display = "none";
  } else{
    document.getElementById("message").innerText = "بيانات غير صحيحة";
  }
}