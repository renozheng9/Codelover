<template>
    <div class="recommend">
        <carousel :slides="slides" :inv="invTime"></carousel> 
        <div class="container"> 
            <div class="container-main">
                <div class="main">
                    <div class="main-list">
                        <div class="rcmd">
                            <div class="rcmd-header">
                                <a href="/discover/playlist/" class="tit">热门推荐</a>
                                <div class="tabs"> 
                                   <a href="" class="s-fc3">华语</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">流行</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">摇滚</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">民谣</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">电子</a>
                                    </div>
                                    <span class="more">
                                        <a href="" class="s-fc3">更多</a>
                                        <i class="cor s-bg s-bg-6">&nbsp;</i>
                                    </span> 
                                </div>
                                
                            </div>
                            <ul class="m-cvrlst f-cd" >
                                <li  v-for="value in personalized[3].slice(0,8)" :key="value.id" >
                                    <div class="u-cover u-cover-1">
                                        <img :src="value.picUrl">
                                        <a :title="value.name" href="" class="msk" ></a>
                                        <div class="bottom">
                                            <a class="icon-play" title="播放" href="javascript:;" ></a>
                                            <span class="icon-headset"></span>
                                            <span class="nb">{{value.playCoount}}</span>
                                        </div>
                                    </div>
                                    <p class="dec">
                                        <a title="“复古向” | 中年少男少女的怀旧日常" class="tit s-fc0" href="" >
                                        {{value.name}}</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="new">

                        </div>
                        <div class="rank">

                        </div>
                    </div>
                </div>
            </div>
            <div class="container-side">
                <div class="myinfo">

                </div>
                <div class="singer">

                </div>
                <div class="dj">

                </div>
            </div>
        </div>
    </div> 
</template>
<script>
// import {findMusic} from '../service/dataProcessing'
import carousel from '../../../components/Carousel'
import vue from 'Vue'
    export default {
        data () {
            return {
                invTime: 3000,
                slides:[],
                personalized:[]
            }
        },

        components: {
            carousel
        },

        computed:{

        },

        methods: {
           async findAllMusic() {
            // 获取所有歌曲信息
            let musicMes = await findMusic();
            console.log(musicMes)
           }
        },
        created:function(){
            
        },
        mounted: function() {
            // this.findAllMusic();
            this.$http.get('http://localhost:3000/banner',{
                    params:{
                        
                    }
                }).then(response => {
                    console.log('请求成功')
                    console.log(response.data);
                    this.slides = [];
                    for(var i in response.data){
                        this.slides.push(response.data[i]);
                    }
                    console.log(this.slides);
                },
                response => {
                    console.log('请求失败')
            });
            this.$http.get('http://localhost:3000/personalized',{
                    params:{
                        
                    }
                }).then(response => {
                    console.log('请求成功')
                    console.log(response.data);
                    this.personalized = [];
                    for(var i in response.data){
                        this.personalized.push(response.data[i]);
                    }
                    console.log(this.personalized);
                },
                response => {
                    console.log('请求失败')
            });
        }
    }
</script>
<style scoped>
a{
    cursor: pointer;
    color: rgb(51, 51, 51);
    text-decoration: none;  
}
.recommend{
    width: 100%;
    height: auto;
}
.container{
    width: 980px;
    min-height: 700px;
    background-color: rgb(255, 255, 255);
    margin: 0px auto;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    border-image: initial;
    border-width: 0px 1px;
}
.container-main{
    float: left;
    width: 100%;
    margin-right: -250px;
}
.main{
    margin-right: 251px;
}
.main-list{
    padding: 20px 20px 40px;
}
.rcmd-header{
    height: 33px;
    padding: 0px 10px 0px 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid rgb(193, 13, 12);
}
.tit{
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
}
.tabs{
    float: left;
    font-size: 12px;
    margin: 7px 0px 0px 20px;
}
.tabs a:hover{
    text-decoration: underline;
}
.s-fc3{
     color: #666;
}
.line{
    margin: 0 8px 0 10px;
    color: #c2c2c2;
}
.more{
    float: right;
    margin-top: 7px;
}
.more a:hover{
    text-decoration: underline;
}
.m-cvrlst{
    margin: 20px 0px 0px -42px;
    display: block;
    overflow: hidden;/*添加高度，解决float浮动引起的高度坍陷*/
    zoom:1;
}
li{
    list-style: none;
    display: block;
}
.m-cvrlst li{
    float: left;
    display: inline-block;
    width: 140px;
    height: 204px;
    line-height: 1.4;
    overflow: hidden;
    padding: 0px 0px 30px 50px;
    padding-left: 42px;
}
.u-cover-1 {
    width: 140px;
    height: 140px;
}
.u-cover {
    position: relative;
    display: block;
}
.u-cover img {
    display: block;
    width: 100%;
    height: 100%;
}
.msk{
    background-position: 0px 0px;
}
.bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
}
.icon-play{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 27px;
    color: rgb(204, 204, 204);
    background-position: 0px -537px;
    float: right;
}
.icon-headset {
    float: left;
    width: 14px;
    height: 11px;
    background-position: 0px -24px;
    margin: 9px 5px 9px 10px;
}
.nb {
    float: left;
    margin: 7px 0px 0px;
}
.dec {
    font-size: 14px;
    margin: 8px 0px 3px;
    overflow: hidden;/*添加高度，解决float浮动引起的高度坍陷*/
    zoom:1;
}
.dec a:hover{
    text-decoration: underline;
}
.m-cvrlst li .tit {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    color: #000;
    font-size: 14px;
    line-height: 19px;
}

    
</style>