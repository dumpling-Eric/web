### 1 基本认识

html：超文本标记语言，浏览器接收到html文件后会自动渲染，展示出一个扁平化的静态页面

css：为了让静态页面更好符合正常人的审美

html5：一个通行的html标准

Javascript：制作动态页面



web server：网络服务器，用于提供web service；浏览器和服务器之间的请求和响应都有一个HTTP协议

php：服务器脚本语言



机器之间进行交互，首先指定一种协议（HTTP协议）和一种数据封装格式（HTML），web server就是提供一个数据交流的服务，是一个交流体系

### 2 访问网站流程

a. 用户通过浏览器向服务器发送一个HTTP请求；

b. 服务器接收到HTTP请求后，web server做初步处理，使用服务器脚本生成页面；

c. 服务器脚本调用本地和客户端传来的数据生成页面；

d. web server将生成的页面作为HTTP响应的body，根据不同的处理结果生成HTTP的header，发回给客户端；

e. 客户端接收HTTP响应，对html文件进行解析渲染；

f. 解析过程中遇到服务器上的资源（css，js，图像，影音等），客户端向web server发出请求，web server找到对应的文件发送给客户端；

g. 浏览器继续解析，并使用css和js进行渲染；

h. 用户和页面进行交互的时候，js作出反应；交互过程中需要的数据再向web server发出请求，web server再用服务器脚本进行处理，将资源返回给客户端。
