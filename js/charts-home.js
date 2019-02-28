$(document).ready(function () {

    // Line Chart

    const data_double = [
        {
            x:1,
            type:"Visitors",
            num:50
        },
        {
            x:1,
            type:"Views",
            num:20
        },
        {
            x:2,
            type:"Visitors",
            num:20
        },
        {
            x:2,
            type:"Views",
            num:7
        },
        {
            x:3,
            type:"Visitors",
            num:60
        },
        {
            x:3,
            type:"Views",
            num:35
        },
        {
            x:4,
            type:"Visitors",
            num:31
        },
        {
            x:4,
            type:"Views",
            num:17
        },
        {
            x:5,
            type:"Visitors",
            num:52
        },
        {
            x:5,
            type:"Views",
            num:26
        },
        {
            x:6,
            type:"Visitors",
            num:22
        },
        {
            x:6,
            type:"Views",
            num:8
        },
        {
            x:7,
            type:"Visitors",
            num:40
        },
        {
            x:7,
            type:"Views",
            num:18
        },
        {
            x:8,
            type:"Visitors",
            num:25
        },
        {
            x:8,
            type:"Views",
            num:10
        },
        {
            x:9,
            type:"Visitors",
            num:30
        },
        {
            x:9,
            type:"Views",
            num:14
        },
        {
            x:10,
            type:"Visitors",
            num:68
        },
        {
            x:10,
            type:"Views",
            num:46
        },
        {
            x:11,
            type:"Visitors",
            num:56
        },
        {
            x:11,
            type:"Views",
            num:30
        },
        {
            x:12,
            type:"Visitors",
            num:40
        },
        {
            x:12,
            type:"Views",
            num:30
        },
        {
            x:13,
            type:"Visitors",
            num:60
        },
        {
            x:13,
            type:"Views",
            num:14
        },
        {
            x:14,
            type:"Visitors",
            num:43
        },
        {
            x:14,
            type:"Views",
            num:28
        },
        {
            x:15,
            type:"Visitors",
            num:55
        },
        {
            x:15,
            type:"Views",
            num:17
        },
        {
            x:16,
            type:"Visitors",
            num:39
        },
        {
            x:16,
            type:"Views",
            num:25
        },
        {
            x:17,
            type:"Visitors",
            num:47
        },
        {
            x:17,
            type:"Views",
            num:17
        }
    ]
    const Line_Chart = new G2.Chart({
      container: 'lineChart',
      forceFit: true,
      height:300
      //padding:[30,20,30,20]
    });
    Line_Chart.axis('num', {
        grid:null//隐藏网格线
      });
    Line_Chart.source(data_double, {
      x: {
        range: [0, 1]
      }
    });
    Line_Chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    });
    
    Line_Chart.line().position('x*num').color('type');
    Line_Chart.point().position('x*num').color('type').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1
    });
    Line_Chart.render();
    




    // Pie Chart
  
    
    const pie_data=[
        {
            x_pie:"First",
            data_pie:300
        },
        {
            x_pie:"Second",
            data_pie:50
        },
        {
            x_pie:"Third",
            data_pie:100
        },
        {
            x_pie: "Fourth",
            data_pie:60
        }
    ]
    
    var pie_Chart = new G2.Chart({
      container: 'pieChart',
      forceFit: true,
      height: 200,
      padding:[10,30,10,30]
    });

    pie_Chart.source(pie_data);
    pie_Chart.coord('theta', {
      innerRadius: 0.8
    });
    pie_Chart.legend(false);
    pie_Chart.tooltip({
      showTitle: false
    });
    //   var bgView = pie_Chart.view();
    //   bgView.guide().text({
    //     position: ['50%', '50%'],
    //     content: '90 hours',
    //     style: {
    //       lineHeight: '240px',
    //       fontSize: '30',
    //       fill: '#262626',
    //       textAlign: 'center'
    //     }
    //   });
    pie_Chart.intervalStack().position('data_pie').color('x_pie').shape('sliceShape');

    pie_Chart.render();

    
    // Bar Chart
    
    const Bar_data=[
        {
            x_bar:"January",
            data_bar:35
        },
        {
            x_bar:"February",
            data_bar:49
        },
        {
            x_bar:"March",
            data_bar:55
        },
        {
            x_bar:"April",
            data_bar:68
        },
        {
            x_bar:"May",
            data_bar:81
        },
        {
            x_bar:"June",
            data_bar:95
        },
        {
            x_bar:"July",
            data_bar:85
        },
        {
            x_bar:"August",
            data_bar:40
        },
        {
            x_bar:"September",
            data_bar:30
        },
        {
            x_bar:"October",
            data_bar:15
        },
        {
            x_bar:"November",
            data_bar:27
        },
        {
            x_bar:"December",
            data_bar:22
        }
    ]
    var bar_chart = new G2.Chart({
        container: 'barChartHome',
        forceFit: true,
        height: 150,
        padding:[5,10,10,10]
      });
      //设置y轴最小值（起点）
      bar_chart.scale('data_bar', {
        min: 0
      });
      bar_chart.source(Bar_data, {
        //去除X轴首尾两端的空白部分
        x_bar: {
            range: [0, 1]
          }
      });
      bar_chart.axis('data_bar', {
        label: null,//隐藏y轴文本
        grid:null//隐藏网格线
      });
      bar_chart.axis('x_bar', {
        label: null,//隐藏x轴文本
      });

    bar_chart.source(Bar_data);
    bar_chart.scale('data_bar', {
        tickInterval: 50
    });
    bar_chart.interval().position('x_bar*data_bar');
    bar_chart.render();



    
    
});
