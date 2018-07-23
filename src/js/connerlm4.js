var cm4lis = $('#conner_lm4_ul');
var cm4btns = $('#conner_lm4_ol').children();
var cm4index = 0;
var timer14 = setInterval(lunbo9,3000)
function lunbo9(){
	cm4index++;
	if (cm4index == 3) {
		cm4index = 1;
		cm4lis.css("left","0")
	}
	for (var i = 0;i<cm4btns.length;i++) {
		
		cm4btns[i].style.background = ""
	}
	cm4btns[cm4index == 2?0:cm4index].style.background = "#ff6600"
	startMove(conner_lm4_ul,{"left":-480*cm4index})
}
cm4lis.mouseenter(function(){
	clearInterval(timer14)
}).mouseleave(function(){
	timer14 = setInterval(lunbo9,3000)
})
for( let i = 0 ; i < cm4btns.length ; i++ ){
		cm4btns[i].onmouseover = function(){
			cm4index = i-1;
			lunbo9();
		}
	}