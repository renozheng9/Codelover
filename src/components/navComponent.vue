<template>
  <div class="navComponent">
        <div class="nav-tab">
            <ul class="nav">
                <router-link to="/findMusicComponent">          <li><span><a href=""><em v-bind:class="{ active: layout.changeColor[0] }" @click="changeBgcEvent(0)">推荐</em></a></span></li></router-link>
                <router-link to="/findMusicComponent/rank"  >   <li><span><a href=""><em v-bind:class="{ active: layout.changeColor[1] }" @click="changeBgcEvent(1)">排行榜</em></a></span></li></router-link>
                <router-link to="/findMusicComponent/list"   >  <li><span><a href=""><em v-bind:class="{ active: layout.changeColor[2] }" @click="changeBgcEvent(2)">歌单</em></a></span></li></router-link>
                <router-link to="/findMusicComponent/radio">    <li><span><a href=""><em v-bind:class="{ active: layout.changeColor[3] }" @click="changeBgcEvent(3)">主播电台</em></a></span></li></router-link>
                <router-link to="/findMusicComponent/singer" >  <li><span><a href=""><em v-bind:class="{ active: layout.changeColor[4] }" @click="changeBgcEvent(4)">歌手</em></a></span></li></router-link>   
                <router-link to="/findMusicComponent/newdisc" > <li><span><a href=""><em v-bind:class="{ active: layout.changeColor[5] }" @click="changeBgcEvent(5)">新碟上架</em></a></span></li></router-link>   
            </ul>
        </div>
  </div>
</template>
<script>

    export default {
        name: 'navComponent',
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
<style scoped>
a {
    text-decoration:none;
}
.navComponent{
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
}
.nav-tab{
    width: 1100px;
    height: 34px;
    margin: 0 auto;
}
.nav{
    float: left;
    padding-left: 180px;
    font-size: 12px;
}
.nav ul{
    list-style-type: none;
    float: left;
    width: 100%;
}
.nav li{
    list-style-type: none;
    padding: 0;
    /* padding-right: 60px; */
    text-align: center;
    
    cursor: pointer;
    line-height: 34px;
    float: left;
    height: 34px;
    text-align: center;
    
}
.nav a em {
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    font-style: normal;
}
.nav a em:hover{
   background:#9b0909;
}
.nav a em.active{
   background:#9b0909;
}
.nav span{
    display: inline-block;
    width: 100%;
}
.nav a{
    margin: 8px 0;
    font-size: 0.9rem;
    font-size: 12px;
    color: #fff;
}
</style>

