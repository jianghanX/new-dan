var ul3 = document.querySelector("#lb1")
var timer3;
var timer2;
var timer4;
timer2 = setTimeout(function(){
	startMove(ul3,{"left":-771},fn)
},2000);

var fn1 = () => {
	timer3 = setTimeout(function(){	
	startMove(ul3,{"left":-771},fn)
	},2000)
};

var fn = () => {
	timer4 = setTimeout(function(){
	startMove(ul3,{"left":0},fn1)
	},2000)
};


//var lii = Array.from(document.querySelectorAll("#lb1 li"))

lb1.onmouseenter = function () {
	clearTimeout(timer2)
	clearTimeout(timer3)
	clearTimeout(timer4)
}
lb1.onmouseleave = function () {
	clearTimeout(timer2)
	clearTimeout(timer3)
	clearTimeout(timer4)
	timer2 = setTimeout(function(){
	startMove(ul3,{"left":-771},fn)
},2000);
}