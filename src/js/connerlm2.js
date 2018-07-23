var cm2lis = $('#conner_lm2_ul');
var cm2btns = $('#conner_lm2_ol').children();
var cm2index = 0;
var timer12 = setInterval(lunbo7,3000)
function lunbo7(){
	cm2index++;
	if (cm2index == 3) {
		cm2index = 1;
		cm2lis.css("left","0")
	}
	for (var i = 0;i<cm2btns.length;i++) {
		
		cm2btns[i].style.background = ""
	}
	cm2btns[cm2index == 2?0:cm2index].style.background = "#ff6600"
	startMove(conner_lm2_ul,{"left":-480*cm2index})
}
cm2lis.mouseenter(function(){
	clearInterval(timer12)
}).mouseleave(function(){
	timer12 = setInterval(lunbo7,3000)
})
for( let i = 0 ; i < cm2btns.length ; i++ ){
		cm2btns[i].onmouseover = function(){
			cm2index = i-1;
			lunbo7();
		}
	}