<template>
  <div class="slide-bgc" v-bind:style="{background:bgColor}">
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
      <div class="slide-img">
        <a>
          <transition name="slide-trans">
            <img v-if="isShow" :src="slides[0][nowIndex].imageUrl">
          </transition>
          <transition name="slide-trans-old">
            <img v-if="!isShow" :src="slides[0][nowIndex].imageUrl">
          </transition>
        </a>
      </div>
      <div class="slide-pages">
        <ul>
          <li v-for="(item, index) in slides[0]" :key="index" @click="goto(index)">
            <a :class="{on: index === nowIndex}">。</a>
          </li>
        </ul>
      </div>
      <div class="download">
        <a href="#" class="btn" hidefocus="true">下载客户端</a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <span class="shadow"></span>
        <span class="shadowr"></span>
      </div> 
    </div>
    <a class="arrow left-arrow el-icon-arrow-left btnl click-flag f-alpha" @click="goto(prevIndex)" @mouseover="clearInv" @mouseout="runInv"><</a>
    <a class="arrow right-arrow el-icon-arrow-right btnr click-flag f-alpha" @click="goto(nextIndex)" @mouseover="clearInv" @mouseout="runInv">></a>
    
    <!-- <canvas style="width:2px;height2px;"></canvas> -->
  </div>
  
</template>

<script>

export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      bgColor: '',
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slidesp[0].length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides[0].length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
        this.bgColor="#da1010";
        // this.bgColor = this.slides[this.nowIndex].bgColor

        // const ima = new Image()
        // ima.src = this.slides[0][index].imageUrl
        // ima.crossOrigin = '' // 处理跨域图片
        // ima.onload = () => {
        //     const ctx = this.canva.getContext('2d')
        //     ctx.drawImage(ima, 0, 0, width, height)

        //     const [r, g, b, a] = ctx.getImageData(0,0,1,1).data; // 获取背景色
        //     this.bgColor = `rgba(${r}, ${g}, ${b}, ${a})`
        // }

        // var oCan = this.canvas.getContext('2d');
        // var oImg= new Image;
        // oImg.onload = function(){
        //     oCan.drawImage(oImg,0,0);
        //     var data = oCan.getImageData(0, 0,oImg.width,oImg.height).data;//读取整张图片的像素。
        // };
        // oImg.src = this.slides[0][index].imageUrl; //图片
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-730px);
}
.slide-bgc{
  position: relative;
  width: 100%;
  height: 336px;
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 982px;
  /* width: 100%; */
  height: 336px;
  margin: 0 auto;
  overflow: hidden;
}
.slide-show h3 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 730px;
  height: 100%;
}
.slide-img img {
  width: 730px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.slide-pages {
  position: absolute;
  width: 100%;
  /*bottom: 25px;
  right: 15px; */
  margin: -20px auto;
 
}
.slide-pages ul{
  width: 50%;
  margin: -10px auto;
 
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
.slide-pages li:hover {
  text-decoration: underline;
}
.download{
  position: absolute;
  top: 0px;
  right: -1px;
  width: 254px;
  height: 336px;
  background: url(../assets/download.png)
}
.btn{
  display: block;
  width: 215px;
  height: 56px;
  text-indent: -9999px;
  margin: 212px 0px 0px 19px;
  background-position: 0px 9999px;
}
.btn:hover{
  background: url(../assets/download_btn.png)
}
.download p{
  font-size: 12px; 
  text-align: center;
  color: rgb(141, 141, 141);
  margin: 10px auto;
}
.shadow{
  display: block;
  position: absolute;
  top: 0px;
  left: -20px;
  width: 20px;
  height: 336px;
  background-position: -1px 0px;
}
.shadowr{
  display: block;
  position: absolute;
  top: 0px;
  /* left: -20px; */
  left: auto;
  right: -20px;
  width: 20px;
  height: 336px;
  background-position: -20px 0px;
}
.arrow{
  position: absolute;
  top: 130px;
  font-size: 3em;
  height: 55px;
  color: #fff;
  /* opacity: 0.6; */
  cursor: pointer;
}
.arrow:hover{
  background-color: #ccc;
}
.left-arrow{
  left: 90px;
}
.right-arrow{
  right: 90px;
}
/* .btnl{
  left: -68px;
  background-position: 0 -360px;
  display: block;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    width: 37px;
    height: 63px;
    text-indent: -9999px;
}
.btnr{
  right: -68px;
  background-position: 0 -508px;
  display: block;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    width: 37px;
    height: 63px;
    text-indent: -9999px;
} */
</style>
