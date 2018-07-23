$('#nav_r_b').mouseenter(function(){
	$('#nav_r_b>a').css("color","#2D2D2C")
	$('#nav_r_b>a').css({"background":"#FFFFFF","border-top":"2px solid #ff6600","border-left":"2px solid #ff6600"})
	$('#nav_r_b>ul').css({"display":"block","border-left":"2px solid #ff6600","border-bottom":"2px solid #ff6600","border-right":"2px solid #ff6600"})
	$('#nav_r_b').mouseleave(function(){
		$('#nav_r_b>a').css("color","#ffffff")
		$('#nav_r_b>ul').css("display","none")
		$('#nav_r_b>a').css({"border":"none","background":"url(../images/sprite_v140425.png)no-repeat 98px -1253px"})
		
	})
})
$('#nav_r_b2').mouseenter(function(){
	$('#nav_r_b2>a').css("color","#2D2D2C")
	$('#nav_r_b2>a').css({"background":"#FFFFFF","border-top":"2px solid #ff6600","border-left":"2px solid #ff6600"})
	$('#nav_r_b2>ul').css({"display":"block","border-left":"2px solid #ff6600","border-bottom":"2px solid #ff6600","border-right":"2px solid #ff6600"})
	$('#nav_r_b2').mouseleave(function(){
		$('#nav_r_b2>a').css("color","#ffffff")
		$('#nav_r_b2>ul').css("display","none")
		$('#nav_r_b2>a').css({"border":"none","background":"url(../images/sprite_v140425.png)no-repeat 98px -1253px"})
		
	})
	console.log(this)
})