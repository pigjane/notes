# 目录

1. **HTML**
    1. 基本组成
    2. 常用HTML标签
    3. 块级、行内、行内块级区别
    4. 外部资源引入
2. **Css**
    1. 常用css属性
    2. 基础语法
    3. base.css
    4. 项目常用布局实践
3. **Emmet语法**
    1. 使用方法
    2. 使用示例
    3. 完整语法表

# HTML
### 基本组成
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!--默认的苹果工具栏和菜单栏-->
    <meta content="yes" name="apple-mobile-web-app-capable"/>
    <!--控制状态栏显示样式-->
    <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
    <!--检测html里的一些格式,telephone去除号码下划线、email去除email跳转、address去除地图导航->
    <meta content="telephone=no" name="format-detection"/>
    <!-- 可是区域设置-->
    <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          name="viewport">
    <title>同程旅游邀你整装出发</title>
    <link href="//appnew.ly.com/hc/1/style/base.css?v=2016120201" rel="stylesheet" type="text/css"/>
</head>
<body>
<section class="index">
    <img class="bgimg1" src="//file.40017.cn/appresource/image/h5/poster/home_bg.jpg?v=2016122401">
    <img class="bgimg2" src="//file.40017.cn/appresource/image/h5/poster/bg.jpg?v=2016122401">
    <ul class="index-body">
        <li class="page1">
            <div class="line1"><img src="//file.40017.cn/appresource/image/h5/poster/home_line_down.png"></div>
            <div class="line2"><img src="//file.40017.cn/appresource/image/h5/poster/home_line_top.png"></div>
            <div class="home_slogan_1"><img src="//file.40017.cn/appresource/image/h5/poster/home_slogan_1.png"></div>
            <div class="home_slogan_2"><img src="//file.40017.cn/appresource/image/h5/poster/home_slogan_2.png"></div>
            <div class="home_slogan_3"><img src="//file.40017.cn/appresource/image/h5/poster/home_slogan_3.png"></div>
            <div class="home_button_shuadapai"><img
                    src="//file.40017.cn/appresource/image/h5/poster/home_button_shuadapai.png"></div>
        </li>
    </ul>
