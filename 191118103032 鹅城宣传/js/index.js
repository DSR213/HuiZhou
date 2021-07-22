/*自动滚动*/
$('.poster').find('.Wrapdown').click(function(){
	$('html,body').animate({
        scrollTop:$('.box1').offset().top
    }, {
            queue:false, duration:300
        });
    /*导航栏选项*/
    if($('.navbox').is(':animated')){
    }else{
         $('.navbox').stop(true).animate({
            right:'0px'
        }, {
            queue:false, duration:300
        });
     };
    /*返回顶部*/
    if($('.backup').is(':animated')){
     }else{
        $('.backup').stop(true).animate({
            right:'+10px'
        }, {
            queue:false, duration:300
        });
    };
});

$('.box1').find('.Wrapdown').click(function(){
	$('html,body').animate({
        scrollTop:$('.swiper-container').offset().top
    }, {
            queue:false, duration:300
        });
});

$('.vcr').find('.Wrapdown').click(function(){
    $('html,body').animate({
        scrollTop:$('.introduce').offset().top
    }, {
            queue:false, duration:150
        });

    if($('.backup').is(':animated')){
     }else{
        $('.backup').stop(true).animate({
            right:'+10px'
        }, {
            queue:false, duration:300
        });
    };
});

/*轮播图(开源)*/
var swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*小白条上浮*/
$(function(){
    $('.swiper-pagination-bullet').hover(function(){
        $(this).css({
            'transform': 'translate3d(0,-4px,0)',
            'box-shadow': '0 4px 10px rgba(255,255,255,0.5)'
        }).siblings().css({
            'transform':'translate3d(0,0,0)',
            'box-shadow': 'none'
        });
    }).parents('.swiper-pagination').mouseleave(function() {
        $('.swiper-pagination-bullet').css({
            'transform':'translate3d(0,0,0)',
            'box-shadow': 'none'
        });
    });
});

/*导航栏滚动*/
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();//获取滚动条垂直距离
        if(scrollTop >= 40){
            $('.header').css({
                'top':'0',
                'position':'fixed',
            });
        }else{
            $('.header').css({
                'top':'40px',
                'position':'absolute'
            });
        };
    });
});

/*导航栏小白条位置*/
$(function(){
    //初始位置
    var navchoose = $('.nav li.navchoose').index();
    var index = new String();
    index = navchoose*(45+44)+'px';
    
    $('.navbox').find('.choose').css({
        'left':index
    });
});

/*导航栏小白条滑动动画*/
$('.nav li').hover(function(){
    //滑动位置
    var navchoose = $('.nav li.navchoose').index();
    var choose = $('.nav li').index(this);
    var index = new String();
    index = '+'+(choose*(45+44))+'px'

    $(this).parents('.navbox').find('.choose').stop(true).animate({
        left:index
    }, {
            queue:false, duration:150
        });
}).parents('.navbox').mouseleave(function() {
    //复位
    var navchoose = $('.nav li.navchoose').index();
    var index = new String();
    index = navchoose*(45+44)+'px';
    
    $(this).find('.choose').animate({
        left:index
    },{
            queue:false, duration:150
        });
});

/*导航栏选项&返回顶部 动画*/
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();//获取滚动条垂直距离
        if(scrollTop < $('.box1').offset().top){
            /*导航栏选项*/
            if($('.navbox').is(':animated')){
            }else{
                $('.navbox').stop(true).animate({
                    right:'-430px'
                }, {
            queue:false, duration:300
        });
            };
        }else{
            /*导航栏选项*/
            if($('.navbox').is(':animated')){
            }else{
                $('.navbox').stop(true).animate({
                    right:'0px'
                }, {
            queue:false, duration:300
        });
            };
        };
        if(scrollTop < $('.box1').offset().top){
            /*返回顶部*/
            if($('.backup').is(':animated')){
            }else{
                $('.backup').stop(true).animate({
                    right:'-60px'
                }, {
            queue:false, duration:300
        });
            };
        }else{
            /*返回顶部*/
            if ($('html').width() >= 1135) {
                if($('.backup').is(':animated')){
                }else{
                    $('.backup').stop(true).animate({
                        right:'+10px'
                    }, {
            queue:false, duration:300
        });
                };
            };
        };
    });
});

/*返回顶部*/
$('.backup').click(function(){
    $('body,html').animate({
        scrollTop:$('html').offset().top
    }, {
            queue:false, duration:300
        });
    /*导航栏选项*/
    if($('.navbox').is(':animated')){
    }else{
        $('.navbox').stop(true).animate({
            right:'-430px'
        }, {
            queue:false, duration:300
        });
            };
    /*返回顶部*/
    if($('.backup').is(':animated')){
    }else{
        $('.backup').stop(true).animate({
            right:'-60px'
        }, {
            queue:false, duration:300
        });
    };
});

/*返回顶部隐藏*/
$(window).resize(function(){
     var width = $('html').width();
    if (width < 1135) {
        $('.backup').css({
            'display':'none'
        });
    }else{
        $('.backup').css({
            'display':'block'
        });
    };
});

