// 5块图广告区js
var aLi = document.querySelectorAll(".index_right li");
var li1Img = document.querySelector(".li1Img");
// console.log(aLi);
for(var i = 0 ; i < aLi.length ; i ++ ){
    aLi[i].onmouseenter = function(){
        this.style.opacity = ".7";
        this.onmouseleave = function(){
            this.style.opacity = "1"
        }
    }
}
li1Img.onmouseenter = function(){
    this.style.opacity = ".7";
    this.onmouseleave = function(){
        this.style.opacity = "1"
    }
}

// 中间内容js
var $aLi = $(".house_show_box").children().children(".li1");
// console.log($aLi)
for(var j = 0 ; j < $aLi.length ; j ++ ){
    $aLi[j].onmouseenter = function(){
        var img = $(this).children().children(".Box").children(".Pic").children();
        var name = $(this).children().children(".Box").children(".Text").children(".name");
        var price = $(this).children().children(".Box").children(".Text").children(".price");
        img[0].className = "active";
        name[0].style.color = "#ec5353";
        price[0].style.color = "#ec5353";
        this.onmouseleave =function(){
            img[0].className = "";
            name[0].style.color = "#333";
            price[0].style.color = "#333";
        }
    }
}


