var drop1 = new Vue({
    el: '#notice',
    data: {
        notice:[
                {
                    notice_num:"You have 6 new messages",
                    notice_time:"4 minutes ago",
                    // fa:"fa",
                    faclass:"fa fa-envelope",
                    bgclass:"bg-green"
                },
                {
                    notice_num:"You have 5 new messages",
                    notice_time:"3 minutes ago",
                    // fa:"fa",
                    faclass:"fa fa-twitter",
                    bgclass:"bg-blue"
                    
                },
                {
                    notice_num:"You have 4 new messages",
                    notice_time:"2 minutes ago",
                    faclass:"fa fa-uploadr",
                    bgclass:"bg-orange"
                },
                {
                    notice_num:"You have 3 new messages",
                    notice_time:"1 minutes ago",          
                    faclass:"fa fa-twitter",
                    bgclass:"bg-blue"
                }
        ]
  },
}) 
var drop2 = new Vue({
   el: '#messages_ul',
   data: {
       messages:[
               {
                   messages_name:"Jason Doe",
                   messages_img:"img/avatar-1.jpg"
               },
               {
                   messages_name:"Frank Williams",
                   messages_img:"img/avatar-2.jpg"
               },
               {
                   messages_name:"Ashley Wood",
                   messages_img:"img/avatar-3.jpg"
               }
       ]
  }
  })
  var drop3 = new Vue({
    el: '#main_list',
    data: {
        main_arr:[
                {
                    html:'index.html',
                    icon_name:"fa fa-home",
                    main_name:"home",
                    isActive: true
                },
                {
                    html:'tables.html',
                    icon_name:"fa fa-grid",
                    main_name:"Tables",
                    isActive: false 
                },
                {
                    html:'charts.html',
                    icon_name:"fa fa-bar-chart",
                    main_name:"Charts",
                    isActive: false 
                },
                {
                    html:'forms.html',
                    icon_name:"fa fa-padnote",
                    main_name:"Forms",
                    isActive: false 
                }
        ]
   }
   })
  var drop4 = new Vue({
    el: '#exampledropdownDropdown',
    data: {
        page_arr:[
                {
                    page:"page"
                },
                {
                    page:"page"
                },
                {
                    page:"page"
                }
        ]
   }
   })
   var drop5 = new Vue({
    el: '#Demo_test',
    data: {
        Demo_arr:[
                {
                    icon_class:"fa fa-flask",
                    Demo:'Demo1'
                },
                {
                    icon_class:"fa fa-screen",
                    Demo:'Demo2'           
                },
                {
                    icon_class:"fa fa-mail",
                    Demo:'Demo3'                  
                },
                {
                    icon_class:"fa fa-picture",
                    Demo:'Demo4'
                }
        ]
   }
   })   
   var Counts = new Vue({
       el:'#Counts',
       data:{
           Counts_arr:[
               {
                    icon_bg:"icon bg-violet",
                    icon:"fa fa-user",
                    msg1:"New",
                    msg2:"Clients",
                    width: "25%",
                    height: "4px",
                    now:"25",
                    bar_class:"progress-bar bg-violet"
                },
                {
                    icon_bg:"icon bg-red",
                    icon:"fa fa-padnote",
                    msg1:"Work",
                    msg2:"Orders",
                    width: "70%",
                    height: "4px",
                    now:"70",
                    bar_class:"progress-bar bg-red"
                },
                {
                    icon_bg:"icon bg-green",
                    icon:"fa fa-bill",
                    msg1:"New",
                    msg2:"Invoices",
                    width: "40%",
                    height: "4px",
                    now:"40",
                    bar_class:"progress-bar bg-green"
                },
                {
                    icon_bg:"icon bg-orange",
                    icon:"fa fa-check",
                    msg1:"Open",
                    msg2:"Cases",
                    width: "50%",
                    height: "4px",
                    now:"50",
                    bar_class:"progress-bar bg-orange"
                }

        ]
       }
   })      
  var Statistics=new Vue({
      el:"#Statistics",
      data:{
        Statistics_arr:[
                {   
                    icon:"icon bg-red",
                    fa:"fa fa-tasks",
                    num:"234",
                    msg:"Applications"
                },
                {   
                    icon:"icon bg-green",
                    fa:"fa fa-calendar-o",
                    num:"152",
                    msg:"Interviews"
                },
                {   
                    icon:"icon bg-orange",
                    fa:"fa fa-paper-plane-o",
                    num:"147",
                    msg:"Forwards"
                }
        ]
      }
  })
  var project=new Vue({
      el:"#project",
      data:{
        project_arr:[
                {
                    img:"img/project-1.jpg",
                    title:"Project Title",
                    msg1:"Lorem Ipsum Dolor",
                    time:"Today at 4:24 AM",
                    clock:"12:00 PM",
                    msg_num:"20",
                    wid:"45%",
                    hei:"6px",
                    bar_class:"progress-bar bg-red"
                },
                {
                    img:"img/project-2.jpg",
                    title:"Project Title",
                    msg1:"Lorem Ipsum Dolor",
                    time:"Today at 4:24 AM",
                    clock:"12:00 PM",
                    msg_num:"20",
                    wid:"60%",
                    hei:"6px",
                    bar_class:"progress-bar bg-green"
                },
                {
                    img:"img/project-3.jpg",
                    title:"Project Title",
                    msg1:"Lorem Ipsum Dolor",
                    time:"Today at 4:24 AM",
                    clock:"12:00 PM",
                    msg_num:"20",
                    wid:"50%",
                    hei:"6px",
                    bar_class:"progress-bar bg-violet"
                },
                {
                    img:"img/project-4.jpg",
                    title:"Project Title",
                    msg1:"Lorem Ipsum Dolor",
                    time:"Today at 4:24 AM",
                    clock:"12:00 PM",
                    msg_num:"20",
                    wid:"50%",
                    hei:"6px",
                    bar_class:"progress-bar bg-orange"
                }
        ]
      }
  })
  var Articles = new Vue({
    el: '#Articles',
    data: {
        Articles_arr:[
                {
                   img:"img/avatar-1.jpg",
                   msg:"Lorem Ipsum Dolor",
                   date:"Posted on 5th June 2017 by Aria Smith."
                },
                {
                    img:"img/avatar-2.jpg",
                    msg:"Lorem Ipsum Dolor",
                    date:"Posted on 5th June 2017 by Aria Smith."
                },
                {
                   img:"img/avatar-3.jpg",
                   msg:"Lorem Ipsum Dolor",
                   date:"Posted on 5th June 2017 by Aria Smith."
                },
                {
                   img:"img/avatar-4.jpg",
                   msg:"Lorem Ipsum Dolor",
                   date:"Posted on 5th June 2017 by Aria Smith."
                },
                {
                   img:"img/avatar-5.jpg",
                   msg:"Lorem Ipsum Dolor",
                   date:"Posted on 5th June 2017 by Aria Smith."
                }      
         ]
        }    
   })   
   var Todolist = new Vue({
       el:"#Todolist",
       data:{
           Todolist_arr:[
                {
                    input_num:"input-1",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                    input_num:"input-2",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                    input_num:"input-3",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                    input_num:"input-4",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                    input_num:"input-5",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                    input_num:"input-6",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
           ]
       }
   })
   var updates = new Vue({
       el:"#updates",
       data:{
           Updates_arr:[
               {
                   msg1:"Lorem ipsum dolor sit amet.",
                   msg2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.",
                   day:"24",
                   month:"May"
                },
               {
                    msg1:"Lorem ipsum dolor sit amet.",
                    msg2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.",
                    day:"24",
                    month:"May"
               },
               {
                    msg1:"Lorem ipsum dolor sit amet.",
                    msg2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.",
                    day:"24",
                    month:"May"
               },
               {
                    msg1:"Lorem ipsum dolor sit amet.",
                    msg2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.",
                    day:"24",
                    month:"May"
               },
               {
                    msg1:"Lorem ipsum dolor sit amet.",
                    msg2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed.",
                    day:"24",
                    month:"May"
               }
           ]
       }
   })
   var Feeds =new Vue({
       el:"#Feeds",
       data:{
           feeds_arr:[
            {
                img:"img/avatar-5.jpg", 
                name:"Aria Smith",
                post_time:"Posted a new blog",
                now_time:"Today 5:60 pm - 12.06.2014",
                minutes:"5min ago",
            },
            {
                img:"img/avatar-2.jpg",
                name:"Frank Williams",
                post_time:"Posted a new blog",
                now_time:"Today 5:60 pm - 12.06.2014",
                minutes:"5min ago",
            },
            {
                img:"img/avatar-3.jpg",
                name:"Ashley Wood",
                post_time:"Posted a new blog",
                now_time:"Today 5:60 pm - 12.06.2014",
                minutes:"5min ago",
            }
           ]
       }
   })
   var Recent_Act =new Vue({
        el:"#Recent_Act",
        data:{
            Recent_Act_arr:[
                {
                   time:"6:00 am",
                   ago_time:"6 hours ago",
                   title:"Meeting",
                   msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                },
                {
                    time:"6:00 am",
                    ago_time:"6 hours ago",
                    title:"Meeting",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                 },
                 {
                    time:"6:00 am",
                    ago_time:"6 hours ago",
                    title:"Meeting",
                    msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                 }
            ]
        }
    })  
