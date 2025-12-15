function loadDataAndCalculatePrice() {
    totalPrice = 0;
    var name = document.getElementById("confirm_name");
    var email = document.getElementById("confirm_email");
    var phonenumber = document.getElementById("confirm_phone");
    var age = document.getElementById("confirm_age");
    var occupation = document.getElementById("confirm_occupation")
    var courses = document.getElementById("confirm_courses")
    var payment = document.getElementById("confirm_payment")
    var total = document.getElementById("confirm_total");

    lastname = sessionStorage.getItem("lastname");
    name.textContent = sessionStorage.firstname + " " + lastname;
    email.textContent = sessionStorage.email;
    phonenumber.textContent = sessionStorage.phonenumber;
    age.textContent = sessionStorage.age;
    occupation.textContent = sessionStorage.occupation;
    
    var yourCourses = " ";
    var count = 0;
    if (sessionStorage.logicmath == "true") {
        count += 1;
        totalPrice += 449;
        yourCourses += "logicmath, ";
    }
    if (sessionStorage.web == "true") {
        count += 1; 
        totalPrice += 749;
        yourCourses += "web, ";
    }
    if (sessionStorage.python == "true") {
        count += 1;
        totalPrice += 799;
        yourCourses += "python, ";
    }
    if (sessionStorage.datascience == "true") {
        count += 1;
        totalPrice += 249;
        yourCourses += "datascience, ";
    }
    if (sessionStorage.game == "true") {
        count += 1;
        totalPrice += 149;
        yourCourses += "game, ";
    }
    if (sessionStorage.ai == "true") {
        count += 1;
        totalPrice += 499;
        yourCourses += "ai, ";
    }

    var discount = " ";
    if (count >= 3) {
        totalPrice = totalPrice * 0.8;
        discount = " 20% discount applied for enrolling 3 or more courses.";
    }

    if (sessionStorage.occupation == "highschool") {
        totalPrice = totalPrice * 0.9;
        discount += " 10% discount applied for highschool students.";
    }

    if (sessionStorage.payment == "paypal") {
        totalPrice = totalPrice * 1.05;
        discount += " 5% surcharge applied for PayPal payment.";
    }

    totalPrice = Math.round(totalPrice * 100) / 100;

    yourCourses = yourCourses.substring(0, yourCourses.length - 2);
    courses.textContent = yourCourses;

    payment.textContent = sessionStorage.payment;
    total.textContent = totalPrice + discount;
}

function cancelButton() {
    window.location = "register.html";
}

function init() {
    loadDataAndCalculatePrice();
    var cancel = document.getElementById("cancelButton");
    cancel.onclick = cancelButton;
}

window.onload = init;