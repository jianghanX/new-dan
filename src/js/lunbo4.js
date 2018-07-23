var listt = $('#mid_xingq_ul');
var btnsss = $('#mid_xingq_ol').children();
var indexx = 0;
var timer9 = setInterval(lunbo4,2000)
function lunbo4(){
	indexx++;
	if (indexx == 3) {
		indexx = 1;
		listt.css("left","0")
	}
	for (var i = 0;i<btnsss.length;i++) {
		
		btnsss[i].style.background = ""
	}
	btnsss[indexx == 2?0:indexx].style.background = "blue"
	startMove(mid_xingq_ul,{"left":-238*indexx})
}
listt.mouseenter(function(){
	clearInterval(timer9)
}).mouseleave(function(){
	timer9 = setInterval(lunbo4,2000)
})
for( let i = 0 ; i < btnsss.length ; i++ ){
		btnsss[i].onmouseover = function(){
			indexx = i-1;
			lunbo4();
		}
	}