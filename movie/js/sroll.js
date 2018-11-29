		var count=2;
		var data_result=[];
		var flag=0;	
		var qingqiu=1;
		function getScrollTop() {
		    var scrollTop = 0;

		    if(document.documentElement && document.documentElement.scrollTop) {
		        scrollTop = document.documentElement.scrollTop;
		    } else if(document.body) {
		        scrollTop = document.body.scrollTop;
		    }
		    
		    return scrollTop;
		}
		
		//获取当前可视范围的高度
		function getClientHeight() {
		    var clientHeight = 0;

		    if(document.body.clientHeight && document.documentElement.clientHeight) {
		        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
		    } else {
		        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
		    }

		    return clientHeight;
		}
		
		//获取文档完整的高度
		function getScrollHeight() {
		    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		}
		
		function get_totle_Data() {
		    var url = 'https://www.zhengchengfeng.cn/test.php'
		        
 			ajax({
                url: "https://www.zhengchengfeng.cn/test.php",
                type: "get",
                dataType: "JSON",
                success: function(data) {
	                	var list = data.data;                	
	                	list.forEach(function(context) {                                                 
	                        var context_data = {
						        "movie_name":context.movie_name, 
						        "duration":context.duration,
						        "totle_office":context.totle_office
					    	};                        
					    data_result.push(context_data);
                       });                            
                },           
                error: function(err) {
                    alert('请求数据失败');
                }
            })
		}
		//滚动事件触发
		window.onscroll = function() {
		    var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//		        console.log(window.outerHeight);
//		        console.log(window.innerHeight);
		        if(top>window.innerHeight){
		            box.style.visibility = "visible";
		        }else{
		            box.style.visibility = "hidden";
		        }
//		        console.log(top);
//				console.log("可视高度="+getClientHeight());
//				console.log("滚动距离#=#"+getScrollTop());
//				console.log("文档高度="+getScrollHeight());
		    if(getScrollTop()  + 200 + getClientHeight() >= getScrollHeight() ) {
		        console.log('下拉刷新了')
		        //此处发起AJAX请求
		        
		       	var index=4;
		       	var content = document.getElementById('content');
		        var tmp = '';
		        // 进入页面初始化请求第一页数据
		        if(qingqiu ==1){
		        	get_totle_Data();
		        	qingqiu =0;
		        }
		        if(count<=6){
		        	flag=1;
		        	console.log("count传入="+count);
		        }
		        
		 
		        // 使用ajax函数请求数据并渲染到页面
		        
		        	if(flag==1){
		        		if(count==6){
				            index=2;	
				        }
		                console.log("加载page="+count);
				        for(var i=0;i<index;i++){
				            tmp +=	'<li class="movie_item">'+
					            		'<div class="poster">'+
					            		'</div>'+
						        		'<ul class="movie_info">'+
									        '<li class="info-item">'+
									        	'<p>'+data_result[(count-1)*4+i].movie_name+'</p>'+	        	
									        '</li>'+
								        	'<li class="info-item">'+
								        		'<p>'+data_result[(count-1)*4+i].duration+'</p>'+ 
								        	'</li>'+
								        	'<li class="info-item">'+
								        		'<p>'+data_result[(count-1)*4+i].totle_office+'</p>'+
								        	'</li>'+
						        		'</ul>'+   		
					    			'</li>';
			            }
			            content.innerHTML += tmp;
			            //tmp = '';   
			            if(count==6){
			                content.innerHTML += '没有更多了';
			            }
			            flag =0;
			            count++;
			            console.log("count更新="+count);
		           }
			}
		}
		
		