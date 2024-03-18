// JavaScript for handling menu toggle
function myMenuFunction() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.className === "nav-menu") {
        navMenu.className += " responsive";
    } else {
        navMenu.className = "nav-menu";
    }
}

// JavaScript for handling form switching
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");

function login() {
    loginForm.style.left = "4px";
    registerForm.style.right = "-520px";
    loginBtn.className += " white-btn";
    registerBtn.className = "btn";
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
}

function register() {
    loginForm.style.left = "-510px";
    registerForm.style.right = "5px";
    loginBtn.className = "btn";
    registerBtn.className += " white-btn";
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
}
