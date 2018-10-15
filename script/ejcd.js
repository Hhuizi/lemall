// 头部二级菜单
// var aLi = document.querySelectorAll(".navs2 li");
var aLi = $(".navs2").children(".memu");
for(var i = 0 ; i < aLi.length ; i ++ ){
	aLi[i].onmouseenter = function(){
        var oA = $(this).children().children("a");
		var div = $(this).children(".two_navs");
        div[0].style.display = "block";
        oA[0].style.cssText = 'color : #333;background:#fff;border-right:solid 1px #dfdfdf;border-left:solid 1px #dfdfdf;padding:0 13px';
	}
	aLi[i].onmouseleave = function(){
        var oA = $(this).children().children("a");
		var div = $(this).children(".two_navs");
        div[0].style.display = "none";
        oA[0].style.cssText = 'color:#e5e5e5;background:#333;border-right:none;border-left:none;'
	}

}
// 左侧二级菜单
var aLis = $(".nav_shopall_list").children().children();
var aDiv = $(".nav_shopall_pop").children(".popBox");
for(var i = 0 ; i < this.aLis.length ; i ++ ){
    aLis[i].index = i;
    aLis[i].onmouseenter = function(){
        aLis[this.index].style.background = "rgba(255,255,255,1)";
        $(aLis[this.index]).children()[0].style.color = "#d80c18";
        aDiv[this.index].style.display = "block";
        // console.log(this.index,aDiv[this.index]);
    }

    aLis[i].onmouseleave = function(){
        aLis[this.index].style.background = "none";
        $(aLis[this.index]).children()[0].style.color = "#333";
        aDiv[this.index].onmouseenter = function(){
            this.style.display = "block";
        }
        aDiv[this.index].onmouseleave = function(){
            this.style.display = "none";
        }
        // console.log(this.index);
    }
}
// function nav_shopall(obj) {
//     $box = $(obj);
//     $box.timer="";
//     $btn = $box.find(".nav_shopall_btn");
//     $left_nav = $box.find(".nav_shopall_cateMenu");
//     $left_lis = $box.find(".nav_shopall_cateMenu li");
//     $pop = $box.find(".nav_shopall_pop");
//     $divs = $pop.find(".popBox");
//     $btn.mouseenter(function(event) {
//         /* Act on the event */
//         if (!$box.hasClass('hideLeft')) return false;
//         // $box.timer = setTimeout(function(){
//         $left_nav.show();
//         // },300)

//     });
//     $box.mouseleave(function(event) {
//         clearTimeout($box.timer);
//         if ($box.hasClass('hideLeft')){$left_nav.hide();};
//         // cleaarTimeout($box.timer)

//         $pop.hide();
//         $divs.hide();
//         $left_lis.removeClass('active');
//     });
//     $pop.mouseenter(function(event) {
//         clearTimeout($box.timer);
//     });
//     //
//     // $left_lis.mouseenter(function(event) {
//     //   $left_lis.removeClass('active');
//     //   $(this).addClass('active');
//     //
//     //     $pop.show();
//     //     $divs.hide();
//     //     var index = $(this).attr("data-groupid");
//     //     $divs.filter("[data-index ="+ index+"]").show();
//     //
//     // });
//     $left_lis.mouseenter(function(event) {
//         clearTimeout($box.timer);
//         var _this = this;
//         $box.timer=setTimeout(function(){
//             $left_lis.removeClass('active');
//             $(_this).addClass('active');

//             $pop.show();
//             $divs.hide();
//             var index = $(_this).attr("data-groupid");
//             $divs.filter("[data-index ="+ index+"]").show();
//         },100)
//     });

//     // 超级手机小图片的切换
//     $(".nav_shopall_pop").on("mouseenter", ".list_pictext_4 .item", function(event) {
//         var $btn = $(event.target);

//         var $li = $btn.closest('li');
//         var $img = $li.find("img");
//         if (!$img.attr("oldsrc")) {
//             $img.attr("oldsrc",$img.attr("src"));
//         };

//         $img.attr("src", $btn.attr("data-img"))
//         $li.mouseleave(function(event) {
//             $img.attr("src", $img.attr("oldsrc"));
//         });
//     });

// }


// //调用生态分类
// $(document).ready(function(e) {
//     nav_shopall("#nav_shopall");
// });