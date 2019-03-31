<template>
  <div class="headerComponent">
    <div class="h-controller"> 
          <a href="#/findMusicComponent" class="h-logo">
            <!-- 网易云音乐 -->
          </a>
          <div class="h-tab">
              <ul>
                  <router-link to="/findMusicComponent"><li v-bind:class="{ active: layout.changeColor[0] }" @click="changeBgcEvent(0)"><span><a href="">发现音乐</a></span></li></router-link>
                  <router-link to="/myMusicComponent">  <li v-bind:class="{ active: layout.changeColor[1] }" @click="changeBgcEvent(1)"><span><a href="">我的音乐</a></span></li></router-link>
                  <router-link to="/friendComponent">   <li v-bind:class="{ active: layout.changeColor[2] }" @click="changeBgcEvent(2)"><span><a href="">朋友</a></span></li></router-link>
                  <router-link to="/musicShopComponent"><li v-bind:class="{ active: layout.changeColor[3] }" @click="changeBgcEvent(3)"><span><a href="">商城</a></span></li></router-link>
                  <router-link to="/musicManComponent"> <li v-bind:class="{ active: layout.changeColor[4] }" @click="changeBgcEvent(4)"><span><a href="">音乐人</a></span></li></router-link>   
                  <router-link to="/downLoadComponent"> <li v-bind:class="{ active: layout.changeColor[5] }" @click="changeBgcEvent(5)"><span><a href="">下载客户端</a></span></li></router-link>   
              </ul>
          </div>
          <div class="h-search">
              <input type="text" placeholder="音乐/视频/电台/用户">
          </div>
          <!-- <div class="h-author"> -->
          <a class="h-author">创作者中心</a>
          <!-- </div> -->
          <div class="h-login" >
              <span>登录</span>
              <!-- <div class="h-login-type" v-if="layout.isShowLoginType">
                  <ul>
                      <li v-for="(item, index) in loginType">
                          {{item}}
                      </li>
                  </ul>
              </div> -->
              <!-- <span v-text="loginName"></span> -->
          </div>
      </div>
    <!-- <div class="top"> 
      <h1 class="logo">
        <a hidefocus="true" herf="#"></a>
      </h1>
      <ul>
        <li>发现音乐</li>
        <li>我的音乐</li>
        <li>朋友</li>
        <li>商城</li>
        <li>音乐人</li>
        <li>下载客户端</li>
      </ul>
    </div> -->
    <!-- <div class="top_nav">
      <ul>
        <li>推荐</li>
        <li>排行榜</li>
        <li>歌单</li>
        <li>主播电台</li>
        <li>歌手</li>
        <li>新碟上架</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
          return {
            layout:{
              changeColor: [true, false, false, false, false,false],
            }
          }
  },
  methods: {
    changeBgcEvent(e) {
        let arr = [];
        for( let elem in this.layout.changeColor ) { 
            parseInt(elem)
            if ( e == elem ) {
                arr.push(true);
            }else {
                arr.push(false)
            }
        }
        this.layout.changeColor = arr;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration:none;
}
.headerComponent{
    width: 100%;
    height: 70px;
    background-color: #242424;
}
.h-controller{
    width: 50%;
    min-width: 1100px;
    height: 70px;
    line-height: 70px;
    margin: 0 auto;
}
.h-controller .h-logo{
    /* float: left;
    
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff; */
    background: url(../assets/logo.png) no-repeat;
    float: left;
    width: 176px;
    height: 69px;
    background-size: 90%;
    background-position: 0 14px;
}
.h-controller .h-tab{
    float: left;
    width: 50%;
    height: 69px;
}
.h-controller .h-tab ul{
    list-style-type: none;
    float: left;
    width: 100%;
}
.h-controller .h-tab li{
    padding: 0 19px;
    text-align: center;
    float: left;
    cursor: pointer;
    font-size: 14px; 
    line-height: 69px;
    color: #ccc;
}
.h-controller .h-tab li:hover{
    background-color: #000;
}
.h-controller .h-tab li.active{
    background-color: #000;
}
.h-controller .h-tab span{
    display: inline-block;
    width: 100%;
}
.h-controller .h-tab a{
    font-size: 14px;
    color: #ccc;
}


.h-controller .h-search{
    position: relative;
    float: left;
    width: 158px;
    height: 32px;
    margin-top: 19px;
    background: url(../assets/search.png) no-repeat;
    background-size: 10%;
    background-position: 5px 8px;
    background-color: #fff;
    border-radius: 32px;
}
.h-controller .h-search input{
    position: absolute;
    margin: 8px 0 0 25px;
    color: #333;
    line-height: 16px;
    width: 75%;
    font-size: 12px;
    padding: 0;
    border: 0;  
    outline: none; 
    background: transparent;
    color: #9b9b9b;
    /* width: 160px;
    height: 25px;
    line-height: 25px;
    padding-left: 10px; 
    border-radius: 5px;
    box-sizing: border-box; */
}
.h-controller .h-author{
    float: left;
    margin-left: 20px;  
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    background-position: 0 -140px;
    font-size: 12px;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;
}
.h-controller .h-author:hover{
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    border: 1px solid #ccc;
}
.h-controller .h-login{
    position: relative;
    float: left;
    margin-left: 20px;
}
.h-controller .h-login span{
    font-size: .80em;
    color: #929292;
    cursor: pointer;
}
.h-controller .h-login .h-login-type{
    z-index: 10;
    position: absolute;
    right: -65px;
    top: 60px;
    width: 150px;
    height: 200px;
    background-color: #333;
}
.h-controller .h-login .h-login-type li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: .85em;
    color: #ccc;
}













/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  cursor: pointer;
}
[hidefocus] {
    outline: none;
}
.topbar {
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  zoom: 1;
}
.logo {
  float: left;
  height: 100%;
  padding-right: 20px; 
  width: 176px;
  height: 69px;
  background: url(../assets/yun_logo.png) no-repeat;
  background-position: 0 0;
}
.logo a {
  color: #ccc;
}
.top {
    position: relative;
    z-index: 1000;
    height: 70px;
    top: 0;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
}
.top li {
  padding: 0 19px;
  text-align: center;
  font-size: 14px; 
  line-height: 70px;
  color: #ccc;
}
.top li:hover {
  color: #fff;
}
.top_nav {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;
}
.top_nav li {
  padding: 0 13px;
  text-align: center;
  font-size: 12px; 
  line-height: 34px;
  color: #ccc;
}
.top_nav li:hover {
  color: #fff;
} */
</style>
