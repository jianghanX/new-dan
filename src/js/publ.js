window.onload = function(){
	waterFall()
}
window.onscroll = function(){
	boxs = document.getElementsByClassName("box")
	//最后一张、
	lastBox = boxs[boxs.length-1]
	//最后一个盒子高度/2 + 最后一个盒子的top
	lastBoxInfo = lastBox.offsetHeight/2 + lastBox.offsetTop;
	//获取页面滚走距离
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	var winH = window.innerHeight;
	
	var main = document.getElementById("main")
	
	
	for (var i = 0 ; i < 3000 ; i+=100) {
		if (sTop > i) {
		var n = 1000
			n += i
			main.style.height = n + "px"
			if (n == 3000) {
				n = 3000
			}
		
		
	}
	}
	
	
	
	
	
	
	//当最后一张图片的高度的一半进入到可视区时   开始加载图片
	if (lastBoxInfo < sTop + winH) {
		var json = {
			data : ["1.jpg","2 (2).jpg","3 (2).jpg","4.jpg","5.jpg","6.jpg"]
		}
		for(var i = 0 ; i < json.data.length ; i++){
			var box = document.createElement("div")
			box.className = "box"
			main.appendChild(box)
			
			var pic = document.createElement("div")
			pic.className = "pic"
			box.appendChild(pic)
			
			var oimg = document.createElement("img")
			oimg.src = "../images/"+json.data[i]
			pic.appendChild(oimg)
		}
		waterFall()
		
	}
}
function waterFall(){
	arr = []  //存放高度
	//找到所有的盒子
	boxs = document.getElementsByClassName("box")
	//获取一个盒子的宽度
	boxWidth = boxs[0].offsetWidth
	//遍历所有的boxs  将前6张图片的高度存入到 数组中  定位第七张及其后面图片的位置
	for (var i = 0 ; i < boxs.length ; i++ ) {
		if (i < 6) {
			arr.push(boxs[i].offsetHeight)
		} else{
			var index = minIndex()
			//开始定位图片
			boxs[i].style.position = "absolute"
			boxs[i].style.left = boxWidth*index + "px"
			boxs[i].style.top = arr[index] + "px"
			arr[index] += boxs[i].offsetHeight
		}
		
		
	}
}


function minIndex(){
	var index = 0
	for (var i = 0 ; i < arr.length ; i++) {
		if (arr[i] < arr[index]) {
			index = i
		}
	}
	return index
}
