var oBtn1 = document.getElementById("login-btn");
var oUser1 = document.getElementById("username");
var oPwd1 = document.getElementById("password");
var rPwd = document.querySelector(".pwd_reset");
oBtn1.onclick = function(){
    $.ajax({
        url:"http://localhost:8888/proxy/localhost/lemall/php/login.php",
        type:"GET",
        data:`username=${oUser1.value}&password=${oPwd1.value}`,
        datatype:"html",
        success:function(res){
            alert(res);
        }
    })
}
rPwd.onclick =function() {
    oUser1.value = "";
    oPwd1.value = "";
}
