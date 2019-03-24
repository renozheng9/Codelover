typora-root-url: ./

# 2018Token技术部前端组Test汇报

## 1.页面结构

基本和要求里的一致，自己多加了首页和尾页按钮（样式没什么好说的，就不多谈了...css真的好难写)
![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/页面结构.png)
      

## 2.数据获取

数据获取使用的是ajax的方式，一开始的时候用的jq方式获取，后来自己慢慢写了原生的js获取

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/数据获取1.png)

but后来在网上看到了一个博客，他写了类似于jq的封装ajax函数....我就拿来用了（见ajax.js，太长了没截图)，后面的ajax请求都是用的封装后的类jq写法....这个地方算是偷懒了.

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/数据获取2.png)

## 3.分页器

分页器感觉最难写。

一个是他的样式响应，选中的样式我做成了数字变色，上一页下一页当在第一页或最后一页时将更换了这个li的class样式变为不能点击的样式。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/分页3.jpg)

再通过getpages()函数

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/分页1.jpg)

将选中页面标签尽量居中。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/分页2.png)

二是分页器和搜索功能对应的响应，逻辑比较简单就是获取到数据判断字符串包含，计算结果数重新实例化分页器。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/分页4.jpg)

遇到的问题，变量的作用区域没有理清，调整了实例化的位置就好了

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/分页5.png)

## 4.搜索和全部按钮

搜索通过获取到数据判断字符串包含，将符合结果的数据存入search_result[]数组中，

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/按钮1.png)

全部按钮不知道题目中的意思是22条数据全部显示出来还是和搜索按钮配合回到有分页的显示页面。。想着全部显示出来太夸张，就让他回到了一开始的页面，直接重新调了windows.load函数。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/按钮2.png)

## 5.移动端的适配

移动端的适配主要用媒体查询做的，写了一些移动端的样式。但是样式写的比较简陋，用的%布局，没来的及改成弹性布局等，搜索输入框和两个按钮略微没对齐。。。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/移动端1.png)

## 6.回到顶部

回到顶部的功能在之前写礼物说的时候就实现，所以直接拿过来用了，不过了礼物说里的按钮一直显示不是下拉一定距离后显示，这次把这个地方修改过来了。判断innerHeight与top的值决定显不显示。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/顶部1.png)

平滑效果的实现用的是timer变量和cancelAnimationFram()，

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/顶部2.png)

但是回滚速度是一致，想做成有加速度的那种感觉，但是没有做出来。

## 7.下拉刷新

这个功能是最后卡了最久的，之前在高度不同的时候要么不滚动，要么加载的都是同一页，或者跳过某几页。

在听了学长的意见后，把ajax请求只请求一次，得到的数据存入data_result[]数组中，后面的操作从这个数组中取值。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/下拉1.png)

并且加上了flag判定，为1时才加载。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/下拉2.png)

BUT=_=现在虽然加载的数据正常，高度不是太离谱也都可以下拉加载，***但是第一次滑到底的时候并不会加载得再往上滚一点，再往下滚才会正常加载*。**很迷，并且控制台有报错说data_result[]数组里的变量未定义，不过貌似没有影响。

![image](https://github.com/827752806/Codelover/blob/linwang/movie/README_img/下拉3.png)

## 8.总结

这一个月的test,第一周只完成了pc端的样式，第二周4门选修课结课加青创导致完全没有动，第三周效率超高，基本在第三周把东西都做出来了，第四周就是开始改Bug。

Test里的要求的功能都是很常用很必要的一些东西，通过这次Test自己练习了很多，中间也学到了很多很多的东西，一点一点上网查，找demo借鉴，模仿。这个月里把红宝书看了差不多1/3，一些东西test里面用到了比如json数据和ajax，帮自己弄明白了很多基础的概念，但也有一些东西还是一知半解，以后慢慢实践。

后来参加的hackday,用framework的框架写了4个简单的页面，虽然是用的框架，但是感觉比一个月之前写礼物说那时候无从下手进步了很多，hackday有点可惜就是和服务端怎么对接的过程没有体验到。

最后，前端要学的东西还有好多好多，希望能继续加油，同时很感谢学长一点一点的指导和引路。