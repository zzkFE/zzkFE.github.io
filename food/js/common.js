$(function(){
	setNavStyle()
	watchMore()
	scrollToEle()
})

var scrollToEle =function(){
	var flag= GetQueryString("flag")
	if(flag){
		console.log($("#"+flag))
		$("#"+flag).trigger("click")
	}
}

function GetQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   var r = window.location.search.substr(1).match(reg);
   if (r!=null) return (r[2]); return null;
}
var setNavStyle=function(){
	var caipuEle=$(".caipu")
	var newsEle=$(".news")
	var videoEle=$(".video")
	var linkEle=$(".link")

	var jqIndex=$("#index")
	var jqcaipu=$("#caipu")
	var jqnews=$("#news")
	var jqvideo=$("#video")
	var jqlink=$("#link")

	var imgh = $("#big-img").outerHeight()
	var jqnavEle =$("#nav")

	$(document).scroll(function(){
		var caipuTop = caipuEle.offset().top;
		var newsTop= newsEle.offset().top;
		var videoTop= videoEle.offset().top;
		var linkTop=linkEle.offset().top;

		if($(document).scrollTop()>imgh-jqnavEle.outerHeight()){
			jqnavEle.addClass("active")
		}
		else{
			jqnavEle.removeClass("active")
		}

		if($(document).scrollTop()<caipuTop-jqnavEle.outerHeight()*1.5){
			jqIndex.parent("li").addClass("active").siblings("li").removeClass("active")
			jqlink.parent("li").removeClass("active")
		}
		else if($(document).scrollTop()>=caipuTop-jqnavEle.outerHeight()*1.5 && $(document).scrollTop()<newsTop-jqnavEle.outerHeight()*1.5){
			jqcaipu.parent("li").addClass("active").siblings("li").removeClass("active")
			jqlink.parent("li").removeClass("active")
		}
		else if($(document).scrollTop()>=newsTop-jqnavEle.outerHeight()*1.5 && $(document).scrollTop()<videoTop-jqnavEle.outerHeight()*1.5){
			jqnews.parent("li").addClass("active").siblings("li").removeClass("active")
			jqlink.parent("li").removeClass("active")
		}
		else{
			jqvideo.parent("li").addClass("active").siblings("li").removeClass("active")
		}
	})

	if($(document).scrollTop()>imgh-jqnavEle.outerHeight()){
		jqnavEle.addClass("active")
	}
	else{
		jqnavEle.removeClass("active")
	}
}

var watchMore=function(){
	var caipuEle=$(".caipu")
	var newsEle=$(".news")
	var videoEle=$(".video")
	var linkEle=$(".link")

	var jqnavEle =$("#nav")
	$("#more").on("click",function(){
		var a= caipuEle.offset().top;
		$("body").finish().animate({scrollTop: a-jqnavEle.outerHeight()*1.5},600,"swing"); 
	})

	$("#caipu").on("click",function(){
		var a= caipuEle.offset().top;
		$("body").finish().animate({scrollTop: a-jqnavEle.outerHeight()*1.5},600,"swing"); 
	})

	$("#news").on("click",function(){
		var a= newsEle.offset().top;
		$("body").finish().animate({scrollTop: a-jqnavEle.outerHeight()*1.5},600,"swing"); 
	})

	$("#video").on("click",function(){
		var a= videoEle.offset().top;
		$("body").finish().animate({scrollTop: a-jqnavEle.outerHeight()*1.5},600,"swing"); 
	})

	$("#index").on("click",function(){
		$("body").finish().animate({scrollTop:0},600,"swing"); 
	})

	$("#link").on("click",function(){
		var a= linkEle.offset().top;
		$("body").finish().animate({scrollTop: a-jqnavEle.outerHeight()*1.5},600,"swing"); 
		$(this).parent("li").addClass("active")
	})


}