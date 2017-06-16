title: 你不知道的setTimeout
speaker: 大坚
url: https://github.com/ksky521/nodePPT
transition: zoomout
files: /js/demo.js,/css/demo.css
theme: light

[slide]

<img src="/qr/20172318022302435.jpg" height="2000">

[slide]

# 你不知道的setTimeout
## 分享人：大坚

[slide]
# 概念

<p style="text-align:left;word-break:break-all;white-space:pre-line;">`JavaScript`提供定时执行代码的功能，叫做定时器（timer），主要由`setTimeout()`和`setInterval()`这两个函数来完成。 
</p>

[slide]

# setTimeout()基础
<p style="text-align:left;word-break:break-all;white-space:pre-line;">`setTimeout`函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。
</p>

```javascript
var timerId = setTimeout(func|code, delay)
```

<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码中，`setTimeout`函数接受两个参数，第一个参数`func|code`是将要推迟执行的函数名或者一段代码，第二个参数`delay`是推迟执行的毫秒数。
</p>

[slide]

```javascript
console.log(1);
setTimeout('console.log(2)',1000);
console.log(3);
```

[slide]
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码的输出结果就是`1，3，2`，因为`setTimeout`指定第二行语句推迟`1000`毫秒再执行(如果这在`Sublime`下运用插件以`nodejs`环境来执行，许解释器不同，会报错)。
需要注意的是，推迟执行的代码必须以字符串的形式，放入`setTimeout`，因为引擎内部使用`eval`函数，将字符串转为代码。
</p>

[slide]

<p style="text-align:left;word-break:break-all;white-space:pre-line;">如果推迟执行的是函数，则可以直接将函数名，放入`setTimeout`。一方面eval函数有安全顾虑，另一方面为了便于`JavaScript`引擎优化代码，`setTimeout`方法一般总是采用函数名的形式，就像下面这样。
</p>
```javascript
function func(){
	console.log(2);
}
setTimeout(func,1000);
// 或者
setTimeout(function (){console.log(2)},1000);
```
[slide]

# setTimeout传参数
<p style="text-align:left;word-break:break-all;white-space:pre-line;">除了前两个参数，`setTimeout`还允许添加更多的参数。它们将被传入推迟执行的函数（回调函数）。
</p>

[slide]

```javascript
setTimeout(function(a,b){
	console.log(a+b);
},1000,1,1);
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码中，`setTimeout`共有4个参数。最后那两个参数，将在1000毫秒之后回调函数执行时，作为回调函数的参数。
`IE 9.0`及以下版本，只允许`setTimeout`有两个参数，不支持更多的参数;
可以在匿名函数中，让回调函数带参数运行，再把匿名函数输入`setTimeout`；
<strong>例如:</strong>
</p>
```javascript
setTimeout(function() {
	myFunc("one", "two", "three");
}, 1000);
```
[slide]
<p style="text-align:left;word-break:break-all;white-space:pre-line;">当然也可以使用`bind`或`apply`方法来解决。
例如使用`bind`方法，把多余的参数绑定在回调函数上面，生成一个新的函数输入`setTimeout`。
</p>

```javascript
//bind
setTimeout( 
	function(arg1){
		console.log(arg1)
	}.bind(undefined, 10)
, 1000);


//apply
function aaa(b){
	return function(){
		alert(b)
	}
}
setTimeout(aaa.apply(undefined,[1111]),1000)
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码中，`bind`方法第一个参数是`undefined`，表示将原函数的`this`绑定全局作用域，第二个参数是要传入原函数的参数。它运行后会返回一个新函数，该函数不带参数。
</p>

[slide]

# setTimeout注意点

[slide]

# setTimeout()中回调函数中的this

<p style="text-align:left;word-break:break-all;white-space:pre-line;">如果被`setTimeout`推迟执行的回调函数是某个对象的方法，那么该方法中的`this`关键字将指向全局环境，而不是定义时所在的那个对象。
</p>

