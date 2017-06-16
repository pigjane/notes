# CSS元素选择器

[选择器语法大全](http://www.w3school.com.cn/cssref/css_selectors.asp)

### 常用css选择器

选择器 | 例子|例子描述
---|---|---
.class |.intro	|选择 class="intro" 的所有元素。
#id	|#firstname|	选择 id="firstname" 的所有元素。
*|	*|	选择所有元素。
element|	p|	选择所有 <p> 元素。	
element,element|	div,p|	选择所有 <div> 元素和所有 <p> 元素。
element element	|div p	|选择 <div> 元素内部的所有 <p> 元素。
element>element	|div>p	|选择父元素为 <div> 元素的所有 <p> 元素。
:active	|a:active|	选择活动链接。
:first-letter|	p:first-letter|	选择每个 <p> 元素的首字母。
:first-child|	p:first-child|	选择属于父元素的第一个子元素的每个 <p> 元素。
:before|p:before|	在每个 <p> 元素的内容之前插入内容。	
:after|p:after	|在每个 <p> 元素的内容之后插入内容。

### CSS优先级

1. **内联样式表的权值最高 1000**
2. **ID 选择器的权值为 100**
3. **Class 类选择器的权值为 10**
4. **HTML 标签选择器的权值为 1**

#### 示例

```
<html>
  <head>
    <style type="text/css">
        #redP p {
             /* 权值 = 100+1=101 */
             color:red;  /* 红色 */
        }
 
        #redP .red em {
             /* 权值 = 100+10+1=111 */
             color:blue; /* 蓝色 */
        }
 
        #redP p span em {
             /* 权值 = 100+1+1+1=103 */
             color:yellow;/*黄色*/
        }
    </style>
  </head>
  <body>
     <div id="redP">
        <p class="red">red
           <span><em>em red</em></span>
        </p>
        <p>red</p>
     </div>
  </body>
</html>
```
### CSS 优先级法则：

1. **选择器都有一个权值，权值越大越优先**
2. **当权值相等时，后出现的样式表设置要优于先出现的样式表设置**
3. **创作者的规则高于浏览者：即网页编写者设置的CSS样式的优先权高于浏览器所设置的样式**
4. **继承的CSS样式不如后来指定的CSS样式**
5. **在同一组属性设置中标有“!important”规则的优先级最大**


#### 示例
```
<style>
    #redP p{
        /*两个color属性在同一组*/
        color:#00f !important; /* 优先级最大 */
        color:#f00;
    }
</style>
```

# HTML5标签

[HTML5标签](http://www.w3school.com.cn/tags/index.asp)

# CSS3属性

> CSS3是CSS技术的升级版本，以往的样式跟不上需求，因此制定了新的标准来满足需求。

- [选择器](http://www.w3school.com.cn/cssref/css_selectors.asp)
- 框模型
- [背景和边框](http://www.w3school.com.cn/css3/css3_border.asp)
- 文本效果
- 2D/3D 转换
- 动画
- 多列布局
- 用户界面

#### 1px线
![image](http://appnew.ly.com/hc/1/img/border.png)

#### 3D坐标
[张鑫旭文章](http://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)

# 滚动的骰子

#### rotate3d()中取值说明：

 - x：是一个0到１之间的数值，主要用来描述元素围绕X轴旋转的矢量值；
 - y：是一个0到１之间的数值，主要用来描述元素围绕Y轴旋转的矢量值；
 - z：是一个0到１之间的数值，主要用来描述元素围绕Z轴旋转的矢量值；
 - a：是一个角度值，主要用来指定元素在3D空间旋转的角度，如果其值为正值，元素顺时针旋转，反之元素逆时针旋转。
 
#### 下面介绍的三个旋转函数功能等同：

 - rotateX(a)函数功能等同于rotate3d(1,0,0,a)
 - rotateY(a)函数功能等同于rotate3d(0,1,0,a)
 - rotateZ(a)函数功能等同于rotate3d(0,0,1,a)

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>滚动的骰子</title>
    <style>
        #view {
            perspective: 500px;
            perspective-origin: 250px 100px;
            width: 200px;
            height: 200px;
            margin: 200px auto;
        }

        @keyframes scroll {
            100% {
                transform: rotate3d(1, 1, 1, 360deg);
            }
        }

        #cube {
            width: 200px;
            height: 200px;
            position: relative;
            animation: scroll 2s linear 7s infinite;
            transform-style: preserve-3d;
        }

        .item {
            width: 200px;
            height: 200px;
            border: 1px solid black;
            font-size: 150px;
            text-align: center;
            background: yellow;
            opacity: 0.7;
            position: absolute;
        }

        @keyframes item1 {
            100% {
                transform: rotateY(-90deg);
            }
        }

        @keyframes item2 {
            100% {
                transform: rotateY(90deg);
            }
        }

        @keyframes item3 {
            100% {
                transform: rotateX(90deg);
            }
        }

        @keyframes item4 {
            100% {
                transform: rotateX(-90deg);
            }
        }

        @keyframes item5 {
            100% {
                transform: translateZ(200PX);
            }
        }

        @keyframes item6 {
            100% {
                transform: rotateY(180deg);
            }
        }

        #item1 {
            z-index: 6;
            background: yellow;
            transform-origin: left;
            animation: item1 1s linear 1s both;
        }

        #item2 {
            z-index: 5;
            background: red;
            transform-origin: right;
            animation: item2 1s linear 2s both;
        }

        #item3 {
            z-index: 4;
            background: green;
            transform-origin: top;
            animation: item3 1s linear 3s both;
        }

        #item4 {
            z-index: 3;
            background: blue;
            transform-origin: bottom;
            animation: item4 1s linear 4s both;
        }

        #item5 {
            z-index: 2;
            background: silver;
            transform-origin: center;
            animation: item5 1s linear 5s both;
        }

        #item6 {
            z-index: 1;
            background: pink;
            transform-origin: center;
            animation: item6 1s linear 6s both;
        }
    </style>

</head>
<body>

<div id="view">
    <div id="cube">
        <div class="item" id="item1">1</div>
        <div class="item" id="item2">2</div>
        <div class="item" id="item3">3</div>
        <div class="item" id="item4">4</div>
        <div class="item" id="item5">5</div>
        <div class="item" id="item6">6</div>
    </div>
</div>
</div>
</body>
</html>
```


