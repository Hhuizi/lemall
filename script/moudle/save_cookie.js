var oList = document.getElementById("pu_wrap");
// 委托;

oList.onclick = function(evt){
    var e = evt || window.event;
    var img = document.querySelectorAll("img");
    var imgArray = Array.from(img);
    var target = e.target || e.srcElement;
 //    console.log(imgArray);   
     if(imgArray.indexOf(target) != -1){
         // 页面跳转;
         // 先要储存cookie;
         $.cookie("detail",target.getAttribute("data-id"));
        //  console.log($.cookie("detail"))
         location.href = "detail.html";
     }
}