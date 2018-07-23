var lis = Array.from(document.querySelectorAll("#ul1 li"))
var btns = Array.from(document.querySelectorAll("#ol1 li"))
var len = btns.length
var now = 0
btns.forEach((btn,index)=>{
	
	btn.onclick = () => {
		
			now = index;
			
			tab(btn)
		
	}
})
var tab = (btn) => {
	lis.forEach((li,index) => {
//		li.style.display = "none"
		li.style.display="block"
		startMove(li,{"opacity":0},()=>{
			li.style.display="none"
		})
		btns[index].style.background = "";
		
	})
//	lis[now].style.display = "block"
	startMove(lis[now],{"opacity":100},()=>{
		lis[now].style.display="block"
	})
	btns[now].style.background = "#ff6200";
}
tab();
var ds = () => {
	now++
	if (now == len) {
		now = 0
	}
	tab()
}
var timer1 = setInterval(ds,2000)
ul1.onmouseover = () => {
	clearInterval(timer1)
}
ul1.onmouseout = () => {
	timer1 = setInterval(ds,2000)
}






