$('#mid_xingq>ul:eq(0)>li').mouseenter(function(){
	
	var ind = $(this).index();
	$('#mid_xingq>ul:gt(0)').removeClass("xianshi").eq(ind).addClass("xianshi");
	
})