
var btn = document.querySelector(".top_float");
onscroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop >= 85){
		btn.style.display = "block";
	}else{
		btn.style.display = "none";
	}
}

btn.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// 右侧飘窗js
var aSide = document.querySelectorAll(".sidebar_float div");
for(var i = 0 ; i < aSide.length ; i ++ ){
	aSide[i].onmouseenter = function(){
		var div = this.querySelector("div");
			div.style.display = "block";
	}
	aSide[i].onmouseleave = function(){
		var div = this.querySelector("div");
			div.style.display = "none";
	}

}


