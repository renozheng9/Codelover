var lineChart1 = new Vue({
    el: '#lineChart1',
    data: {
        lineChart1: []
    },
    created: function () {
        //console.group('created 创建完毕状态===============》');
        //console.log('created 创建完毕状态===============》');
        this.init();//初始化方法调用 ajax
    },
    methods: {
        init: function () {
            var _self = this;//把this复制给一个变量，因为在axios里写this代表的是axios
            // var _self = this.people;//这里不能能直接写this.people
            //console.log(_self);
            // axios.get('/db/user.json')
            axios.get('http://mockjs_Total_Overdue')//这个是下面mock模拟数据请求用的
                .then(function (response) {
                    //console.log(response.data);//response.data代表实际返回的数据
                    _self.lineChart1 = response.data.data;
                    
                    const Line_Chart_1 =new G2.Chart({
                        container: 'lineChart1',
                        forceFit: true,
                        height : 150,
                        padding:[20,30,50,30],
                    });
                    //设置y轴最小值（起点）
                    Line_Chart_1.scale('Total_Overdue', {
                        min: 0
                    });
                    Line_Chart_1.source(_self.lineChart1, {
                        //去除X轴首尾两端的空白部分
                        x_data: {
                            range: [0, 1]
                        }
                    });
                    Line_Chart_1.axis('Total_Overdue', {
                        label: null,//隐藏y轴文本
                        grid:null//隐藏网格线
                    });
                    Line_Chart_1.line().position('x_data*Total_Overdue');
                    Line_Chart_1.point().position('x_data*Total_Overdue').size(4).shape('circle').style({
                        stroke: '#fff',
                        lineWidth: 1
                    });
                    Line_Chart_1.render();
                    //console.log(_self);                   
                })
                .catch(function (err) {
                    console.log(err);
                    console.log("失败");
                });

        }
    }


})

// Pie Chart

// var pieChart = new Vue({
//     el: '#pieChart',
//     data: {
//         pieChart: []
//     },
//     created: function () {
//         this.init();//初始化方法调用 ajax
//     },
//     methods: {
//         init: function () {
//             var _self = this;
//             axios.get('http://mockjs_Work_Hours')//这个是下面mock模拟数据请求用的
//                 .then(function (response) {
//                     console.log(response.data);//response.data代表实际返回的数据
//                     _self.pieChart = response.data.data;
//                     console.log(_self.pieChart.length);
//                     var pie_Chart = new G2.Chart({
//                       container: 'pieChart',
//                       forceFit: true,
//                       height: 200,
//                       padding:[10,30,10,30]
//                     });
                  
//                     pie_Chart.source(pieChart);
//                     pie_Chart.coord('theta', {
//                       innerRadius: 0.8
//                     });
//                     pie_Chart.legend(false);
//                     pie_Chart.tooltip({
//                       showTitle: false
//                     });
//                     pie_Chart.intervalStack().position('data_pie').color('x_pie').shape('sliceShape');
//                     pie_Chart.render();

//                     //console.log(_self);
//                     console.log("成功");                   
//                 })
//                 .catch(function (err) {
//                     console.log(err);
//                     console.log("失败");
//                 });

//         }
//     }


// })




// Bar Chart

// var barChartHome = new Vue({
//      el: '#barChartHome',
//     data: {
//         barChartHome: []
//     },
//     created: function () {
//         this.init();//初始化方法调用 ajax
//     },
//     methods: {
//         init: function () {
//             var _self = this;
//             axios.get('http://mockjs_barChartHome')//这个是下面mock模拟数据请求用的
//                 .then(function (response) {
//                     console.log(response.data);//response.data代表实际返回的数据
//                     _self.barChartHome = response.data.data;
//                     console.log(_self.barChartHome.length);
//                     var bar_chart = new G2.Chart({
//                         container: 'barChartHome',
//                         forceFit: true,
//                         height: 150,
//                         padding:[5,10,10,10]
//                       });
//                       //设置y轴最小值（起点）
//                       bar_chart.scale('data_bar', {
//                         min: 0
//                       });
//                       bar_chart.source(barChartHome, {
//                         //去除X轴首尾两端的空白部分
//                         x_bar: {
//                             range: [0, 1]
//                           }
//                       });
//                       bar_chart.axis('data_bar', {
//                         label: null,//隐藏y轴文本
//                         grid:null//隐藏网格线
//                       });
//                       bar_chart.axis('x_bar', {
//                         label: null,//隐藏x轴文本
//                       });
                
//                     bar_chart.source(barChartHome);
//                     bar_chart.scale('data_bar', {
//                         tickInterval: 50
//                     });
//                     bar_chart.interval().position('x_bar*data_bar');
//                     bar_chart.render();
//                     //console.log(_self);                   
//                 })
//                 .catch(function (err) {
//                     console.log(err);
//                     console.log("失败");
//                 });

//         }
//     }


// })