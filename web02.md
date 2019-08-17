HTML（hyper text markup language）超文本编辑语言

标签是成对出现，元素就是要展现的内容，属性就是对于这些内容的更多信息

### 标题与段落

~~~html
<h1>这是一级标题</h1>
<p>这是段落</p><br />
<hr /><!--添加水平线-->
<!--注释内容-->
<p>这是<br />段落<br />1</p>
~~~

备注：浏览器在显示HTML时会省略掉源代码中多余的空格

### 样式

样式大概可以分为三种：外部样式表、内部样式表和内联样式

#### 外部格式表

通过link链接一个外部样式表

~~~html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
~~~

#### 内部格式表

~~~html
<head>
<style type="text/css">
h1 {color: red}
p {color: blue}
</style>
</head>

<body>
<h1>header 1</h1>
<p>A paragraph.</p>
</body>

~~~

#### 内联格式

```html
<body style="background-color: red">

<h1 style="text-align: center">这是一级标题</h1>
<p style="font-family: vardana;color: yellow;font-size: 20px">这是段落</p><br />
<hr />

</body>
```

### 文本格式化

#### 格式化标签

| 标签     | 描述           |
| -------- | -------------- |
| <b>      | 定义粗体文本。 |
| <big>    | 定义大号字。   |
| <em>     | 定义着重文字。 |
| <i>      | 定义斜体字。   |
| <small>  | 定义小号字。   |
| <srtong> | 定义加重语气。 |
| <sub>    | 定义下标字。   |
| <sup>    | 定义上标字。   |
| <ins>    | 定义插入字。   |
| <del>    | 定义删除字。   |

#### “计算机输出”标签

~~~html
<p>Coding Example:</p>

<code>
<pre>
var person = {
    firstName:"Bill",
    lastName:"Gates",
    age:50,
    eyeColor:"blue"
}
</pre>
</code>
~~~

| 标签   | 描述                 |
| ------ | -------------------- |
| <code> | 定义计算机代码。     |
| <kbd>  | 定义键盘码。         |
| <samp> | 定义计算机代码样本。 |
| <tt>   | 定义打字机代码。     |
| <var>  | 定义变量。           |
| <pre>  | 定义预格式文本。     |

#### 引用、引用和术语定义

~~~html
<p><abbr title="World Health Organization">WHO</abbr>成立于1948年</p>
~~~

| 标签         | 描述               |
| ------------ | ------------------ |
| <abbr>       | 定义缩写。         |
| <acronym>    | 定义首字母缩写。   |
| <address>    | 定义地址。         |
| <bdo>        | 定义文字方向。     |
| <blockquote> | 定义长的引用。     |
| <q>          | 定义短的引用语。   |
| <cite>       | 定义引用、引证。   |
| <dfn>        | 定义一个定义项目。 |

### 链接

#### 基本用法

```html
<a href="http://www.baidu.com">this is a link</a>
<p><a href="http://www.baidu.com">this</a> is a link</p>    #只有this链接到网页

<p>
您也可以使用图像来作链接：
<a href="/example/html/lastpage.html">
<img border="0" src="/i/eg_buttonnext.gif" />
</a>
</p>
```

#### 链接属性

~~~html
<!--target属性可以定义链接的文档在何处显示-->
<p><a href="http://www.baidu.com" target="_blank">this</a> is a link</p>
<!--_blank表示在新窗口打开链接；_top表示跳出框架-->


<!--name属性可以定义链接的文档在何处显示-->
<p><a href="#C4">查看 Chapter 4。</a></p>

<h2>Chapter 1</h2>
<h2>Chapter 2</h2>
<h2>Chapter 3</h2>
<h2><a name="C4">Chapter 4</a></h2>
~~~

### 图像

图像的路径可以是在本地电脑的绝对路径也可以是一个网址

```html
<!--src是图像的URL地址-->
<img src="url">

<!--alt属性用来为图像定义一串预备的可替换的文本-->
<img src="boat.gif" alt="Big Boat">
```

图像的具体应用

~~~html
<!--背景图片-->
<body background="url"></body>
<!--图片可以设置对齐方式，默认的bottom-->
<img src="boat.gif" align="bottom/middle/top">
<!--图片可以设置浮动方式-->
<img src="boat.gif" align="left/right">
<!--调整尺寸-->
<img src="boat.gif" width="100" height="100">
<!--图片作为链接-->
<p><a href="url"><img src="boat.gif"></a>是一个链接</p>
~~~

