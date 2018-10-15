
var btn = document.querySelector(".top_float");
onscroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop >= 405){
		btn.style.display = "block";
	}else{
		btn.style.display = "none";
	}
}

btn.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