</section>
<script src="//file.40017.cn/appresource/js/h5/common/zepto.all.js?v=2016122401"></script>
</body>
</html>
```
### 常用HTML标签
**级块元素(block element)**
* section - 标签定义文档中的节（section、区段
* address - 地址
* blockquote - 块引用
* center - 举中对齐块
* dir - 目录列表
* ==div - 可定义文档中的分区或节（division/section），也是css layout的主要标签==
* ==dl - 定义列表==
* ==dt - 定义==
* ==dd - 描述==
* fieldset - form控制组
* form - 交互表单
* h1 - 大标题
* h2 - 副标题
* h3 - 3级标题
* h4 - 4级标题
* h5 - 5级标题
* h6 - 6级标题
* hr - 水平分隔线
* menu - 菜单列表
* ol - 排序表单
* ==p - 段落==
* ==pre - 格式化文本==
* table - 表格
* ==ul - 非排序列表==
* li - 列表项


**内联元素（行内元素）内联元素(inline element)**
* ==a - 锚点==
* abbr - 缩写
* acronym - 首字
* b - 粗体
* bdo - bidi override
* big - 大字体
* ==br - 换行==
* cite - 引用
* code - 计算机代码(在引用源码的时候需要)
* dfn - 定义字段
* ==em - 强调==
* font - 字体设定
* ==i - 斜体==
* ==img - 图片==
* ==input - 输入框==
* kbd - 定义键盘文本
* label - 表格标签
* q - 短引用
* s - 中划线
* samp - 定义范例计算机代码
* select - 项目选择
* small - 小字体文本
* span - 常用内联容器，定义文本内区块
* strike - 中划线
* ==strong - 粗体强调==
* sub - 下标
* sup - 上标
* ==textarea - 多行文本输入框==
* u - 下划线
* var - 定义变量

**特殊元素**
* <head>	定义关于文档的信息。
* <title>	定义文档标题。
* <base>	定义页面上所有链接的默认地址或默认目标。
* <link>	定义文档与外部资源之间的关系。
* <meta>	定义关于 HTML 文档的元数据。
* <script>	定义客户端脚本。
* <style>   定义文档的样式信息。

### 块级、行内、行内块级区别

 1 | 块级元素 | 行内元素
---|---|---
常见元素 | div、p、form、ul、ol、li | span、strong、em
特性 |独占一行，默认情况下，其宽度自动填满其父元素宽度 | 不会独占一行，相邻行内元素会排列在同一行里，直到一行排不下，才会换行，其宽度随元素的内容而变化
width、height属性 | 可以设置，设置了宽度还是独占一行 |  无效
margin和padding属性 | 可以设置 |水平方向的padding-left、padding-right、margin-left、margin-right都产生边距效果，但竖直方向的padding-top、padding-bottom、margin-top、margin-bottom却不会产生边距效果。
对应的相关display属性 | block | inline
切换 | display:inline变成行内元素 | display:block变成块级元素

> `display:inline-block`让行内元素既不占一行，也可以设置宽高。


### 外部资源引入

```
<link href="//appnew.ly.com/hc/1/style/base.css?v=2016120201" rel="stylesheet" type="text/css"/>
<script src="//file.40017.cn/appresource/js/h5/common/zepto.all.js?v=2016122401"></script>
```

# Css

* CSS 指层叠样式表 (Cascading Style Sheets)
* 样式定义如何显示 HTML 元素
* 样式通常存储在样式表中
* 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
* 外部样式表可以极大提高工作效率
* 外部样式表通常存储在 CSS 文件中
* 多个样式定义可层叠为一

### 基础语法
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。
```
selector {declaration1; declaration2; ... declarationN }
```
选择器通常是您需要改变样式的 HTML 元素。
每条声明由一个属性和一个值组成。
属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。
```
selector {property: value}
```
下面这行代码的作用是将 h1 元素内的文字颜色定义为红色，同时将字体大小设置为 14 像素。
在这个例子中，h1 是选择器，color 和 font-size 是属性，red 和 14px 是值。
```
h1 {color:red; font-size:14px;}
```

### 常用css属性
> 不一定要把所有东西背下来，而是当成工具书来使用

[css属性参考](http://www.w3school.com.cn/cssref/index.asp)

### base.css
[base样式](http://appnew.ly.com/hc/1/style/base.css)

### 项目常用布局实践


1. **项目入口列表**

![clipboard.png](http://segmentfault.com/img/bVHHcR)

```
<ul class="enter-box">
    <li class="enter-item">
        <img class="enter-icon" src="http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313300323881.png">
        <p class="enter-name">入口111111入口111111</p>
    </li>
    <li class="enter-item">
        <img class="enter-tip" src="http://tcw-reso.b0.upaiyun.com/20160708/Resource/2016070811142135930382.png">
        <img class="enter-icon" src="http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313290352785.png">
        <p class="enter-name">入口2</p>
    </li>
    <li class="enter-item">
        <img class="enter-icon" src="http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313300323881.png">
        <p class="enter-name">入口3</p>
    </li>
    <li class="enter-item">
        <img class="enter-icon" src="http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313300323881.png">
        <p class="enter-name"></p>
    </li>
    <li class="enter-item">
        <img class="enter-icon" src="http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313300323881.png">
        <p class="enter-name">入口4</p>
    </li>
</ul>
```
```
.enter-box {
    font-size: 0;
}

.enter-item {
    position: relative;
    width: 25%;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    font-size: 0;
}

.enter-icon {
    width: 64px;
    height: auto;
}

.enter-name {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.enter-tip {
    width: 24px;
    height: auto;
    position: absolute;
    right: 10px;
    top: 8px;
    z-index: 1;
}
```
2. **图文结构**

![image](http://segmentfault.com/img/bVHHDn)
```
<p class="example1">标题文案</p>
<p class="example2">标题文案</p>
```
```
.pictext-box .example1 {
    padding-left: 60px;
    height: 44px;
    font-size: 16px;
    color: #333;
    line-height: 44px;
    background: url(http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313290357631.png) 10px center no-repeat #fff;
    background-size: 36px auto;
}

.pictext-box .example2 {
    height: 44px;
    font-size: 16px;
    color: #333;
    line-height: 44px;
    background: #fff;
}

.pictext-box .example2::before {
    content: '';
    margin: 0 10px -12px 10px;
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313290357631.png) center center no-repeat #fff;;
    background-size: contain;
}
```
---
![image](http://segmentfault.com/img/bVHHDE)
```
<div class="search-box">
    <p class="search-tip">输入景点名称</p>
</div>
```
```
.pictext-box .search-box {
    padding: 10px;
    background: #ddd;
}