```javascript
var x = 1;
var o = {
 	x: 2,
 	y: function(){
		console.log(this.x);
 	}
};
setTimeout(o.y,1000);
```

[slide]

<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码输出的是`1`，而不是`2`，这表示`o.y`的`this`所指向的已经不是`o`，而是全局环境了。
再看一个例子:
</p>

```javascript
function User(login) {
	this.login = login;
	this.sayHi = function() {
		console.log(this.login);
	}
}
var user = new User('John');
setTimeout(user.sayHi, 1000);
```
[slide]

<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码只会显示`undefined`，因为等到`user.sayHi`执行时，它是在全局对象中执行，所以`this.login`取不到值。
为了防止出现这个问题，一种解决方法是将`user.sayHi`放在匿名函数中执行。
</p>

```javascript
setTimeout(function() {
	user.sayHi();
}, 1000);
```

<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码中，`sayHi`是在`user`作用域内执行，而不是在全局作用域内执行，所以能够显示正确的值。
</p>

[slide]
<p style="text-align:left;word-break:break-all;white-space:pre-line;">另一种解决方法是，使用`bind`方法，将绑定`sayHi`绑定在`user`上面。
</p>

```javascript
setTimeout(user.sayHi.bind(user), 1000);
```
[slide]

#setTimeout执行回调间隔时间长度

<p style="text-align:left;word-break:break-all;white-space:pre-line;">`HTML5`标准规定，`setTimeout`的最短时间间隔是4毫秒。为了节电，对于那些不处于当前窗口的页面，浏览器会将时间间隔扩大到1000毫秒。另外，如果笔记本电脑处于电池供电状态，Chrome和IE 9以上的版本，会将时间间隔切换到系统定时器，大约是15.6毫秒。
</p>

[slide]
```javascript
var startTime = new Date();
setTimeout(function () {
	console.log(new Date() - startTime);
}, 100)
```
### 请问最后打印的是多少?

[slide]
<p style="text-align:left;word-break:break-all;white-space:pre-line;">
其正确答案是，取决于后面同步执行的js需要占用多少时间。
即为：`MAX(同步执行的时间, 100)`；缘何如此，就得看下<strong>setTimeout运行机制</strong>了。
</p>

[slide]
# setTimeout运行机制
<p style="text-align:left;word-break:break-all;white-space:pre-line;">
`setTimeout`和`setInterval`的运行机制是，将指定的代码移出本次执行，等到下一轮`Event Loop`时，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就等到再下一轮`Event Loop`时重新判断。这意味着，`setTimeout`指定的代码，必须等到本次执行的所有代码都执行完，才会执行。
每一轮`Event Loop`时，都会将“任务队列”中需要执行的任务，一次执行完。`setTimeout`和`setInterval`都是把任务添加到“任务队列”的尾部。因此，它们实际上要等到当前脚本的所有同步任务执行完，然后再等到本次`Event Loop`的“任务队列”的所有任务执行完，才会开始执行。由于前面的任务到底需要多少时间执行完，是不确定的，所以没有办法保证，`setTimeout`和`setInterval`指定的任务，一定会按照预定时间执行。<a href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html">JavaScript 运行机制</a>
</p>
[slide]

