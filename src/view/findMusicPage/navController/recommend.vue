<template>
    <div class="recommend">
        <carousel :slides="slides" :inv="invTime"></carousel> 
        <div class="container"> 
            <div class="container-main">
                <div class="main">
                    <div class="main-list">
                        <div class="rcmd">
                            <div class="rcmd-header">
                                <a href="" class="tit">热门推荐</a>
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
                            <div class="rcmd-header">
                                <a href="" class="tit">新碟上架</a>                           
                                <span class="more">
                                    <a href="" class="s-fc3">更多</a>
                                    <i class="cor s-bg s-bg-6">&nbsp;</i>
                                </span> 
                            </div>
                            <div class="n-disk">
                                <div class="inner" >
                                    <a hidefocus="true"  class="click-left" @click="goto()"></a>
                                    <div class="roll">
                                        <transition name="slide-trans">
                                        <ul v-if="isShow" class="disk_ul" >
                                            <li v-for="value in new_disk[1].slice(0,5)" :key="value.id">
                                                <div class="disk-cover">
                                                    <img class="disk-img"  :src="value.blurPicUrl">
                                                    <a :title="value.name" href="" class="disk-title"></a>
                                                </div>
                                                <p class="disk-name">
                                                    <a :title="value.name" href="" class="disk-namw-tit">{{value.name}}</a>
                                                </p>
                                                <p class="disk-singeqr" :title="value.artist.name">
                                                    <a class="disk-singer-name" href="">{{value.artist.name}}</a>
                                                </p>
                                            </li>                       
                                        </ul>
                                        </transition>
                                        <transition name="slide-trans-old">
                                        <ul v-if="!isShow" class="disk_ul" >
                                            <li v-for="value in new_disk[1].slice(5,10)" :key="value.id">
                                                <div class="disk-cover">
                                                    <img class="disk-img"  :src="value.blurPicUrl">
                                                    <a :title="value.name" href="" class="disk-title"></a>
                                                </div>
                                                <p class="disk-name">
                                                    <a :title="value.name" href="" class="disk-namw-tit">{{value.name}}</a>
                                                </p>
                                                <p class="disk-singeqr" :title="value.artist.name">
                                                    <a class="disk-singer-name" href="">{{value.artist.name}}</a>
                                                </p>
                                            </li>                               
                                        </ul>
                                        </transition>
                                    </div>
                                    <a hidefocus="true" class="click-right" @click="goto()"></a>
                                </div>
                            </div>
                        </div>
                        <div class="rank">
                            <div class="rcmd-header">
                                <a href="" class="tit">榜单</a>                           
                                <span class="more">
                                    <a href="" class="s-fc3">更多</a>
                                    <i class="cor s-bg s-bg-6">&nbsp;</i>
                                </span> 
                            </div>
                            <div class="rank-list">
                                <div class="bilst" >
                                    <dl class="blk ">
                                        <dt class="top">
                                            <div class="cver u-cover u-cover-4">
                                                <img class="j-img"  src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100">
                                                <a href="/discover/toplist?id=19723756" class="msk" title="云音乐飙升榜"></a>
                                            </div>
                                            <div class="tit">
                                                <a href="/discover/toplist?id=19723756" title="云音乐飙升榜"><h3 class="f-fs1 f-thide">云音乐飙升榜</h3></a>
                                                <div class="btn">
                                                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" >播放</a>
                                                    <a href="javascript:;" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag "  title="收藏">收藏</a>
                                                </div>
                                            </div>
                                        </dt>
                                        <dd>
                                            <ol>
                                                <li v-for="(value,index) in rank_idx3" :key="value.id" onmouseover="this.className='z-hvr'" onmouseout="this.className=''" class="">
                                                    <span :class="layout.changeColor[index]?'notop':'no'" >{{index+1}}</span>
                                                    <a href='' class="nm s-fc0 f-thide" :title="value[0].name">{{value[0].name}}</a>
                                                    <div class="oper">
                                                        <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" ></a>
                                                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true"></a>
                                                        <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true"></a>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div class="rank-more">
                                                <a href="/discover/toplist?id=19723756" class="s-fc0">查看全部&gt;</a>
                                            </div>
                                        </dd>
	                                </dl>
	                                <dl class="blk ">
		                                <dt class="top">
                                            <div class="cver u-cover u-cover-4">
                                                <img class="j-img"  src="http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100">
                                                <a href="/discover/toplist?id=3779629" class="msk" title="云音乐新歌榜"></a>
                                            </div>
                                            <div class="tit">
                                                <a href="/discover/toplist?id=3779629" title="云音乐新歌榜"><h3 class="f-fs1 f-thide">云音乐新歌榜</h3></a>
                                                <div class="btn">
                                                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" >播放</a>
                                                    <a href="javascript:;" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag "  title="收藏">收藏</a>
                                                </div>
                                            </div>
                                        </dt>
                                        <dd>
                                            <ol>
                                                <li v-for="(value,index) in rank_idx0" :key="value.id"  onmouseover="this.className='z-hvr'" onmouseout="this.className=''" class="">
                                                    <span :class="layout.changeColor[index]?'notop':'no'" >{{index+1}}</span>
                                                    <a href="" class="nm s-fc0 f-thide" :title="value[0].name">{{value[0].name}}</a>
                                                    <div class="oper">
                                                        <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18"></a>
                                                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" ></a>
                                                        <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true"  ></a>
                                                    </div>
                                                </li>
                                                
                                            </ol>
                                            <div class="rank-more">
                                                <a href="/discover/toplist?id=3779629" class="s-fc0">查看全部&gt;</a>
                                            </div>
                                        </dd>
	                                </dl>
	                                <dl class="blk blk-1">
		                                <dt class="top">
                                            <div class="cver u-cover u-cover-4">
                                                <img class="j-img" src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100">
                                                <a href="/discover/toplist?id=2884035" class="msk" title="网易原创歌曲榜"></a>
                                            </div>
                                            <div class="tit">
                                                <a href="/discover/toplist?id=2884035" title="网易原创歌曲榜"><h3 class="f-fs1 f-thide">网易原创歌曲榜</h3></a>
                                                <div class="btn">
                                                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" >播放</a>
                                                    <a href="javascript:;" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag " title="收藏">收藏</a>
                                                </div>
                                            </div>
                                        </dt>
                                        <dd>
                                            <ol>
                                                <li v-for="(value,index) in rank_idx2" :key="value.id" onmouseover="this.className='z-hvr'" onmouseout="this.className=''" class="">
                                                    <span :class="layout.changeColor[index]?'notop':'no'" >{{index+1}}</span>
                                                    <a href="" class="nm s-fc0 f-thide" :title="value[0].name">{{value[0].name}}</a>
                                                    <div class="oper">
                                                        <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true"  ></a>
                                                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true"></a>
                                                        <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true" ></a>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div class="rank-more">
                                                <a href="/discover/toplist?id=2884035" class="s-fc0">查看全部&gt;</a>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-side">
                <div class="myinfo">
                    <p class="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <a  href="#"  class="log_btn" >用户登录</a>
                </div>
                <div class="singer">
                    <h3 class="singer-header">
                        <span class="singer-header-title">入驻歌手</span>
                        <a href="/discover/artist/signed/" class="singer-check-all">查看全部 &gt;</a>
                    </h3>
                    <ul class="singer-list">
                        <li v-for="value in singer[0]" :key="value.id">
                            <a href="" class="itm">
                                <div class="head-img">
                                    <img class="singer-img" :src="value.picUrl">
                                </div>
                                <div class="ifo">
                                    <h4><span class="singer-name">{{value.name}}{{value.alias[0]}}</span></h4>
                                    <p class="singer-info">{{value.name}}</p>
                                </div>
                            </a>
                        </li>                        
                    </ul>
                    <div>
                        <a  hidefocus="true" class="tobe_btn">
                            <i>申请成为网易音乐人</i>
                        </a>
                    </div>
                </div>
                <div class="dj">
                    <h3 class="dj-header">热门主播</h3>
                    <ul class="hotdj-list">
                        <li>
                            <a href="/user/home?id=278438485" class="dj-cver"><img class="dj-img" src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" data-src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"></a>
                            <div class="dj-info">
                                <p>
                                    <a href="/user/home?id=278438485" class="dj-name">陈立</a> <sup class="u-icn u-icn-1 "></sup>
                                </p>
                                <p class="dj-intrd">心理学家、美食家陈立教授</p>
                            </div>
                        </li>
                        <li>
                            <a href="/user/home?id=91239965" class="dj-cver"><img class="dj-img" src="http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" data-src="http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40"></a>
                            <div class="dj-info">
                                <p>
                                    <a href="/user/home?id=91239965" class="sj-name">DJ艳秋</a> <sup class="u-icn u-icn-1 "></sup>
                                </p>
                                <p class="dj-intrd">著名音乐节目主持人</p>
                            </div>
                        </li>
                        <li>
                            <a href="/user/home?id=324314596" class="dj-cver"><img class="dj-img" src="http://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" data-src="http://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40"></a>
                            <div class="dj-info">
                                <p>
                                    <a href="/user/home?id=324314596" class="dj-name">国家大剧院古典音乐频道</a> <sup class="u-icn u-icn-1 "></sup>
                                </p>
                                <p class="dj-intrd">国家大剧院古典音乐官方</p>
                            </div>
                        </li>
                        <li>
                            <a href="/user/home?id=1611157" class="dj-cver"><img class="dj-img" src="http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40" data-src="http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40"></a>
                            <div class="dj-info">
                                <p>
                                    <a href="/user/home?id=1611157" class="dj-name">谢谢收听</a> <sup class="u-icn u-icn-1 "></sup>
                                </p>
                                <p class="dj-intrd">南京电台主持人王馨</p>
                            </div>
                        </li>
                        <li>
                            <a href="/user/home?id=2313954" class="dj-cver"><img class="dj-img" src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" data-src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40"></a>
                            <div class="dj-info">
                                <p>
                                    <a href="/user/home?id=2313954" class="dj-name">DJ晓苏</a> <sup class="u-icn u-icn-1 "></sup>
                                </p>
                                <p class="dj-intrd">独立DJ，CRI环球旅游广播特邀DJ</p>
                            </div>
                        </li>
                    </ul>
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
                new_disk:[],
                personalized:[],
                rank_idx3:[],
                rank_idx0:[],
                rank_idx2:[],
                singer:[],
                layout:{
                    changeColor: [true,true,true,false, false, false, false,false,false,false],
                },
                isShow:[true,false]
                
            }
        },

        components: {
            carousel
        },

        computed:{

        },

        methods: {
           goto () {
            this.isShow = false ;
            setTimeout(() => {
                this.isShow = true 
            }, 10)
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
                    // console.log('请求成功')
                    // console.log(response.data);
                    this.slides = [];
                    for(var i in response.data){
                        this.slides.push(response.data[i]);
                    }
                    // console.log(this.slides);
                },
                response => {
                    console.log('请求失败')
            });
            //热门推荐
            this.$http.get('http://localhost:3000/personalized',{
                    params:{
                        
                    }
                }).then(response => {
                    // console.log('请求成功')
                    // console.log(response.data);
                    this.personalized = [];
                    for(var i in response.data){
                        this.personalized.push(response.data[i]);
                    }
                    // console.log(this.personalized);
                },
                response => {
                    console.log('请求失败')
            });
            //新碟上架
            this.$http.get('http://localhost:3000/top/album?offset=0&limit=10',{
                    params:{
                        
                    }
                }).then(response => {
                    console.log('请求成功')
                    console.log(response.data);
                    this.new_disk = [];
                    for(var i in response.data){
                        this.new_disk.push(response.data[i]);
                    }
                    for(var i in this.new_disk[1]){
                        if(this.new_disk[1][i].name.length>10){
                            var str=this.new_disk[1][i].name;
                            this.new_disk[1][i].name=str.substr(0,10)+'...';
                        }
                    }
                    console.log(this.new_disk);
                },
                response => {
                    console.log('请求失败')
            });
            //排行榜
            this.$http.get('http://localhost:3000/top/list?idx=3',{
                    params:{
                        
                    }
                }).then(response => {
                    // console.log('请求成功rank_idx3')
                    this.rank_idx3 = [];
                    for(var i=0;i<10;i++){
                        this.$http.get('http://localhost:3000/song/detail?ids='+response.data.privileges[i].id,{
                            params:{
                                
                            }
                        }).then(response => {
                            // console.log(response.data);
                            this.rank_idx3.push(response.data.songs);
                        },
                        response => {
                            console.log('请求失败')
                        });
                    }
                    // console.log(this.rank_idx3);
                },
                response => {
                    console.log('请求失败')
            });
            
            this.$http.get('http://localhost:3000/top/list?idx=0',{
                    params:{
                        
                    }
                }).then(response => {
                    // console.log('请求成功rank_idx0')
                    // console.log(response.data);
                    this.rank_idx0 = [];
                    for(var i=0;i<10;i++){
                        this.$http.get('http://localhost:3000/song/detail?ids='+response.data.privileges[i].id,{
                            params:{
                                
                            }
                        }).then(response => {
                            // console.log(response.data);
                            this.rank_idx0.push(response.data.songs);
                        },
                        response => {
                            console.log('请求失败')
                        });
                    }
                    // console.log(this.rank_idx0);
                },
                response => {
                    console.log('请求失败')
            });
            this.$http.get('http://localhost:3000/top/list?idx=2',{
                    params:{
                        
                    }
                }).then(response => {
                    // console.log('请求成功rank_idx2')
                    // console.log(response.data);
                    this.rank_idx2 = [];
                    for(var i=0;i<10;i++){
                        this.$http.get('http://localhost:3000/song/detail?ids='+response.data.privileges[i].id,{
                            params:{
                                
                            }
                        }).then(response => {
                            // console.log(response.data);
                            this.rank_idx2.push(response.data.songs);
                        },
                        response => {
                            console.log('请求失败')
                        });
                    }
                    // console.log(this.rank_idx2);
                },
                response => {
                    console.log('请求失败')
            });
            //side-singer
            this.$http.get('http://localhost:3000/artist/list?cat=5001&limit=5',{
                    params:{
                        
                    }
                }).then(response => {
                    console.log('请求成功')
                    console.log(response.data);
                    for(var i in response.data){
                        this.singer.push(response.data[i]);
                    }
                    console.log(this.singer);
                },
                response => {
                    console.log('请求失败')
            });
            
            // //side-dj
            // this.$http.get('http://localhost:3000/personalized',{
            //         params:{
                        
            //         }
            //     }).then(response => {
            //         console.log('请求成功')
            //         console.log(response.data);
                    
                    
            //     },
            //     response => {
            //         console.log('请求失败')
            // });
        }
    }
   
