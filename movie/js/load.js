window.onload = function() {
        var url = 'https://www.zhengchengfeng.cn/test.php';
        var content = document.getElementById('content');
        var tmp = '';
        // 进入页面初始化请求第一页数据
        getData(1);
 
        // 使用ajax函数请求数据并渲染到页面
        function getData(page) {
            content.innerHTML = '正在加载...';
            ajax({
                url: "https://www.zhengchengfeng.cn/test.php",
//				url: "https://cnodejs.org/api/v1/topics?limit=10&page="+page ,
                type: "get",
                dataType: "JSON",
                success: function(data) {
	                	var list = data.data;
	                	var index=0;
	                	var data_num=0;
	                	list.forEach(function(context) {                                                 
	                            data_num++;
                        });
                    	if(page==6){	                		
	                		index=2;                		
	                	}else{
	                		index=4;
	                	}	           
		                	for(var i=0;i<index;i++){
		                		tmp +=	'<li class="movie_item">'+
				            		
				            		'<div class="poster">'+
				            		'</div>'+
						        		'<ul class="movie_info">'+
									        '<li class="info-item">'+
									        	'<p>'+list[(page-1)*4+i].movie_name+'</p>'+	        	
									        '</li>'+
								        	'<li class="info-item">'+
								        		'<p>'+list[(page-1)*4+i].duration+'</p>'+ 
								        	'</li>'+
								        	'<li class="info-item">'+
								        		'<p>'+list[(page-1)*4+i].totle_office+'</p>'+
								        	'</li>'+
						        		'</ul>'+  
					        		
			    				'</li>';
	                    }
	                	content.innerHTML = tmp;
	                    tmp = '';                                       
                },           
                error: function(err) {
                    alert('请求数据失败');
                }
            })
        }
 
        
        // 示例化分页组件
        new myPagination({
            id: 'pagination',
            curPage: 1, //初始页码
            pageTotal: 6, //总页数
            pageAmount: 4, //每页多少条
            dataTotal: 22, //总共多少条数据
            pageSize: 5, //可选,分页个数
            getPage: function(page) {
              // 点击分页按钮请求数据
                getData(page);
            }
        })
        
        
    }