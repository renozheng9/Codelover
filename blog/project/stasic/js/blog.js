var xmlhttp;
var state = 3;
var username;
var password;
var role = 3;
var comid;
var ptitle;
var pcontent;
var filename;
var img1;
var userID;
var comlen;
var form=new FormData();
function loadXMLDoc(url) {
  xmlhttp = null;
  //alert(method1);
  if (window.XMLHttpRequest) {
    // code for all new browsers
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // code for IE5 and IE6
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xmlhttp != null) {
    xmlhttp.onreadystatechange = state_Change;
    xmlhttp.open("POST", url, true);
    if (state == 6) {
      xmlhttp.setRequestHeader(
        "Content-Type",
        "multipart/form-data");
    } else {
      xmlhttp.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded");

    }
    //alert(username);
    if (state == 1 || state == 2) {//登录or注册
      //sign
      xmlhttp.send("username=" + username + "&password=" + password);
    }
    if (state == 3) {//读取表格
      xmlhttp.send(null);
    }
    if (state == 4) {//删除
      xmlhttp.send("comID=" + comid);
    }
    if (state == 5) {//加评论
      xmlhttp.send("userID=" + userID+ "&title=" + ptitle + "&content=" + pcontent);
    }
    if (state == 6) {//上传
      console.log(form);
      xmlhttp.send(form);
    }
  } else {
    alert("Your browser does not support XMLHTTP.");
  }
}

function state_Change() {
  if (xmlhttp.readyState == 4) {
    // 4 = "loaded"
    if (xmlhttp.status == 200 && state == 2) {
      // 200 = OK
      var signa = xmlhttp.responseText;
      var signajson = JSON.parse(signa);
      alert(signajson.msg);
    } else if (xmlhttp.status == 200 && state == 1) {
      var signb = xmlhttp.responseText;
      var signbjson = JSON.parse(signb);
      if (signbjson.errcode == 1) {
        alert(signbjson.msg);
      } else if (signbjson.errcode == 2) {
        alert(signbjson.msg);
      } else if (signbjson.errcode == 0) {
        userID = signbjson.useID;
        alert(userID);
        var bdiv = document.getElementById("bdiv");
        bdiv.style.setProperty("display", "none");
        var signdiv = document.getElementById("signdiv");
        signdiv.style.setProperty("display", "none");
        var parent = document.getElementById("container");
        var child = document.getElementById("but");
        parent.removeChild(child);
        var selfinfo = document.createElement("div");
        selfinfo.className = "selfinfo";
        parent.appendChild(selfinfo);
        var selfimg = document.createElement("i");
        selfimg.className = "selfimg";
        //selfimg.style.background="url("+signbjson.imgUrl+")";
        selfinfo.appendChild(selfimg);
        var selfname = document.createElement("a");
        selfname.innerHTML = username;
        selfinfo.appendChild(selfname);
        if (signbjson.role == "operator") {
          role = 1;
        } else {
          role = 0;
        }
      }
    } else if (xmlhttp.status == 200 && state == 3) {
      var com = xmlhttp.responseText;
      var comjason = JSON.parse(com);
      // alert(comjason);
      var tbody2 = document.createElement("tbody");
      tbody2.id="tbody2";
      var _table = document.getElementById("table1");
      _table.appendChild(tbody2);
      comlen = comjason.length;
      for (var i = 0; i < comjason.length; i++) {
        //遍历一下json数据
        
        comid = comjason[i].comID;
        var row = tbody2.insertRow(i);
        row.id = comid;
        var idCell = document.createElement("td"); //创建第一列id
        idCell.innerHTML = comjason[i].userID; //加入行  ，下面类似
        idCell.className = "td";
        row.appendChild(idCell);
        var tiCell = document.createElement("td"); //创建第一列id
        tiCell.innerHTML = comjason[i].title; //加入行  ，下面类似
        tiCell.className = "td";
        row.appendChild(tiCell);
        var coCell = document.createElement("td"); //创建第一列id
        coCell.innerHTML = comjason[i].content; //加入行  ，下面类似
        coCell.className = "td";
        row.appendChild(coCell);
        var delCell = document.createElement("td");
        delCell.innerHTML =
          "<a href='#' onclick=delcom(" + comid + ")>删除</a>"; //加入行  ，下面类似
        delCell.className = "td";
        row.appendChild(delCell);
      }
    } else if (xmlhttp.status == 200 && state == 4) {
      var delmsg = xmlhttp.responseText;
      var delmsgjason = JSON.parse(delmsg);
      alert(delmsgjason.msg);
      var tbody4=document.getElementById("tbody2");
      var row2=document.getElementById(comid);
      tbody4.removeChild(row2);
      comlen=tbody4.length;
    } else if (xmlhttp.status == 200 && state == 5) {
      var addmsg = xmlhttp.responseText;
      var addmsgjason = JSON.parse(addmsg);
      //alert(addmsgjason.msg);
      comid = comid + 1;
      //alert(comid);
        //alert(comlen);
        var tbody3=document.getElementById("tbody2");
        var row1 = tbody3.insertRow(comlen);
        row1.id=comid;
        var idCell1 = document.createElement("td"); //创建第一列id
        idCell1.innerHTML = userID; //加入行  ，下面类似
        idCell1.className = "td";
        row1.appendChild(idCell1);
        var tiCell1 = document.createElement("td"); //创建第一列id
        tiCell1.innerHTML = ptitle; //加入行  ，下面类似
        tiCell1.className = "td";
        row1.appendChild(tiCell1);
        var coCell1 = document.createElement("td"); //创建第一列id
        coCell1.innerHTML = pcontent; //加入行  ，下面类似
        coCell1.className = "td";
        row1.appendChild(coCell1);
        var delCell1 = document.createElement("td");
        delCell1.innerHTML =
          "<a href='#' onclick=delcom(" + comid + ")>删除</a>"; //加入行  ，下面类似
        delCell1.className = "td";
        row1.appendChild(delCell1);
      //location.reload();
      clearbox();
    } else if (xmlhttp.status == 200 && state == 6) {
      var addmsg = xmlhttp.responseText;
      var addmsgjason = JSON.parse(addmsg);
      alert(addmsgjason.msg);
    } else {
      alert("Problem retrieving XML data");
    }
  }
}

