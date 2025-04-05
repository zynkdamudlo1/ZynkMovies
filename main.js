function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".main").classList.add("blur-effect");
  document.querySelector(".navbar").classList.add("blur-effect");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").classList.remove("blur-effect");
  document.querySelector(".navbar").classList.remove("blur-effect");
}