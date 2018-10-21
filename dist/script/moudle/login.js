var oBtn1 = document.getElementById("login-btn");
var oUser1 = document.getElementById("username");
var oPwd1 = document.getElementById("password");
oBtn1.onclick = function(){
    var url = "http://localhost:8080/php/login.php";
    ajaxGet(url+`?username=${oUser1.value}&password=${oPwd1.value}`)
    .then(function(res){
        console.log(res);
    })
}
