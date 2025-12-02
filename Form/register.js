function saveData() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var age = document.getElementById("age").value;

    sessionStorage.firstname = firstname;
    sessionStorage.setItem("lastname", lastname)
    sessionStorage.email = email;
    sessionStorage.phonenumber = phonenumber;
    sessionStorage.age = age;

}

function prefilData() {
    if (sessionStorage.firstname != null) {
        document.getElementById("firstname").value = sessionStorage.firstname;
        document.getElementById("lastname").value = sessionStorage.lastname;
        document.getElementById("email").value = sessionStorage.email;
        document.getElementById("phonenumber").value = sessionStorage.phonenumber;
        document.getElementById("age").value = sessionStorage.age;
    }


}

function init() {
    var regForm = document.getElementById("registerForm");
    regForm.onsubmit = saveData;

    prefilData();
}

window.onload = init;