function sign() {
  var bdiv = document.getElementById("bdiv");
  bdiv.style.setProperty("display", "block");
  var signdiv = document.getElementById("signdiv");
  signdiv.style.setProperty("display", "block");
}

function clearbox() {
  var bdiv = document.getElementById("bdiv");
  bdiv.style.setProperty("display", "none");
  var signdiv = document.getElementById("signdiv");
  signdiv.style.setProperty("display", "none");
  var adddiv = document.getElementById("adddiv");
  adddiv.style.setProperty("display", "none");
}

function signin() {
  username = document.getElementById("user").value;
  password = document.getElementById("password").value;
  //alert(username + password);
  state = 1;
  var url = "http://www.zhengchengfeng.cn:8080/login";
  //alert(url);
  if (username != "" && password != "") {
    loadXMLDoc(url);
  } else {
    alert("请输入用户名和密码");
  }
}

function signup() {
  username = document.getElementById("user").value;
  password = document.getElementById("password").value;
  //alert(username + password);
  state = 2;
  var url = "http://www.zhengchengfeng.cn:8080/addUser";
  //alert(url);
  if (username != "" && password != "") {
    loadXMLDoc(url);
  } else {
    alert("请输入用户名和密码");
  }
}

function delcom(id) {
  comid = id;
  if (role == 1) {
    state = 4;
    loadXMLDoc("http://www.zhengchengfeng.cn:8080/delComment");
  }
}

function addcom() {
  if (role != 3) {
    var bdiv = document.getElementById("bdiv");
    bdiv.style.setProperty("display", "block");
    var adddiv = document.getElementById("adddiv");
    adddiv.style.setProperty("display", "block");
    //loadXMLDoc("http://www.zhengchengfeng.cn:8080/addComment")
  } else {
    alert("请先登录");
  }
}

function addmsg() {
  state = 5;
  ptitle = document.getElementById("ptitle").value;
  pcontent = document.getElementById("pcontent").value;
  loadXMLDoc("http://www.zhengchengfeng.cn:8080/addComment");
}

function upload() {
  state = 6;
  var file1 = document.getElementById("img").value;
  var pos = file1.lastIndexOf("\\");
  filename = file1.substring(pos + 1);
  alert(filename);
  var filename1 = document.getElementById("img").files[0];
  console.log(filename1);
  img1=filename1;
  form.append("filename",filename);
  form.append("Image",filename1);
  form.append("userID",2);
  
  loadXMLDoc("http://www.zhengchengfeng.cn:8080/upload");
/*
  var reader = new FileReader();
  reader.readAsBinaryString(filename1);
  if (filename1) {
    reader.onload = function (e) {
      img1 = reader.result;
      //  img1 = dataURLtoBlob(reader.result);
      alert(img1);
      loadXMLDoc("http://www.zhengchengfeng.cn:8080/upload");
    }
  }*/
}




