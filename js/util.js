$(document).ready(function ($) {
    // 判断是否为移动端运行环境
    // wukong.name 20130716
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    // 判断访问环境是 Android|webOS|iPhone|iPod|BlackBerry 则运行以下脚本
                }
                else if (/iPad/i.test(navigator.userAgent)) {
                    // 判断访问环境是 iPad 则加载以下样式

                }
                else {
                    // 判断访问环境是 其他移动设备 则运行以下脚本

                }
            }
            catch (e) { }
        }
    }
        //pc端环境
    else {
        // 则运行以下脚本
        intSelect();
        intFixednav();
        var _tmpROOT = window["zt_oms_static_pages_cur_uri"];
        if (_tmpROOT == undefined) _tmpROOT = "";
        jQuery.getScript(_tmpROOT + "scripts/bootstrap.min.js");
    }

    $('.banner').flexslider({
        animation: 'fade',
        pauseOnAction: false,
        controlNav: true
        //directionNav: false
    });
    /*内页banner*/
    $('.inside-banner').flexslider({
        animation: 'fade',
        pauseOnAction: false,
        controlNav: true,
        directionNav: false
    });
    /*详情banner*/
    $('.detail-banner').flexslider({
        animation: 'fade',
        pauseOnAction: false,
        controlNav: true
        //directionNav: false
    });
    $('.scroll-nav .nav a.loctaion_change').click(function (e) {
        $('html,body').scrollTo(this.hash, this.hash);
        e.preventDefault();
    });
    $(window).resize(function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh');
        });
    });
    /*顶部搜索*/
    // $(".text-input").focusin(function(event) {
    // 	if($(this).val() === "Search"){
    // 		$(this).val("");
    // 	}
    // });
    // $(".text-input").focusout(function(event) {
    // 	if($(this).val() === ""){
    // 		$(this).val("Search");
    // 	}
    // });
    /*pc端站点语言版本选择*/
    $(".lan-show").click(function (event) {
        event.stopPropagation();
        $(this).parent().toggleClass("open");
        $(this).next().stop().toggle();
    });
    $(document).click(function (event) {
        $(".pc-con .language-list").hide();
        $(".headerr .top-site-nav li.language").removeClass("open");
    });
    /*tab切换*/
    var tabCon = $(".tab-con").children();
    var tabMain = $(".tab-main .tab-details");
    tabMain.hide().eq(0).show();
    tabCon.click(function (event) {
        var index = tabCon.index($(this));
        $(this).addClass("on").siblings(tabCon).removeClass("on");
        tabMain.hide().eq(index).show();

    });
    /*PC端导航栏效果*/
    $(".headerr .pc-nav ul li").mouseenter(function () {
        $(this).addClass("on").children("a").siblings("ol").stop().slideDown();
    }).mouseleave(function (event) {
        $(this).removeClass("on").children("a").siblings("ol").stop().slideUp();
    });

    /*PC端导航栏效果-table*/
    $(".headerr .pc-nav table td").mouseenter(function () {
        $(this).addClass("on").children("a").siblings("ol").stop().slideDown();
    }).mouseleave(function (event) {
        $(this).removeClass("on").children("a").siblings("ol").stop().slideUp();
    });
    /*PC端导航栏效果-fixedtable*/
    $(".fixednav table td").mouseenter(function () {
        $(this).addClass("on").children("a").siblings("ol").stop().slideDown();
    }).mouseleave(function (event) {
        $(this).removeClass("on").children("a").siblings("ol").stop().slideUp();
    });
    /*移动端导航栏效果*/
    //$(".nav-btn").bind('click', function (event) {
    //    $(".headerr .mobile-nav").stop().toggle();
    //});
    //$(".headerr .mobile-nav ul li i").bind('click', function (event) {
    //    $(".headerr .mobile-nav ul li ol").stop().slideUp();
    //    $(this).next().stop().slideDown();
    //});
    $(".nav-btn").click(function (event) {
        $(".headerr .mobile-nav").stop().toggle();
    });
    $(".headerr .mobile-nav ul li i").click(function (event) {
        $(".headerr .mobile-nav ul li ol").stop().slideUp();
        $(this).next().stop().slideDown();
    });
    /*手机端info部分切换效果*/
    $(".info-tab-con .title").bind('click', function (event) {
        $(".info-tab-con .info-tab-details").stop().slideUp();
        $(this).parent().toggleClass("on");
        $(this).parent().siblings("li").removeClass("on");
        $(this).next().stop().slideToggle();
    });
   
    /*移动端语言选择*/
    $(".action .language a").click(function (event) {
        event.stopPropagation();
        $(this).next().stop().toggle();
    });
    $(document).click(function (event) {
        $(".action .language-list").hide();
    });

    /*移动端搜索*/
    $(".search-btn").click(function (event) {
        $(".mobile_search").toggle();
    });

    /*左侧导航栏展开收缩效果*/
    $(".subnav li i").click(function (event) {
        $(".subnav li ol").stop().slideUp();
        $(this).next().stop().slideToggle();
        /*$(".subnav li").removeClass("active");
    	$(this).parent("li").addClass("active");*/
    });

    /*tab切换*/
    var tab = $(".tab-contorl");
    tab.children().click(function (event) {
        var index = tab.children().index($(this));
        tab.children().removeClass("active").eq(index).addClass("active")
        tab.siblings(".tab-main").find(".tab-con").hide();
        tab.siblings(".tab-main").find(".tab-con").eq(index).show();
    });

    /*搜索框*/
    $(".word-search .text_input").focus(function () {
        var value = $(this).val();
        if (value == "Keyword search") {
            $(this).val("");
            $(this).css("color", "#000");
        }
    }).blur(function () {
        var value = $(this).val();
        if (value == "") {
            $(this).val("Keyword search");
            $(this).css("color", "#666");
        }
    });

    /*日期控件*/
    if ($(".datepicker").length > 0) {
        $(".datepicker").datepicker({
            inline: true,
            showOtherMonths: true
        });
    }

    /*下拉菜单美化-移动端不美化，使用浏览器默认的*/
    function intSelect() {
        if ($(".news_select").length > 0) {
            $('.news_select').sSelect({ ddMaxHeight: '300px' });
        }
        if ($(".select-language").length > 0) {
            $('.select-language').sSelect({ ddMaxHeight: '300px' });
        }
    }

    /*搜索框*/
    $(".news_search .text_input").focus(function () {
        var value = $(this).val();
        if (value == "Keyword") {
            $(this).val("");
            $(this).css("color", "#000");
        }
    }).blur(function () {
        var value = $(this).val();
        if (value == "") {
            $(this).val("Keyword");
            $(this).css("color", "#666");
        }
    });

    /*school_and_departments*/
    $(".depa-con .open_sub").each(function () {
        var _this = $(this);
        _this.click(function (event) {
            //$(".depa-con ul").stop().slideUp();
            //_this.parent().siblings("h3").removeClass("active")
            _this.parent().toggleClass("active");
            _this.parent().next().stop().slideToggle();
        });
    });

    $(".word-wrap li a").click(function (e) { 
        $("html,body").scrollTo(this.hash, this.hash );
        $(this).parent().addClass("on").siblings().removeClass("on");
        e.preventDefault();
    });

    /*手机端侧导航*/
    $(".subnav-control").click(function (event) {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(".subnav").hide();
        } else {
            $(this).addClass('open');
            $(".subnav").show();

        }
    });
    /*手机端加载更多*/
    $(".word-con .openHideSite").click(function (event) {
        $(this).siblings(".hidesite").show();
        $(this).hide();
    });
    $(".word-wrap .openmore").click(function (event) {
        $(".word-con .openHideSite").hide();
        $(".word-con .hidesite").show();
        $('html,body').scrollTo(this.hash, this.hash);
    });
    /*手机端mobile_events_ul切换*/
    $(".mobile_events_ul > li").click(function (event) {
        $(".mobile_events_ul .events-list").stop().slideUp();
        $(".mobile_events_ul").find(".hideEventsList").hide();
        $(".mobile_events_ul").find(".open_more").hide();
        $(this).toggleClass("on");
        $(this).siblings("li").removeClass("on");
        $(this).find(".events-list").stop().slideToggle();
        $(this).find(".open_more").show();
    });
    $(".mobile_events_ul a.open_more").click(function (event) {
        event.stopPropagation();
        $(this).siblings(".hideEventsList").show();
        $(this).hide();
    });

});
function intFixednav() {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 206)
            $('.fixednav').css({ display: 'block' }).stop().animate({ 'opacity': '1', top: 0 }, 300);
        else
            $('.fixednav').css({ display: 'none' }).stop().animate({ 'opacity': '0', top: "-60px" }, 300);
    });
}
