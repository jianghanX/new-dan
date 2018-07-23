var cmlis = $('#conner_lm_ul');
var cmbtns = $('#conner_lm_ol').children();
var cmindex = 0;
var timer11 = setInterval(lunbo6,3000)
function lunbo6(){
	cmindex++;
	if (cmindex == 3) {
		cmindex = 1;
		cmlis.css("left","0")
	}
	for (var i = 0;i<cmbtns.length;i++) {
		
		cmbtns[i].style.background = ""
	}
	cmbtns[cmindex == 2?0:cmindex].style.background = "#ff6600"
	startMove(conner_lm_ul,{"left":-480*cmindex})
}
cmlis.mouseenter(function(){
	clearInterval(timer11)
}).mouseleave(function(){
	timer11 = setInterval(lunbo6,3000)
})
for( let i = 0 ; i < cmbtns.length ; i++ ){
		cmbtns[i].onmouseover = function(){
			cmindex = i-1;
			lunbo6();
		}
	}