```javascript
setTimeout(someTask,100);
veryLongTask();


var startDate=new Date();
function veryLongTask(){
	for(var i=0;i<1000000000;i++){}
}
setTimeout(function(){
	console.log(new Date()-startDate)
},100);
veryLongTask();
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码的`setTimeout`，指定100毫秒以后运行一个任务。但是，如果后面立即运行的任务（当前脚本的同步任务））非常耗时，过了100毫秒还无法结束，那么被推迟运行的`someTask`就只有等着，等到前面的`veryLongTask`运行结束，才轮到它执行。
</p>

[slide]

#setTimeout(func,0)含义

<p style="text-align:left;word-break:break-all;white-space:pre-line;">
运行下面代码，`func1`和`func2`谁会先执行？
</p>

```javascript
setTimeout(function () {
    func1();
}, 0)
func2();
```
[slide]
<p style="text-align:left;word-break:break-all;white-space:pre-line;">
`setTimeout`的作用是将代码推迟到指定时间执行，如果指定时间为`0`，即`setTimeout(f,0)`，那么会立刻执行吗？
答案是不会。因为`setTimeout`运行机制说过，必须要等到当前脚本的<strong>同步任务</strong>和<strong>“任务队列”</strong>中已有的事件，全部处理完以后，才会执行`setTimeout`指定的任务。也就是说，`setTimeout`的真正作用是，在“任务队列”的现有事件的后面再添加一个事件，规定在指定时间执行某段代码。`setTimeout`添加的事件，会在下一次`Event Loop`执行。
`setTimeout(f,0)`将第二个参数设为0，作用是让`f`在现有的任务（脚本的<strong>同步任务</strong>和<strong>“任务队列”</strong>中已有的事件）一结束就立刻执行。也就是说，`setTimeout(f,0)`的作用是，尽可能早地执行指定的任务。
</p>
[slide]

<p style="text-align:left;word-break:break-all;white-space:pre-line;">
setTimeout(f,0)指定的任务，最早也要到下一次Event Loop才会执行。请看下面的例子。
</p>

```javascript
setTimeout(function() {
  console.log("Timeout");
}, 0);
function a(x) {
  console.log("a() 开始运行");
  b(x);
  console.log("a() 结束运行");
}
function b(y) {
  console.log("b() 开始运行");
  console.log("传入的值为" + y);
  console.log("b() 结束运行");
}
console.log("当前任务开始");
a(42);
console.log("当前任务结束");
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码说明，`setTimeout(f,0)`必须要等到当前脚本的所有同步任务结束后才会执行。
</p>

[slide]

<p style="text-align:left;word-break:break-all;white-space:pre-line;">`0毫秒`实际上达不到的。根据HTML5标准，`setTimeout`推迟执行的时间，最少是`4毫秒`。如果小于这个值，会被自动增加到`4`。这是为了防止多个`setTimeout(f,0)`语句连续执行，造成性能问题。
另一方面，浏览器内部使用`32位带符号的整数`，来储存推迟执行的时间。这意味着`setTimeout`最多只能推迟执行`2147483647`毫秒（24.8天），超过这个时间会发生溢出，导致回调函数将在当前任务队列结束后立即执行，即等同于`setTimeout(f,0)`的效果。
</p>

[slide]

#setTimeout(f,0)应用

[slide]
#调整事件的发生顺序
<p style="text-align:left;word-break:break-all;white-space:pre-line;">`setTimeout(f,0)`有几个非常重要的用途。它的一大应用是，可以调整事件的发生顺序。比如，网页开发中，某个事件先发生在子元素，然后冒泡到父元素，即子元素的事件回调函数，会早于父元素的事件回调函数触发。如果，我们先让父元素的事件回调函数先发生，就要用到`setTimeout(f, 0)`。</p>

```javascript
var input = document.getElementsByTagName('input[type=button]')[0];
input.onclick = function A() {
	setTimeout(function B() {
		input.value +=' input';
	}, 0)
};
document.body.onclick = function C() {
	input.value += ' body'
};
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码在点击按钮后，先触发回调函数A，然后触发函数C。在函数A中，`setTimeout`将函数B推迟到下一轮`Loop`执行，这样就起到了，先触发父元素的回调函数C的目的了。</p>

[slide]
<p style="text-align:left;word-break:break-all;white-space:pre-line;">用户自定义的回调函数，通常在浏览器的默认动作之前触发。比如，用户在输入框输入文本，`keypress`事件会在浏览器接收文本之前触发。因此，下面的回调函数是达不到目的的。</p>

```javascript
document.getElementById('input-box').onkeypress = function(event) {
	this.value = this.value.toUpperCase();
}
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码想在用户输入文本后，立即将字符转为大写。但是实际上，它只能将上一个字符转为大写，因为浏览器此时还没接收到文本，所以`this.value`取不到最新输入的那个字符。只有用`setTimeout`改写，上面的代码才能发挥作用。</p>

