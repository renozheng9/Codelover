var text='';
// 使用ajax函数请求数据并渲染到页面
function getData() {
        
        var url = 'https://www.zhengchengfeng.cn/test.php';
        var content = document.getElementById('content');
        var tmp = '';
 		
 		var search_result=[];
 		var search_num=0;
            content.innerHTML = '正在加载...';
            
            ajax({
                url: "https://www.zhengchengfeng.cn/test.php",
                type: "get",
                dataType: "JSON",
                success: function(data) {
	                	var list = data.data;
	                	var index=0;
	                	list.forEach(function(context) {                          
                           if(context.movie_name.indexOf(text) != -1){
	                         	
	                            var context_data = {
	                            	"movie_name":context.movie_name, 
	                            	"duration":context.duration,
	                            	"totle_office":context.totle_office
	                            };	                            
	                           	search_result.push(context_data);
	                            search_num++;
//	                            console.log(search_num)
	                           	
                           }
                    	});

	                	if(search_num==0){
	                		content.innerHTML = "没有符合条件的结果";
	                	}else{
	                	for(var i=0;i<search_num;i++){
		                		tmp +=	'<li class="movie_item">'+
			            		'<div class="poster">'+
			            		'</div>'+
				        		'<ul class="movie_info">'+
							        '<li class="info-item">'+
							        	'<p>'+search_result[i].movie_name+'</p>'+	        	
							        '</li>'+
						        	'<li class="info-item">'+
						        		'<p>'+search_result[i].duration+'</p>'+ 
						        	'</li>'+
						        	'<li class="info-item">'+
						        		'<p>'+search_result[i].totle_office+'</p>'+
						        	'</li>'+
				        		'</ul>'+        		
			    				'</li>';
	                    }
	                	content.innerHTML = tmp;
	                    tmp = ''; 
	                    var pageTotal=1;
	                    if(search_num>=4){
	                    	pageTotal=search_num/4
	                    }
	                    // 示例化分页组件
	                    new myPagination({
            
				            id: 'pagination',
				            curPage: 1, //初始页码
				            pageTotal:pageTotal, //总页数
				            pageAmount: 4, //每页多少条
				            dataTotal:search_num, //总共多少条数据
				            pageSize: 5, //可选,分页个数  
				            getPage: function(page) {
				              // 点击分页按钮请求数据
				                getData(page);
				            }
			        	})
	                }    
                },
                    
                 
                error: function(err) {
                    alert('请求数据失败');
                }
            })
             // 示例化分页组件
	                    new myPagination({
            
				            id: 'pagination',
				            curPage: 1, //初始页码
				            pageTotal:pageTotal, //总页数
				            pageAmount: 4, //每页多少条
				            dataTotal:search_num, //总共多少条数据
				            pageSize: 5, //可选,分页个数  
				            getPage: function(page) {
				              // 点击分页按钮请求数据
				                getData(page);
				            }
			        	})
        }
function Search(){
      	text=document.getElementById("search_text").value;
        // 进入页面初始化请求第一页数据
        if (text==''){
            	alert("请输入关键词");
           }else{
            	getData();
            }
 
        
        
}
function Show_all(){
	window.onload();
}