var ind = num.value;
jian.onclick = function () {
	ind--
	if(ind = 1){
		ind=1
	}
	num.value = ind
	
}
jia.onclick = function () {
	ind++
	num.value = ind
}
document.onmousedown=function(){
	return false
}