.pictext-box .search-tip {
    height: 30px;
    line-height: 31px;
    color: #999;
    text-align: center;
    background: #fff;
    border-radius: 15px;
}

.pictext-box .search-tip::before {
    content: '';
    margin: 0 3px -6px 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(https://tcw-public.b0.upaiyun.com/public/2017010314503184115436.png) center center no-repeat #fff;;
    background-size: contain;
}
```
---
![image](http://segmentfault.com/img/bVHHDK)
```
<div class="title-box">
    <p class="left">主标题</p>
    <p class="right">查看更多</p>
</div>
```
```
.pictext-box .title-box {
    display: box;
    display: -webkit-box;
}

.pictext-box .title-box .left, .pictext-box .title-box .right {
    height: 44px;
    background: #fff;
    line-height: 44px;
}

.pictext-box .title-box .left {
    box-flex: 1;
    -webkit-box-flex: 1;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.pictext-box .title-box .left::before {
    content: '';
    margin: 0 10px -12px 10px;
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(http://tcw-public.b0.upaiyun.com/20160503/ClientContent/2016050313290357631.png) center center no-repeat #fff;;
    background-size: contain;
}

.pictext-box .title-box .right::after {
    content: '';
    margin: 0 10px -13px 6px;
    display: inline-block;
    width: 12px;
    height: 36px;
    background: url(http://appnew.ly.com/hc/1/img/right-arrow.svg) center center no-repeat #fff;;
    background-size: contain;
}
```

3. **Tab**

![image](http://segmentfault.com/img/bVHHSf)
```
<ul class="tab-box">
    <li class="tab-item active">自驾游</li>
    <li class="tab-item">最热门</li>
    <li class="tab-item">省心游</li>
    <li class="tab-item">省心游</li>
    <li class="tab-item">省心游</li>
    <li class="tab-item">省心游</li>
</ul>
```
```
.tab-box {
    font-size: 0;
    white-space: nowrap;
    overflow: auto;
    background: #fff;
}

.tab-box::-webkit-scrollbar {
    display: none;
}

.tab-item {
    margin: 0 5px;
    padding: 0 10px;
    display: inline-block;
    height: 44px;
    line-height: 46px;
    font-size: 16px;
    color: #666;
    border-bottom: 2px solid #fff;
}

.tab-item.active {
    color: #23beae;
    border-bottom: 2px solid #23beae;
}
```

4. **产品列表项**

![image](http://segmentfault.com/img/bVHHVf)

```
<ul class="list-box">
    <li class="list-item border_bottom">
        <div class="left">
            <img class="item-img" src="http://pic3.40017.cn/line/admin/2014/10/28/10/juTLKQ_172x172_00.jpg.webp">
            <p class="start">长沙出发</p>
            <div class="corner">
                <i>跟团游</i>
                <span></span>
            </div>
        </div>
        <dl class="right">
            <dt class="title"><【百旅会】-法兰克福 威尼斯 佛罗伦萨 罗马 因特拉肯 巴黎 12日11晚跟团游>长沙直飞 含小费 含城市税 金色山口 & 童话城堡 & 雪朗峰 & 凡尔赛宫 & 贡多拉游船
            </dt>
            <dd class="price">7899</dd>
            <dd class="tips-box">
                <div class="tips-item"><img
                        src="http://tcw-public.b0.upaiyun.com/20160318/ClientContent/2016031818231841491383.png"></div>
                <div class="tips-item"><p>即时确认</p></div>
                <div class="tips-item"><p>即时确认</p></div>
                <div class="tips-item"><p>即时确认</p></div>
                <div class="tips-item"><p>即时确认</p></div>
            </dd>
            <dd class="comments">4条点评100%满意</dd>
        </dl>
    </li>
    <li class="list-item border_bottom">
        <div class="left">
            <img class="item-img" src="http://pic3.40017.cn/line/admin/2014/10/28/10/juTLKQ_172x172_00.jpg.webp">
            <p class="start">长沙出发</p>
            <div class="corner">
                <i>跟团游</i>
                <span></span>
            </div>
        </div>
        <dl class="right">
            <dt class="title"><【百旅会】-法兰克福 威尼斯 佛罗伦萨 罗马 因特拉肯 巴黎 12日11晚跟团游>长沙直飞 含小费 含城市税 金色山口 & 童话城堡 & 雪朗峰 & 凡尔赛宫 & 贡多拉游船
            </dt>
            <dd class="price">7899</dd>
            <dd class="tips-box">
                <div class="tips-item"><img
                        src="http://tcw-public.b0.upaiyun.com/20160318/ClientContent/2016031818231841491383.png"></div>
                <div class="tips-item"><p>即时确认</p></div>
                <div class="tips-item"><p>即时确认</p></div>
                <div class="tips-item"><p>即时确认</p></div>
                <div class="tips-item"><p>即时确认</p></div>
            </dd>
            <dd class="comments">4条点评100%满意</dd>
        </dl>
    </li>
</ul>
```
```
.list-box {
    background: #fff;
}

.list-item {
    display: box;
    display: -webkit-box;
    padding: 10px;
}

.list-item .left {
    position: relative;
}

.list-item .item-img {
    width: 90px;
    height: 80px;
}

.list-item .start {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background: #596d84;
    border-radius: 0 0 3px 3px;
}

.list-item .corner {
    height: 20px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}

.list-item .corner > i {
    float: left;
    line-height: 20px;
    padding-left: 5px;
    font-style: normal;
    color: #fff;
    background: #c49b53;
}

.list-item .corner > span {
    display: inline-block;
    width: 0;
    height: 0;
    border-right: 20px solid transparent;
    border-top: 30px solid #c49b53;
}

.list-item .right {
    box-flex: 1;
    -webkit-box-flex: 1;
    padding-left: 10px;
}

.list-item .right .title {
    font-size: 16px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.list-item .price {
    font-size: 24px;
    color: #ff5346;
    font-family: arial;
}

.list-item .price::before {
    content: '¥';
    font-size: 14px;
}

.list-item .price::after {
    content: '起';
    font-size: 14px;
    color: #999;
}

.list-item .tips-box {
    height: 22px;
    font-size: 0;
    overflow: hidden;
}

.list-item .tips-item {
    display: inline-block;
    vertical-align: top;
    margin-right: 5px;
    margin-bottom: 5px;
}

.list-item .tips-item > img {
    height: 18px;
    width: auto;
}

.list-item .tips-item > p {
    font-size: 10px;
    height: 18px;
    line-height: 18px;
    padding: 0 3px;
    box-sizing: border-box;
    color: #23beae;
    border: 1px solid #23beae;
}

.list-item .comments {
    font-size: 14px;
    color: #999;
}
```

5. **悬浮tab**

![image](http://segmentfault.com/img/bVHIcl)
```
<section class="section2">
    <ul class="tab-box">
        <li class="tab-item active">自驾游</li>
        <li class="tab-item">最热门</li>
        <li class="tab-item">省心游</li>
    </ul>
    <div class="page-body">
        <p style="height:1000px"></p>
    </div>
</section>
```
```
.section2 {
    display: box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    box-orient: vertical;
}

.page-body {
    -webkit-box-flex: 1;
    box-flex: 1;
    overflow-y: auto;
}

.page-body > p {
    height: 1000px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ff5346), color-stop(100%,#ffffff));
    background: -webkit-linear-gradient(top, #ff5346 0%,#ffffff 100%);
    background: linear-gradient(to bottom, #ff5346 0%,#ffffff 100%);
}

```

# Emmet语法

> Emmet(前身为 Zen Coding)是一个能大幅度提高前端开发效率的一个工具,是一款编辑器插件，必须要基于某个编辑器使用。Emmet 可以快速的编写 HTML、CSS 以及实现其他的功能。它根据当前文件的解析模式来判断要使用 HTML 语法还是 CSS 语法来解析。

### 使用方法

emmet的使用方法也非常简单，以sublime text为例，直接在编辑器中输入HTML或CSS的代码的缩写，然后按tab键就可以拓展为完整的代码片段。（如果与已有的快捷键有冲突的话，可以自行在编辑器中将拓展键设为其他快捷键）

### 使用示例

#### 后代：>

缩写：nav>ul>li
```
<nav>
    <ul>
        <li></li>
    </ul>
</nav>
```
---
#### 兄弟：+

缩写：div+p+bq
```
<div></div>
<p></p>
<blockquote></blockquote>
```

---

#### 上级：^

缩写：div+div>p>span+em^bq
```
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```
缩写：div+div>p>span+em^^bq
```
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```
---
#### 分组：()

缩写：div>(header>ul>li*2>a)+footer>p
```
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```
...
### 完整语法表

[语法表](https://segmentfault.com/img/bVHOHr)