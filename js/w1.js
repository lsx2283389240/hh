

			var arr=document.getElementById("arr");//两个三角
			var slide=document.getElementById("slide");//轮播图盒子
			slide.onmouseover=function(){
				arr.style.display="block" //显示三角
			}
			slide.onmouseover=function(){
				arr.style.display="none"; //掩盖三角
			}
			
			var li01=document.getElementById("li01");
			var li02=document.getElementById("li02");
			var li03=document.getElementById("li03");
			var li04=document.getElementById("li04");
			var li05=document.getElementById("li05");
			var pic=document.getElementById("pic");
			li01.onclick=function(){
				pic.src="C:\Users\李淑贤\Desktop\file upload\images\pc3.jpg"
			}
			li02.onmouseover=function(){
				pic.src="C:\Users\李淑贤\Desktop\file upload\images\pc4.jpg"
			}
			li03.onmouseover=function(){
				pic.src="C:\Users\李淑贤\Desktop\file upload\images\pic3.jpg"
			}
			li04.onmouseover=function(){
				pic.src="C:\Users\李淑贤\Desktop\file upload\images\pic1.jpg"
			}
			li05.onmouseover=function(){
				pic.src="C:\Users\李淑贤\Desktop\file upload\images\pic2.jpg"
			}
			li06.onmouseover=function(){
				pic.src="C:\Users\李淑贤\Desktop\file upload\images\pic3.jpg"
			}