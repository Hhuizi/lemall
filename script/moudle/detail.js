function Demail(){}
$.extend(Demail.prototype,{
    init:function(){
        this.main = $("#pu_wrap")
        this.loadJson()
        .done(function(res){
            this.addData(res);;
        })
        this.bindEvent();
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
        $("#pu_wrap").on("click","img",this.addCar.bind(this));
    },
    addData:function(json1){
        this.json=json1.result.wall.list;
    },
    detail:function(event){
        var target = event.target;
        var id = $(target).attr("data-id");
        var cookie;
        var cookieArray = JSON.parse(cookie);
        var goods = {
            iid : id
        }
        cookieArray.push(goods);
        $.cookie("detail",JSON.stringify(cookieArray));
        var html = "";
        for(var i = 0 ; i < cookieArray.length ; i ++){
            for(var j = 0 ; j < this.json.length ; j ++){
                if(cookieArray[i].iid == this.json[j].iid){
                    html = `
                        <li class="car_wrap_li">
                            <div class="car_li_left">
                                <img src="${this.json[j].show.img}" alt="">
                            </div>
                            <div class="car_li_right">
                                <h3 class="car_li_h">${this.json[j].props[0]}</h3>
                                <p class="car_xiangqing">$${this.json[j].title}</p>
                                <p class="car_price">${this.json[j].price}</p>
                            </div>
                            <p class="addcar">加入购物车</p>
                        </li>
                    `;
                    break;
                }
            }
        }
        $("#pu_wrap").html(html);
    }
})
var demail = new Demail();
demail.init();