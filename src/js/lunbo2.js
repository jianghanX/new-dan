var list = $('#banner_r_ul');
var btnss = $('#banner_r_ol').children();
var index = 0;
var timer7 = setInterval(lunbo1,2000)
function lunbo1(){
	index++;
	if (index == 4) {
		index = 1;
		list.css("left","0")
	}
	for (var i = 0;i<btnss.length;i++) {
		btnss[i].className = "";
	}
	btnss[index == 3?0:index].className = "blue"
	startMove(banner_r_ul,{"left":-230*index})
}
list.mouseenter(function(){
	clearInterval(timer7)
}).mouseleave(function(){
	timer7 = setInterval(lunbo1,2000)
})
for( let i = 0 ; i < btnss.length ; i++ ){
		btnss[i].onmouseover = function(){
			index = i-1;
			lunbo1();
		}
	}