var oBtn2 = document.getElementById("login-btn2");
var oUser2 = document.getElementById("username2");
var oPwd2 = document.getElementById("password2");
oBtn2.onclick = function(){
    $.ajax({
        url:"http://localhost:8888/proxy/localhost/lemall/php/register.php",
        type:"POST",
        data:`username=${oUser2.value}&password=${oPwd2.value}`,
        datatype:"html",
        success:function(res){
            alert(res);
        }
        
    })
    console.log(oUser2.value)
}