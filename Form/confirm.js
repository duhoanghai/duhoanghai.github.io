function loadData() {
    var name = document.getElementById("confirm_name");
    var email = document.getElementById("confirm_email");
    var phonenumber = document.getElementById("confirm_phone");
    var age = document.getElementById("confirm_age");
    var occupation = document.getElementById("confirm_occupation")
    var courses = document.getElementById("confirm_courses")

    lastname = sessionStorage.getItem("lastname");
    name.textContent = sessionStorage.firstname + " " + lastname;
    email.textContent = sessionStorage.email;
    phonenumber.textContent = sessionStorage.phonenumber;
    age.textContent = sessionStorage.age;
    occupation.textContent = sessionStorage.occupation;
    
    var yourCourses = " ";
    if (sessionStorage.logicmath == "true") {
        yourCourses += "logicmath, ";
    }
    if (sessionStorage.web == "true") {
        yourCourses += "web, ";
    }
    if (sessionStorage.python == "true") {
        yourCourses += "python, ";
    }
    if (sessionStorage.datascience == "true") {
        yourCourses += "datascience, ";
    }
    if (sessionStorage.game == "true") {
        yourCourses += "game, ";
    }
    if (sessionStorage.ai == "true") {
        yourCourses += "ai, ";
    }
    yourCourses = yourCourses.substring(0, yourCourses.length - 2);
    courses.textContent = yourCourses;
}

function cancelButton() {
    window.location = "register.html";
}

function init() {
    loadData();
    var cancel = document.getElementById("cancelButton");
    cancel.onclick = cancelButton;
}

window.onload = init;