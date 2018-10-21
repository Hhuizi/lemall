var oBtn2 = document.getElementById("login-btn2");
var oUser2 = document.getElementById("username2");
var oPwd2 = document.getElementById("password2");
oBtn2.onclick = function(){
    if(/^1[34578]\d{9}$/.test(oUser2.value)){
        $.ajax({
            url:"http://localhost:8888/proxy/localhost/lemall/php/register.php",
            type:"GET",
            data:`username=${oUser2.value}&password=${oPwd2.value}`,
            datatype:"html",
            success:function(res){
                alert(res);
            }
            
        })
    }else{
        alert("手机号码有误，请重填")
    }
    
    // console.log(oUser2.value)
}