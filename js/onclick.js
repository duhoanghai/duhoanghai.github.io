function init() {
    var htmlBtn = document.getElementById("btn");
    htmlBtn.onclick = convertButtonClick;

    var h2 = document.getElementById("h2_click");
    h2.onclick = h2Click;

    var all_h3 = document.getElementsByTagName("h3");
    for (var i = 0; i < all_h3.length; i ++) {
        all_h3[i].onclick = all_h3_click;
    }
}

function all_h3_click() {
    var h3Content = document.getElementById("h3_content");
    h3Content.innerHTML = "You clicked one of the h3 element."
}

function h2Click() {
    var h2Content = document.getElementById("h2_content");
    h2Content.innerHTML = "<h1>You clicked h2!!!</h1>"
}

function printConversion(eu, vnd) {
    var htmlMessage = document.getElementById("message");
    htmlMessage.textContent = "You enter: " + eu + " EU, this is converted to VND: " + vnd + "k";
}

function convertButtonClick() {
    var eu = prompt("Enter EU: ");
    var vnd = eu * 30;
    printConversion(eu, vnd);
}

window.onload = init;