### 表单

表格由 <table> 标签来定义。每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容；<th>表示表头内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。

```html
<table border="1">
<!--border属性是显示边框-->
	<tr>
		<th>heading</th>
		<th>another heading</th>
        
	</tr>
	<tr>
		<td>row</td>
		<td>row</td>
	</tr>
	<tr>
		<td>row1</td>
		<td>row1</td>
	</tr>
	<tr>
		<td>row3</td>
		<td>&nbsp</td>
		<!--空单元格添加一个空格占位符-->
	</tr>
</table>
```

定义列表是项目及其注释的组合。自定义列表以 <dl> 标签开始。每个自定义列表项以 <dt> 开始。每个自定义列表项的定义以 <dd> 开始。

~~~html
<dl>
	<dt>apple</dt>
	<dd>fruit</dd>
	<dt>dog</dt>
	<dd>food</dd>
</dl>
~~~

特殊操作：

```html
<ul type="disc">
<!--type属性定义列表表头：disc为小黑圈；circle为空圈；square为小黑方格-->
	<li>apple</li>
	<li>dog</li>
</ul>

<ol type="A">
<!--type属性定义列表表头：A，a，I，i-->
	<li>apple</li>
	<li>dog</li>
</ol>
```

### 列表

无序列表项目使用粗体圆点（典型的小黑圆圈）进行标记。无序列表始于 <ul> 标签。每个列表项始于 <li>。

有序列表列表项目使用数字进行标记。有序列表始于 <ol> 标签。每个列表项始于 <li> 标签。

```html
<ul>
	<li>apple</li>
	<li>dog</li>
</ul>

<ol>
	<li>apple</li>
	<li>dog</li>
</ol>
```

列表的更多应用

```html
<!--背景图片-->
<body background="url"></body>
<!--图片可以设置对齐方式，默认的bottom-->
<img src="boat.gif" align="bottom/middle/top">
<!--图片可以设置浮动方式-->
<img src="boat.gif" align="left/right">
<!--调整尺寸-->
<img src="boat.gif" width="100" height="100">
<!--图片作为链接-->
<p><a href="url"><img src="boat.gif"></a>是一个链接</p>
```

### 表单

用于收集用户输入，包括input元素（用于输入）；

action属性（用于提交表单时执行的操作）、method属性（用于规定提交表单时用的http方法）、name属性（每个输入字段必须设置一个name属性）；

还可以使用<fieldset>组合表单中的相关数据，<legend>是用来为<fieldset>定义标题的。

#### 表单元素

下拉列表

~~~html
<select name="fruit">
	<option value="apple">apple</option>
	<!--option定义待选择的选项，value表示选项的值-->
	<option value="banana">banana</option>
	<option value="orange" selected>orange</option>
	<!--一般默认首选项为被选选项，也可以使用selected进行选择-->
</select>
~~~

#### 文本框

~~~html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
~~~



### 问题回答：

- HTML是什么，HTML5是什么

  HTML是超文本标记语言，HTML5 是一个html的一个规范，相当于标准

- HTML元素标签、属性都是什么概念？

  元素标签就是网页要展示的内容，属性表示了网页标签的更多信息

- 文档类型是什么概念，起什么作用？

  文档类型说明了文件的格式，可以帮助浏览器正确的显示网页

- meta标签都用来做什么的？

  显示有关页面的元信息，位于文档的头部（不包含认识内容）

- Web语义化是什么，是为了解决什么问题

  web语义化就是让标签具有良好的语义，可以让人和机器很好理解

- 链接是什么概念，对应什么标签？

  <a href="url">表示插入一个网页链接，还可以使用图片的方式链接

- 常用标签都有哪些，都适合用在什么场景

  ~~~html
  <body>
  
  <h1>这是一个1号标题</h1><br />
  <p>只是一个段落</p><br />
  <hr />
  <img src="url">
  
  </body>
  ~~~

- 表单标签都有哪些，对应着什么功能，都有哪些属性

  

- ol, ul, li, dl, dd, dt等这些标签都适合用在什么地方，举个例子

  用于创建列表

  ~~~html
  <ul>
  	<tr>
  		<td>banana</td>
  		<td>apple</td>
  	</tr>
  </ul>
  
  <dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
  </dl>
  
  <ol>
  	<tr>
  		<td>banana</td>
  		<td>apple</td>
  	</tr>
  </ol>
  ~~~

  

  