function loadData() {
    var name = document.getElementById("confirm_name");
    var email = document.getElementById("confirm_email");
    var phonenumber = document.getElementById("confirm_phone");
    var age = document.getElementById("confirm_age");

    lastname = sessionStorage.getItem("lastname");
    name.textContent = sessionStorage.firstname + " " + lastname;
    email.textContent = sessionStorage.email;
    phonenumber.textContent = sessionStorage.phonenumber;
    age.textContent = sessionStorage.age;
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