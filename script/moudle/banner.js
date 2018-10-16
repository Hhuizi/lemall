// 轮播图js
function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        // 初始化;
        // 当前显示的图片下标;
        this.nowIndex = 0;
        // 元素;
        this.banner = document.querySelector(".banner");
        this.list = document.querySelector(".banner_btn_list");
        this.btn_left = document.querySelector(".p1");
        this.btn_right = document.querySelector(".p2");
        
        this.btn_list = document.querySelectorAll(".banner_btn2_list_box button");

        this.show_list = document.querySelectorAll(".banner_list li");
        this.ul = document.querySelector(".banner_list");
        this.itmeNum = this.show_list.length;
        this.width = document.documentElement.clientWidth;
        this.ul.style.width = this.width * this.ul.length + "px";
        this.bindEvent();
    },  
    bindEvent(){
    	this.banner.onmouseenter = this.show.bind(this);
    	this.banner.onmouseleave = this.autoPlay.bind(this);
        this.btn_left.onclick = this.prev.bind(this);
        this.btn_right.onclick = this.next.bind(this);
        this.btn_left.onmouseover = this.chanL.bind(this);
        this.btn_right.onmouseover = this.chanR.bind(this);
        for(var i = 0 ; i < this.btn_list.length ; i ++){
            this.btn_list[i].index = i;
            this.btn_list[i].onclick = this.toIndex.bind(this);
        }
    },
    chanL(){
            this.btn_left.style.backgroundPositionY = "-67px";
            this.btn_left.onmouseout = function(){
            this.style.backgroundPositionY = "-6px";
        }
    },
    chanR(){
            this.btn_right.style.backgroundPositionY = "-67px";
            this.btn_right.onmouseout = function(){
            this.style.backgroundPositionY = "-6px";
        }
    },
    show(){
    	this.list.style.display = "block";
    	clearInterval(this.autoTimer);
    },
    next(){
        if(this.nowIndex == this.itmeNum - 1){
            // 到了最后一张;
            this.ul.style.marginLeft = 0;
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev(){
        if(this.nowIndex == 0){
            // 到了第一张;
            this.ul.style.marginLeft = -(this.itmeNum - 1) * this.width + "px";
            this.nowIndex = this.itmeNum - 2;
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex(event){
        var e = event || window.event
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        console.log(this.nowIndex)
        this.animate();
    },
    animate(){
        $(this.ul).stop().animate({
            marginLeft: -this.nowIndex * this.width + "px"
        })
        
        $(this.btn_list).removeClass("cur");

        if(this.nowIndex == this.itmeNum - 1){
            this.btn_list[0].className = "cur"
        }else{
            this.btn_list[this.nowIndex].className = "cur";
        }
    },
    autoPlay(){
        this.list.style.display = "none";
        this.autoTimer = setInterval(function(){
            this.next();
        }.bind(this),3000)
    }
})
var banner = new Banner();
banner.init();
banner.autoPlay();


