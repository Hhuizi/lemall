function Demail(){}
$.extend(Demail.prototype,{
    init:function(){
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
    addData:function(json1){
        this.json=json1.result.wall.list;
    },
    demail:function(){
        var html = `
                    <li class="car_wrap_li">
                        <div class="car_li_left">
                            <img src="${event.currentTarget.children[0].children[0].children[0].currentSrc}" alt="">
                        </div>
                        <div class="car_li_right">
                            <h3 class="car_li_h">${event.currentTarget.children[0].children[1].children[0].innerHTML}</h3>
                            <p class="car_xiangqing">${event.currentTarget.children[0].children[1].children[1].innerHTML}</p>
                            <p class="car_price">${event.currentTarget.children[0].children[1].children[2].innerHTML}</p>
                        </div>
                        <p class="addcar">加入购物车</p>
                    </li>
                `;
        $("#pu_wrap").html(html);
        window.location.href="demail.html";
    }
})
var demail = new Demail();
demail.init();
demail.demail();