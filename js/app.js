const mainNav = document.querySelector("#js-menu");
const navBarToggle = document.querySelector("#js-navbar-toggle");

navBarToggle.addEventListener("click", function(){
   console.log("Navbar Toggle Ativado!");
   navBarToggle.classList.toggle("active-toggle");
   mainNav.classList.toggle("active");
});