var oBtn2 = document.getElementById("login-btn2");
var oUser2 = document.getElementById("username2");
var oPwd2 = document.getElementById("password2");
oBtn2.onclick = function(){
    var url = "http://localhost/lemall/php/register.php";
    ajaxPost(url,`username=${oUser2.value}&password=${oPwd2.value}`)
    .then(function(res){
        console.log(res);
    })
}