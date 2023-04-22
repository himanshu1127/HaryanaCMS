import sidebar from "./Components/Sidebar.js";
import navbar from "./Components/Navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

document.querySelector(".sidebar").innerHTML = sidebar();

let profileImageDiv = document.querySelector(".profileImageDiv");

let profileOptionDiv = document.querySelector(".profileOptionDiv");

profileImageDiv.onclick = function () {
  profileOptionDiv.classList.toggle("active");
};
let hemb = document.getElementById("hemb");
let sidebar1 = document.querySelector(".sidebar");
hemb.onclick = function () {
  sidebar1.classList.toggle("activeSidebar");
};