```javascript
document.getElementById('my-ok').onkeypress = function() {
	var self = this;
	setTimeout(function() {//在浏览器接收到文本之后触发
		self.value = self.value.toUpperCase();
	}, 0);
}
```

[slide]
# 分开处理逻辑
<p style="text-align:left;word-break:break-all;white-space:pre-line;">众所周知`javascript`是单线程的，特点就是容易出现阻塞。如果一段程序处理时间很长，很容易导致整个页面hold住。什么交互都处理不了怎么办？
`setTimeout`一个很关键的用法就是分片，如果一段程序过大，我们可以拆分成若干细小的块。由于`setTimeout(f,0)`实际上意味着，将任务放到浏览器最早可得的空闲时段执行，所以那些计算量大、耗时长的任务，常常会被放到几个小部分，分别放到`setTimeout(f,0)`里面执行(分片塞入队列)，这样即使在复杂程序没有处理完时，我们操作页面，也是能得到即时响应的。其实就是将交互插入到了复杂程序中执行。</p>

[slide]

```javascript
var div = document.getElementById('div');
// 写法一
for(var i=0xA00000;i<0xFFFFFF;i++) {
	div.style.backgroundColor = '#'+i.toString(16);
}

// 写法二
var div = document.getElementById('div');
var timer;
var i=0x100000;
function func() {
	timer = setTimeout(func, 0);
	div.style.backgroundColor = '#'+i.toString(16);
	if (i++ == 0xFFFFFF) clearTimeout(timer);
}
timer = setTimeout(func, 0);
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">上面代码有两种写法，都是改变一个网页元素的背景色。写法一会造成浏览器“堵塞”，而写法二就能就不会，这就是`setTimeout(f,0)`的好处。即：可利用`setTimeout`实现一种伪多线程的概念。
另一个使用这种技巧的例子是，代码高亮的处理。如果代码块很大，就会分成一个个小块，写成诸如`setTimeout(highlightNext, 50)`的样子，进行分块处理。</p>

<div id="div" style="height:100px;line-height:100px;">我是div</div>

[slide]

# clearTimeout()
<p style="text-align:left;word-break:break-all;white-space:pre-line;">`setTimeout`和`setInterval`函数，都返回一个表示计数器编号的整数值，将该整数传入`clearTimeout`和`clearInterval`函数，就可以取消对应的定时器。</p>

```javascript
var id1 = setTimeout(f,1000);
var id2 = setInterval(f,1000);
clearTimeout(id1);
clearInterval(id2);
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">`setTimeout`和`setInterval`返回的整数值是连续的(一定环境下，比如浏览器控制台，或者js执行环境等)，也就是说，第二个`setTimeout`方法返回的整数值，将比第一个的整数值大1。</p>
[slide]

<p style="text-align:left;word-break:break-all;white-space:pre-line;">利用这一点，可以写一个函数，取消当前所有的`setTimeout`。</p>

```javascript
(function() {
	var gid = setInterval(clearAllTimeouts, 0);
	function clearAllTimeouts() {
		var id = setTimeout(function() {}, 0);
		while (id > 0) {
			if (id !== gid) {
				clearTimeout(id);
			}
			id--;
		}
	}
})();
```
<p style="text-align:left;word-break:break-all;white-space:pre-line;">运行上面代码后，实际上再设置任何`setTimeout`都无效了。

现实中，最好不要设置太多个`setTimeout`和`setInterval`，它们耗费CPU。比较理想的做法是，将要推迟执行的代码都放在一个函数里，然后只对这个函数使用`setTimeout`或`setInterval`。</p>

[slide]

#谢谢参与

[slide]

<img src="/qr/20172318022308879.jpg" height="2000">