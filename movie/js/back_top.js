//回到顶部
		var timer = null;
		box.onclick = function(){
			cancelAnimationFrame(timer);
			timer = requestAnimationFrame(function fn(){
			var oTop = document.body.scrollTop || document.documentElement.scrollTop;
//				console.log(oTop);
				if(oTop > 0){
				document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
				timer = requestAnimationFrame(fn);
				}else{
				cancelAnimationFrame(timer);
				} 
			});
		}    
		