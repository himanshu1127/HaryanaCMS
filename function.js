const logout = () => {
  window.location.href = "index.html";
};
const navigate = () => {
  window.location.href = "./Dashboard.html";
};

const addOfficer = () => {
  console.log("clicked add");
};

let profileImageDiv = document.querySelector(".profileImageDiv");

let profileOptionDiv = document.querySelector(".profileOptionDiv");

profileImageDiv.onclick = function () {
  profileOptionDiv.classList.toggle("active");
};
let hemb = document.getElementById("hemb");
let sidebar = document.querySelector(".sidebar");
hemb.onclick = function () {
  sidebar.classList.toggle("activeSidebar");
};

let displayAddComp = document.querySelector(".displayAddComp");

let addComp = document.querySelector("#addComp");
addComp.onclick = function () {
  displayAddComp.classList.toggle("activeAddComp");
};

let closeIcon = document.querySelector(".closeIcon");
closeIcon.onclick = function () {
  displayAddComp.classList.toggle("activeAddComp");
};


// Update Complain

// let closeIconUpdate = document.querySelector(".closeIcon");
//   closeIconUpdate.onclick = function () {
//     displayUpdateComp.classList.toggle("activeUpdateComp");
//   };