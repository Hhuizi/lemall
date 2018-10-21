function Demail(){}
$.extend(Demail.prototype,{
    init:function(){
        this.main = $("#pu_wrap2")
        this.loadJson()
        .done(function(res){
            this.addData(res);;
        })
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
        this.detail();
        // console.log(this.json)
    },
    detail:function(event){
        var id = $.cookie("detail");
        // console.log(this.json)
        var html = "";
        for(var i = 0 ; i < this.json.length ; i ++){
            if( this.json[i].iid == id ){
                html = `
                    <li class="car_wrap_li clearfix">
                        <div class="car_li_left">
                            <img src="${this.json[i].show.img}" alt="">
                        </div>
                        <div class="car_li_right">
                            <h3 class="car_li_h">${this.json[i].props[0]}</h3>
                            <p class="car_xiangqing">$${this.json[i].title}</p>
                            <p class="car_price">${this.json[i].price}</p>
                        </div>
                        <p class="addcar">加入购物车</p>
                    </li>
                `;
                break;
            }
        }
        $("#pu_wrap2").html(html);
    }
})
var demail = new Demail();
demail.init();