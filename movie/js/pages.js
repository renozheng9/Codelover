function myPagination(options) {
    var pageSize           = options.pageSize,
        pageTotal          = options.pageTotal,
        pageAmount         = options.pageAmount,
        dataTotal          = options.dataTotal;
        curPage            = options.curPage,
        id                 = options.id,
        getPage            = options.getPage,
        showPageTotalFlag  = options.showPageTotalFlag,
        showSkipInputFlag  = options.showSkipInputFlag,       
    this.pageSize          = pageSize || 5; //分页个数
    this.pageTotal         = pageTotal; //总共多少页
    this.pageAmount        = pageAmount; //每页多少条
    this.dataTotal         = dataTotal; //总共多少数据
    this.curPage           = curPage || 1; //初始页码
    this.id                = id;   
    this.ul                = document.createElement('ul');
    this.getPage           = getPage;
    this.middlePageSize    = (this.pageSize - 1) / 2;
    this.init();
};
 
myPagination.prototype = {
    init: function init() {
        var pagination       = document.getElementById(this.id);
        pagination.innerHTML = '';
        this.ul.innerHTML    = '';
        pagination.appendChild(this.ul);
        var that = this;
        //首页
        that.firstPage();
        //上一页
        that.lastPage();
        //分页
        that.getPages().forEach(function (item) {
            var li = document.createElement('li');
            if (item == that.curPage) {
                li.className = 'active';
            } else {
                li.onclick = function () {
                    that.curPage = parseInt(this.innerHTML);
                    that.init();
                    that.getPage(that.curPage);
                };
            }
            li.innerHTML = item;
            that.ul.appendChild(li);
        });
        //下一页
        that.nextPage();
        //尾页
        that.finalPage();
    },
    //首页
    firstPage: function firstPage() {
        var that     = this;
        var li       = document.createElement('li');
        li.innerHTML = '首页';
        this.ul.appendChild(li);
        li.onclick = function () {
            var val = parseInt(1);
            that.curPage = val;
            that.getPage(that.curPage);
            that.init();
        };
    },
    //上一页
    lastPage: function lastPage() {
        var that = this;
        var li   = document.createElement('li');
        li.innerHTML = '<';
        if (parseInt(that.curPage) > 1) {
            li.onclick = function () {
                that.curPage = parseInt(that.curPage) - 1;
                that.init();
                that.getPage(that.curPage);
            };
        } else {
            li.className = 'disabled';
        }
        this.ul.appendChild(li);
    },
    //分页
    getPages: function getPages() {
        var pag = [];
        if (this.curPage <= this.pageTotal) {
 
            if (this.curPage < this.pageSize - this.middlePageSize) {
                //当前页数小于显示条数
                var i = Math.min(this.pageSize, this.pageTotal);
                while (i) {
                    pag.unshift(i--);
                }
            } else {
                //当前页数大于显示条数
                var middle = this.curPage - Math.floor(this.pageSize / 2),
                    //从哪里开始
                    i = this.pageSize;
                if (middle > this.pageTotal - this.pageSize) {
                    middle = this.pageTotal - this.pageSize + 1;
                }
                while (i--) {
                    pag.push(middle++);
                }
            }
        } else {
            console.error('当前页数不能大于总页数');
        }
        if (!this.pageSize) {
            console.error('显示页数不能为空或者0');
        }
        return pag;
    },
    //下一页
    nextPage: function nextPage() {
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = '>';
        if (parseInt(that.curPage) < parseInt(that.pageTotal)) {
            li.onclick = function () {
                that.curPage = parseInt(that.curPage) + 1;
                that.init();
                that.getPage(that.curPage);
            };
        } else {
            li.className = 'disabled';
        }
        this.ul.appendChild(li);
    },
    //尾页
    finalPage: function finalPage() {
        var that = this;
        var li = document.createElement('li');
        li.innerHTML = '尾页';
        this.ul.appendChild(li);
        li.onclick = function () {
            var yyfinalPage = that.pageTotal;
            var val = parseInt(yyfinalPage);
            that.curPage = val;
            that.getPage(that.curPage);
            that.init();
        };
    },
};
