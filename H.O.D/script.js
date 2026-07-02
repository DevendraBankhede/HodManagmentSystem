// LOGIN FUNCTION
function loginUser() {
    let name = document.getElementById("username").value;

    if(name === ""){
        alert("Please enter username");
        return;
    }

    localStorage.setItem("studentName", name);

    window.location.href = "student.html";
}


// SHOW DATA ON DASHBOARD
let name = localStorage.getItem("studentName");

if(name && document.getElementById("showName")){
    document.getElementById("showName").innerText = name;
}


// LOGOUT
function logout(){
    localStorage.removeItem("studentName");
    window.location.href = "login.html";
}

// ===== TecherDashbord ka js =====

// Show teacher name
document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("teacher");
  document.getElementById("teacherName").innerText = name;
});

// Events
document.getElementById("home").addEventListener("click", function () {
  alert("Dashboard");
});

document.getElementById("mark").addEventListener("click", function () {
  alert("Mark Attendance Page");
});

document.getElementById("view").addEventListener("click", function () {
  alert("View Attendance Page");
});

document.getElementById("students").addEventListener("click", function () {
  alert("Students Page");
});

document.getElementById("notices").addEventListener("click", function () {
  alert("Notices Page");
});

document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("teacher");
  window.location.href = "teacher-login.html";
});

// ==== Admin deshbord ====