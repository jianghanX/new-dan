
$('li>ul').css("display", "none")
$("#newe").mouseover(function() {
	var ul = $(this).children("ul")
	$(this).css("background", "url(../images/未标题-1.jpg)no-repeat 59px white")
	ul.stop().slideDown(300)
}).mouseout(function() {
	$(this).css("background", "url(../images/未标题-3.jpg)no-repeat 59px")
	var ul = $(this).children("ul")
	ul.stop().slideUp(300)
})

$("#kefu").mouseover(function() {
	var ul = $(this).children("ul")
	$(this).css("background", "url(../images/未标题-1.jpg)no-repeat 59px white")
	ul.stop().slideDown(300)
}).mouseout(function() {
	$(this).css("background", "url(../images/未标题-3.jpg)no-repeat 59px")
	var ul = $(this).children("ul")
	ul.stop().slideUp(300)
})

$('#input1').click(function() {
	input1.value = null
}).blur(function() {
	input1.value = "请输入你要搜索的关键字"
})



$('#input2').click(function() {
	input2.value = null
}).blur(function() {
	input2.value = "输入Email地址"
})


$('#username').click(function() {
	username.value = null
}).blur(function() {
	
})




$('#logo_l').mouseenter(function(){
	$('#gs').css("display","block")
}).mouseleave(function(){
	$('#gs').css("display","none")
}).mousemove(function(e){
	$('#gs').css({"left":e.clientX + 10,"top":e.clientY + 10})
})



$('#bg>span').mouseover(function() {
	$('#banner_l').css("background", "#fdfbfb")
	$(this).css({
		"background": "#ffffff",
		"box-shadow": "0px 2px 2px 2px #cdcdcd"
	})
}).mouseout(function() {
	$('#banner_l').css("background", "#ffffff")
	$(this).css({
		"background": "",
		"box-shadow": ""
	})
})