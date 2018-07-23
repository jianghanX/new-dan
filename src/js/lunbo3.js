var imgs = Array.from(document.querySelectorAll("#mid_t_r_b img" ))
var xb = 0;
setInterval(lunbo3,2000)
function lunbo3(){
	xb++
	if ( xb==imgs.length ) {
		xb = 0
	}
	for (var i = 0; i < imgs.length; i++) {
		startMove(imgs[i],{"opacity":0})
	}
	startMove(imgs[xb],{"opacity":100})
}
		

