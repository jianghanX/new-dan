var ctlis = $('#conner_l_ul');
var ctbtns = $('#conner_l_ol').children();
var ctindex = 0;
var timer10 = setInterval(lunbo5,3000)
function lunbo5(){
	ctindex++;
	if (ctindex == 3) {
		ctindex = 1;
		ctlis.css("left","0")
	}
	for (var i = 0;i<ctbtns.length;i++) {
		
		ctbtns[i].style.background = ""
	}
	ctbtns[ctindex == 2?0:ctindex].style.background = "#ff6600"
	startMove(conner_l_ul,{"left":-480*ctindex})
}
ctlis.mouseenter(function(){
	clearInterval(timer10)
}).mouseleave(function(){
	timer10 = setInterval(lunbo5,3000)
})
for( let i = 0 ; i < ctbtns.length ; i++ ){
		ctbtns[i].onmouseover = function(){
			ctindex = i-1;
			lunbo5();
		}
	}