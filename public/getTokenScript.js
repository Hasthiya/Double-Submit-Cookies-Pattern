function getTokenFunction() {

    var cookieToken = getCookie("token")
    createField(cookieToken);

}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function createField(token) {

    var x = document.createElement("INPUT");

    x.setAttribute("hidden", "text");
    x.setAttribute("id", "token");
    x.setAttribute("value", token);

    document.body.appendChild(x);
}

function sendData() {

    var xhr = new XMLHttpRequest();
    var Url = "http://localhost:3000/users/postToken";

    xhr.open('POST', Url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    var hiddenToken = document.getElementById("token").value;

    xhr.send(JSON.stringify({"sessionId" : getCookie("sessionId"),"hiddenToken" : hiddenToken, "CookieToken": getCookie("token") }));
    xhr.onreadystatechange = processRequest;
    function processRequest(e) {

        if (xhr.readyState == 4 && xhr.status == 200) {
             // alert(xhr.responseText.headers.Host);
             var response1 = JSON.parse(xhr.responseText);
             if(response1.success){
                alert("Token verified by backend");
             } else {
                 alert(response1.msg);
             }
        }
    }
}