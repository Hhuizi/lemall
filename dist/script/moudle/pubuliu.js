function WaterFall(){}
$.extend(WaterFall.prototype,{
    //初始化
    init:function(){
        //当前页数
        this.page=1;
        this.main = $("#pu_wrap");
        //判断是否在加载中
        this.loading = false;
        this.loadJson()    
        .done(function(res){
            this.renderPage(res);
        })
        this.bindEvent();
    },
    bindEvent:function(){
        $(window).on("scroll",this.ifLoad.bind(this));
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
    //渲染页面
    renderPage:function(json1){
        var json=json1.result.wall.list;
        // console.log(json)
        var html="";
        for( var i=0; i<json.length; i++){
            html += `
                    <li class="li1 li4">
                        <div class="Box">
                            <div class="Pic"><img data-id=${json[i].iid} src=${json[i].show.img} alt="/product/products-pid-1003208.html"></div>
                            <div class="Text">
                                <div class="name">${json[i].props[0]}</div>
                                <div class="config mcl-3">${json[i].title}</div>
                                <div class="price">${json[i].price}</div>
                            </div>
                        </div>
                        <p id="jiagou" data-id=${json[i].iid}>加入购物车</p>
                    </li>
                 `
            // console.log(json[i].price)
        }
        this.main.html(this.main.html() + html);
        this.loading = false;
    },
    //是否加载   滚动就会触发此事件
    ifLoad:function(){
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = this.main.children(":last");
        //加载到最后一张图片再次加载数据
        if(scrollTop + clientHeight > lastBox.offset().top){
            //如果已经加载，就return 0关闭，如果为false关闭就变为true
            if(this.loading){
                return 0
            }
            this.loading = true;
           // console.log("加载");
            this.page ++;
            this.loadJson()
            .done(function(res){
                this.renderPage(res);
            })
        }
    }
})
var waterfall = new WaterFall();
waterfall.init();