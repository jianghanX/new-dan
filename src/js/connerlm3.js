var cm3lis = $('#conner_lm3_ul');
var cm3btns = $('#conner_lm3_ol').children();
var cm3index = 0;
var timer13 = setInterval(lunbo8,3000)
function lunbo8(){
	cm3index++;
	if (cm3index == 3) {
		cm3index = 1;
		cm3lis.css("left","0")
	}
	for (var i = 0;i<cm3btns.length;i++) {
		
		cm3btns[i].style.background = ""
	}
	cm3btns[cm3index == 2?0:cm3index].style.background = "#ff6600"
	startMove(conner_lm3_ul,{"left":-480*cm3index})
}
cm3lis.mouseenter(function(){
	clearInterval(timer13)
}).mouseleave(function(){
	timer13 = setInterval(lunbo8,3000)
})
for( let i = 0 ; i < cm3btns.length ; i++ ){
		cm3btns[i].onmouseover = function(){
			cm3index = i-1;
			lunbo8();
		}
	}