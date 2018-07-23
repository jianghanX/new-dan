$('#mid_haop_b>li').mouseenter(function(){
	var ind = $(this).index()
	$('#mid_haop_b>li:not(:eq('+ind+'))').stop().animate({"width":170})
	$(this).stop().animate({"width":690})
})