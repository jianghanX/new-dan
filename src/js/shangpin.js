
div1.onmouseenter = function () {
	jingzi.style.display = "block"
	div2.style.display = "block"
}
div1.onmouseleave = function () {
	jingzi.style.display = "none"
	div2.style.display = "none"
}


div1.onmousemove = function (e) {
	var x = e.pageX - tul.offsetLeft - jingzi.offsetWidth/2
	var y = e.pageY - tul.offsetTop - jingzi.offsetHeight/2
	if (x<0) {
		x=0
	}
	if (y<0) {
		y=0
	}
	var maxX = div1.offsetWidth - jingzi.offsetWidth - 2
	var maxY = div1.offsetHeight - jingzi.offsetHeight - 2
	if (x>maxX) {
		x=maxX
	}
	if (y>maxY) {
		y=maxY
	}
	jingzi.style.left = x+"px"
	jingzi.style.top = y+"px"
	maximg.style.left = -2*x + "px"
	maximg.style.top = -2*y + "px"
	
}
tub.onclick = e =>{
				var el = e.target
				if (el.nodeName == "IMG") {
					salmimg.src = maximg.src = el.src
				}
			}

