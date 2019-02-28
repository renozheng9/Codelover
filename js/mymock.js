Mock.mock(
  'http://mockjs_Total_Overdue', {
      "status":"200",
      "message":"ok",
      "data|7":[//返回10条数据
          {
              'num|+1':0,
              'x_data':function(){
                  return String.fromCharCode(65+this.num);
              },
              "Total_Overdue|1-50":50,          //模拟数据(1-50)
          }
      ]
  }
);
Mock.mock(
  'http://mockjs_Work_Hours', {
      "status":"200",
      "message":"ok",
      "data|4":[//返回4条数据
          {
              'x_pie|+1':1,
              "data_pie|50-300":300,          //模拟数据(50-300)
          }
      ]
  }
);
Mock.mock(
  'http://mockjs_barChartHome', {
      "status":"200",
      "message":"ok",
      "data|12":[//返回12条数据
          {
              'x_bar|+1':1,
              "data_bar|20-100":100,          //模拟数据(20-100)
          }
      ]
  }
);