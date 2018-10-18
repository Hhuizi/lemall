function ShopCar(){}
$.extend(ShopCar.prototype,{
    init:function(){
        this.main = $("#pu_wrap")
        this.loadJson()
        .done(function(res){
            this.addData(res);;
        })
        this.bindEvent();
        this.listSum();
    },
    loadJson:function(){
        var opt = {
            url:"https://list.mogujie.com/search",
            dataType:"jsonp",
            data:{page:this.page},
            context:this
        }
        return $.ajax(opt);
    },
    bindEvent:function(){
        $("#pu_wrap").on("click","p",this.addCar.bind(this));
        $(".btn_cart").on("mouseenter",this.showList.bind(this));
        $(".btn_cart").on("mouseleave",function(){
            $("#car_wrap").children().remove();
        });
        $(".btn_cart>div").on("click",function(event){
            var target = event.target ; 
            if(target != $(".btn_cart>div")[0]) return 0;

            $.removeCookie("shopCar");
            // 执行鼠标移出事件;
            $(".btn_cart").triggerHandler("mouseleave");
            this.listSum();
        }.bind(this));
    },
    addData:function(json1){
        this.json=json1.result.wall.list;
    },
    addCar:function(event){
        var target = event.target ;
        var goodsId = $(target).attr("data-id");
        //console.log(goodsId)
        var cookie;
        var hasGoods = false;
        //console.log($.cookie("shopCar"))
        if((cookie = $.cookie("shopCar"))){
            var cookieArray = JSON.parse(cookie);
            // console.log(cookieArray,cookieArray.length);
            for(var i = 0 ; i < cookieArray.length ; i ++){
                if(cookieArray[i].iid == goodsId ) {
                    hasGoods = true;
                    cookieArray[i].num ++;
                    break;
                }
            }
            if(hasGoods == false){
                var goods = {
                    iid : goodsId,
                    num : "1"
                }
                cookieArray.push(goods);
            }
            $.cookie("shopCar",JSON.stringify(cookieArray));
        }else{
            $.cookie("shopCar",`[{"iid":"${goodsId}","num":"1"}]`);
        }
        //console.log($.cookie("shopCar"));
        this.listSum();
    }
    ,
    showList:function(event){
        var target = event.target;
        if(target != $(".btn_cart>div")[0]) return 0;
        var cookie;
        if(!(cookie = $.cookie("shopCar"))){ return 0; };
        var cookieArray = JSON.parse(cookie);
        var html = "";
        for(var i = 0 ; i < cookieArray.length ; i ++){
            for(var j = 0 ; j < this.json.length ; j ++){
                if(cookieArray[i].iid == this.json[j].iid){
                    html += `
                                <li class="car_wrap_li">
                                    <div class="car_li_left">
                                        <img src="${this.json[j].show.img}" alt="">
                                    </div>
                                    <div class="car_li_right">
                                        <h3 class="car_li_h">${this.json[j].props[0]}<strong>${cookieArray[i].num}</strong></h3>
                                        <p class="car_xiangqing">${this.json[j].title}</p>
                                        <p class="car_price">${this.json[j].price}</p>
                                    </div>
                                </li>
                            `;
                    break;
                }
            }
        }
        $("#car_wrap")[0].style.cssText = 'display:block; z-index:4  ' 
        $("#car_wrap").html(html);
    },
    listSum:function(){
        var cookie;
        if(!(cookie = $.cookie("shopCar"))){ 
            $(".btn_cart").children(".span").html(0);
            return 0;
        };
        var cookieArray = JSON.parse(cookie);
        var sum = 0;
        for(var i = 0 ; i < cookieArray.length ; i ++){
            sum += Number(cookieArray[i].num);
        }
        $(".btn_cart").children(".span").html(sum);
    }
})

var car = new ShopCar();
car.init();