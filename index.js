document.getElementById("btn").addEventListener("click", valudation);
var name = document.getElementById("name");
var adr = document.getElementById("adr");
var email = document.getElementById("email");
var pw = document.getElementById("pw");
var cmt = document.getElementById("cmt");
function valudation() {
  if (name.value === "") alert("please enter your name");
  if (adr.value === "") alert("please enter your address");
  if (email.value === "") alert("please enter your email");
  if (pw.value === "") alert("please enter your password");
  if (cmt.value === "") alert("please enter your comment");
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    alert("please enter your email address in format:yourmane@exemple.com");
  if (pw.length < 8 || !/[A-Z]+/.test(pw.value) || !/[0-9]+/.test(pw.value))
    alert(
      "please your password should has less than 8 characters and should be a combination of charatacters , numbers and at least a capital letter"
    );
}
