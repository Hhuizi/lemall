var oBtn1 = document.getElementById("login-btn");
var oUser1 = document.getElementById("username");
var oPwd1 = document.getElementById("password");
oBtn1.onclick = function(){
    var url = "http://localhost:8888/php/login.php";
    ajaxPost(url,`username=${oUser1.value}&password=${oPwd1.value}`)
    .then(function(res){
        console.log(res);
    })
}
// var oBtn2 = document.getElementById("login-btn2");
// var oUser2 = document.getElementById("username2");
// var oPwd2 = document.getElementById("password2");
// oBtn2.onclick = function(){
//     var url = "http://localhost:8888/php/register.php";
//     ajaxPost(url,`username=${oUser2.value}&password=${oPwd2.value}`)
//     .then(function(res){
//         console.log(res);
//     })
// }