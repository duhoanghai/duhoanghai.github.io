function validate() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var age = document.getElementById("age").value;
    sessionStorage.firstname = firstname;
    sessionStorage.setItem("lastname", lastname);
    sessionStorage.email = email;
    sessionStorage.phonenumber = phonenumber;
    sessionStorage.age = age;

    var occupationArray = document.getElementById("radio_occupation").getElementsByTagName("input");
    for (var i = 0; i < occupationArray.length; i++) {
        if (occupationArray[i].checked == true) {
            sessionStorage.occupation = occupationArray[i].value;
        }
    }

    var logicmath = document.getElementById("logicmath").checked;
    var python = document.getElementById("python").checked;
    var web = document.getElementById("web").checked;
    var datascience = document.getElementById("datascience").checked;
    var game = document.getElementById("game").checked;
    var ai = document.getElementById("ai").checked;

    sessionStorage.logicmath = logicmath;
    sessionStorage.python = python;
    sessionStorage.web = web;
    sessionStorage.datascience = datascience;
    sessionStorage.game = game;
    sessionStorage.ai = ai;

    var payment = document.getElementById("payment");
    sessionStorage.payment = payment.value;

    error_msg = " ";
    // R1
    if (firstname.match("^[A-Z a-z]{1,30}$") == null){
        error_msg += "First name has to contain only characters and between 1 or 30 character <br>";
    }
    if (lastname.match("^[A-Z a-z]{1,30}$") == null){
        error_msg += "Last name has to contain only characters and between 1 or 30 character <br>";
    }
    // R2
    if (email.match("^[a-zA-Z]*@[a-zA-Z.]$") != null) {
        error_msg += "Email has to contain @<br>";
    }
    // R3
    if (phonenumber.match("^((/+84)|0)[0-9]{9,10}$") == null) {
        error_msg += "Phone number has to start with +84 or 0 and contain 9 or 10 digits <br>";
    }
    // R4
    if (isNaN(age) || age < 10 || age > 150) {
        error_msg += "Age is invalid <br>";
    }
    // R5
    if (sessionStorage.occupation == "highschool") {
        if (age < 10 || age > 19) {
            error_msg += "Age is not suitable for highschool <br>";
        }
    }
    
    if (error_msg == " ") {
        return true;
    } else {
        document.getElementById("error").innerHTML = error_msg;
        return false;
    }
}
function prefilData() {
    if (sessionStorage.firstname != null) {
        document.getElementById("firstname").value = sessionStorage.firstname;
        document.getElementById("lastname").value = sessionStorage.lastname;
        document.getElementById("email").value = sessionStorage.email;
        document.getElementById("phonenumber").value = sessionStorage.phonenumber;
        document.getElementById("age").value = sessionStorage.age;

        switch (sessionStorage.occupation) {
            case "highschool":
                document.getElementById("highschool").checked = true;
                break;
            case "university":
                document.getElementById("university").checked = true;
                break;
            case "working":
                document.getElementById("working").checked = true;
                break;
            case "retired":
                document.getElementById("retired").checked = true;
                break;
        }  
		if (sessionStorage.logicmath == "true") {
			document.getElementById("logicmath").checked = true;
		} 
		if (sessionStorage.datascience == "true") {
			document.getElementById("datascience").checked = true;
		} 
		if (sessionStorage.game == "true") {
			document.getElementById("game").checked = true;
		} 
		if (sessionStorage.ai == "true") {
			document.getElementById("ai").checked = true;
		} 
		if (sessionStorage.web == "true") {
			document.getElementById("web").checked = true;
		} 
		if (sessionStorage.python == "true") {
			document.getElementById("python").checked = true;
		} 

        document.getElementById("payment").value = sessionStorage.payment
    }

}

function init() {
    var regForm = document.getElementById("registerForm");
    regForm.onsubmit = validate;

    prefilData();
}

window.onload = init;