</script>
<style scoped>
.slide-trans-enter-active {
  transition: all 1s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 1s;
  transform: translateX(-730px);
}
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
    min-height: 1425px;
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
/* new disk */
.n-disk{
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
}
.click-left {
    background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?f691ef0…);
    background-origin: padding-box;
    background-position-x: -260px;
    background-position-y: -75px;
    background-size: auto;
    color: rgb(51, 51, 51);
    cursor: pointer;
    height: 17px;
    left: 4px;
    outline-color: rgb(51, 51, 51);
    position: absolute;
    top: 71px;
    width: 17px;
}
.click-right {
    background-clip: border-box;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(https://s2.music.126.net/style/web2/img/index/index.png?f691ef0…);
    background-origin:padding-box ;
    background-position-x: -300px;
    background-position-y: -75px;
    background-size: auto;
    color:rgb(51, 51, 51);
    cursor: pointer;
    display: block;   
    height: 17px;  
    right: 8px;
    position: absolute;   
    top: 71px;
    width: 17px;
    
}
.inner {
    height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
}
.roll {
    float: left;
    width: 645px;
    height: 180px;
    overflow: hidden;
    position: relative;
    zoom: 1;
}
.disk_ul{
    position: absolute;
    top: 0;
    width: 645px;
    margin: 28px 0 0 0;
}
.n-disk li {
    float: left;
    display: inline;
    width: 118px;
    height: 150px;
    margin-left: 11px;
    background-position: -260px 100px;
}
.disk-cover{
    margin-bottom: 7px;
    width: 100px;
    height: 100px;
    position: relative;
    display: block;
}
.disk-img{
    display: block;
    width: 100%;
    height: 100%;
}
.disk-title{
   
}

.disk-p{
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.disk-namw-tit{
	color: #000;
    cursor: pointer;
}
.disk-singer-name{
    color: #666;
    cursor: pointer;
}
/* rank */
.bilst{
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    background: url(../../../assets/rank-back.png) no-repeat;
}
.blk{
    float: left;
    width: 230px;
}
.bilst .blk-1 {
    width: 228px;
}
.bilst .top {
    height: 100px;
    padding: 20px 0 0 19px;
}
.bilst .cver {
    float: left;
    display: inline;
}
.u-cover-4 {
    width: 80px;
    height: 80px;
}
.u-cover {
    position: relative;
    display: block;
}
.u-cover img {
    display: block;
    width: 100%;
    height: 100%;
    border: 0
}
.u-cover-4 .msk {
    background-position: -145px -57px;
}
.u-cover .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.bilst .tit {
    float: left;
    width: 116px;
    margin: 6px 0 0 10px;
}
.n-bilst .tit h3 {
    width: 100%;
}
.f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.f-thide:hover{
   text-decoration: underline;
}
.f-fs1 {
    font-size: 14px;
}
.bilst .btn {
    margin-top: 10px;
}
dd {
    display: block;
    -webkit-margin-start: 40px;
    padding: 0;
    margin: 0;
}
.bilst ol {
    height: 319px;
    margin-left: 50px;
    line-height: 32px;
    display: block;
}
.bilst ol li {
    height: 32px;
    list-style: none;
    padding: 0;
    margin: 0;
}
.bilst ol li * {
    vertical-align: middle;
}
.bilst ol .notop {
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -35px;
    text-align: center;
    color: #c10d0c;
    font-size: 16px;
}
.bilst ol .no {
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -35px;
    text-align: center;
    color: #666;
    font-size: 16px;
}
.bilst ol .nm {
    float: left;
    width: 170px;
    height: 32px;
}
.s-fc0, a.s-fc0:hover {
    color: #000;
}
.bilst .rank-more {
    clear: both;
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
}
.bilst .rank-more a:hover {
    text-decoration: underline;
}
.container-side{
    position: relative;
    float: right;
    width: 250px;
    zoom: 1;
}
.myinfo{
    height: 126px;
    padding-top: 0;
    /* background-position: 0 0; */
    background: url(../../../assets/myinfo_bg.png) no-repeat ;
}
.note{
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
}
.log_btn{
    margin: 0 auto;
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
    background: url(../../../assets/log_btn_small.png) no-repeat ;
}
.log_btn:hover{
    background-position: 0 -195px;
    background: url(../../../assets/log_btn.png) no-repeat ;
}
.singer{
    margin-top: 15px;
}
.singer-header{
    position: relative;
    *zoom: 1;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
}
.singer-header-title{
    float: left;
    font-size: 12px;
}
.singer-check-all{
    float: right;
    font-size:12px;
    font-weight: normal; 
    color: #333;
}
.singer-list{
    margin: 6px 0 14px 20px;
}
.singer-list li{
    display: block;
    overflow: hidden;/*添加高度，解决float浮动引起的高度坍陷*/
    margin-top: 14px;
}
.itm{
    float: left;
    width: 210px;
    height: 62px;
    background: #fafafa;
}
.head-img{
    float: left;
    width: 62px;
    height: 62px;
}
.singer-img{
    float: left;
    width: 62px;
    height: 62px;
}
.ifo{
    float: left;
    width: 133px;
    height: 60px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    border-left: none;
}
.ifo h4{
    margin-top: 8px;
}
.singer-name{
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    font-size: 14px;
    font-weight:700;
    display:inline-block;
}
.singer-info{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width: 90%;
    margin-top: 8px;
    color: #666;
}
.tobe_btn{
    margin-left: 20px;
    border-radius: 4px;
    color: #333;
    background-position: right -100px;
    background: url(../../../assets/tobe.png) no-repeat;
    text-decoration: none;
    padding: 0 5px 0 0;
    display: inline-block; 
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
}
.tobe_btn i{
    width: 170px;
    font-weight: bold;
    color: #333;
    background-position: 0 -59px;
    padding: 0 15px 0 20px;
    pointer-events: none;
    font-style: normal;
}
.dj{
    margin-top: 30px;
}
.dj-header{
    position: relative;
    height: 23px;
    margin: 0 20px;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    color: #333;
}
.hotdj-list{
    margin: 20px 0 0 20px;
}
.hotdj-list li {
    float: left;
    width: 210px;
    height: 50px;
}
.dj-cver{
    float: left;
    width: 40px;
    margin-right: 10px;
}
.dj-img{
    width: 40px;
    height: 40px;
    box-shadow: 0 0 1px #333333 inset;
}
.dj-info{
    float: left;
    width: 160px;
    line-height: 21px;
}
.dj-name{
    display: inline-block;
    zoom: 1;
    max-width: 88%;
    vertical-align: middle;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.dj-intrd{
    color: #666;
    font-size:12px;
    line-height:21px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
</style>