/*侧边栏浮现&文本框收缩*/
var bars = 0;
$('.bars').click(function(){
    var texton= $('.mainbox').width()-340+'px';
    if (bars == 0) {
        $(this).animate({
            left:'340px'
        }, 150).parents('body').find('.fixednav').animate({
            left:'0px'
        }, {
            queue:false, duration:150
        }).parents('body').find('.mainbox').find('.textbox').animate({
            width:texton,
            left:'340px'
        }, {
            queue:false, duration:150
        }).delay(150).parents('body').find('.mainbox').find('.textbox').css({
            'min-width':'795px'
        });
        
        $(this).parents('body').find('.header').find('h1').fadeOut(300);
        $(this).parents('body').find('.header').find('img').fadeOut(300);
        bars = 1;
    }else{
        $(this).animate({
            left:'0px'
        }, 150).parents('body').find('.fixednav').animate({
            left:'-340px'
        }, {
            queue:false, duration:150
        }).parents('body').find('.mainbox').find('.textbox').animate({
            width:'100%',
            left:'0px'
        },{
            queue:false, duration:150
        }).delay(150).parents('body').find('.mainbox').find('.textbox').css({
            'min-width':'1135px'
        });

        $(this).parents('body').find('.header').find('h1').fadeIn(300);
        $(this).parents('body').find('.header').find('img').fadeIn(300);
        bars = 0;
    };
});

/*侧边栏高度位置自适应*/
$(document).scroll(function(){
    var scroH = 40-$(document).scrollTop();
    if (scroH >=0 ) {
        $('.fixednav').css({
            'top':scroH+'px'
        });
    }else{
        $('.fixednav').css({
            'top':'0px'
        });
    };
});

/*文本框宽度自适应*/
$(window).resize(function(){
    var left = $('.fixednav').position().left;
    var texton= $('.mainbox').width()-340+'px';
    if (left == 0) {
        $('.textbox').css({
            'width':texton
        });
    };
});

/*侧边栏滑动效果*/
$('.options').find('i').hover(function(){
    $(this).animate({
        left:'10px'
    }, 50).mouseleave(function(){
        $(this).animate({
            left:'0px'
        }, 50);
    });
});

/*跳转到指定历史节点*/
$('.options').find('i').click(function(){
    $(this).parents('html,body').animate({
        scrollTop:$('#'+$(this).attr('class')).offset().top-70
    }, 150);
});

/*蒙版*/
$('.introbox').hover(function(){
    $(this).find('.mask').animate({
        left:"-5%"
    }, 
    {
        queue:false, duration:250
    });
});
$('.introbox').mouseleave(function(){
    $(this).find('.mask').animate({
        left:"-115%"
    }, 
    {
        queue:false, duration:250
    });
});


/*轮播图*/
var imgclass = 100/($('.imglist').size()+1);
var imgindex = 1;
var imgeq = 0;
    
//初始化宽度
$('.imglist').eq(0).css({
    width: 2*imgclass+'%',
    opacity: '1'
}).siblings().css({
    width: imgclass+'%'
});

//滑动
$('.imgdown').find('ul').find('li').mouseenter(function(){
    //构建初始值
    if($('.imgdown').find('ul').find('li').index(this)!=imgeq){
        imgindex++;
        imgeq = $('.imgdown').find('ul').find('li').index(this);
    }
    if (imgindex == 3) {
        imgindex = 0;
    };

    //滑动效果
    $(this).stop().animate({
        width:2*imgclass+'%',
        opacity:'1'
    }, {
        queue:false, duration:150
    }).siblings().stop().animate({
        width:imgclass+'%',
        opacity:'0.8'
    }, {
        queue:false, duration:150
    });

    //轮播图滚动
    if(imgindex == 1){
        $('.img').eq(1).css({
            background: 'url(../index/food/'+imgeq+'.jpg)',
            "background-size":"cover"
        });
        $('.center').find('h4').eq(imgeq).addClass('block').siblings('h4').removeClass('block');
        $('.center').find('.centertext').eq(imgeq).addClass('block').siblings('.centertext').removeClass('block');

        $('.img').eq(0).css({
            opacity:'1'
        }).animate({
            left:'-100%'
        }, {
            queue:false, duration:200
        });
        $('.img').eq(1).css({
            opacity:'1'
        }).animate({
            left:'0'
        }, {
            queue:false, duration:200
        });
        $('.img').eq(2).css({
            opacity:'0'
        }).animate({
            left:'100%'
        }, {
            queue:false, duration:200
        });
    };

    if(imgindex == 2){
        console.log(imgeq);
        $('.img').eq(2).css({
            background:'url(../index/food/'+imgeq+'.jpg)',
            "background-size":"cover"
        });
        $('.center').find('h4').eq(imgeq).addClass('block').siblings('h4').removeClass('block');
        $('.center').find('.centertext').eq(imgeq).addClass('block').siblings('.centertext').removeClass('block');

        $('.img').eq(0).css({
            opacity:'0'
        }).animate({
            left:'100%'
        }, {
            queue:false, duration:200
        });
        $('.img').eq(1).animate({
            left:'-100%'
        }, {
            queue:false, duration:200
        });
        $('.img').eq(2).css({
            opacity:'1'
         }).animate({
            left:'0'
        }, {
            queue:false, duration:200
        });
     };

    if(imgindex == 0){
        console.log(imgeq);
        $('.img').eq(0).css({
            background:'url(../index/food/'+imgeq+'.jpg)',
            "background-size":"cover"
        });
        $('.center').find('h4').eq(imgeq).addClass('block').siblings('h4').removeClass('block');
        $('.center').find('.centertext').eq(imgeq).addClass('block').siblings('.centertext').removeClass('block');

        $('.img').eq(0).css({
            opacity:'1'
        }).animate({
            left:'0'
        }, {
            queue:false, duration:200
        });
        $('.img').eq(1).css({
            opacity:'0'
        }).animate({
            left:'100%'
        }, {
            queue:false, duration:200
        });
        $('.img').eq(2).animate({
            left:'-100%'
        }, {
            queue:false, duration:200
        });
    };
});