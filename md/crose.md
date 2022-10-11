

chrome地址栏输入：
chrome://flags/#same-site-by-default-cookies

chrome://flags/#cookies-without-same-site-must-be-secure

将这两项设置为Disabled，并重启浏览器，即可解决。

问题原因：vivo个别机型跨域问题，请求头Access-Control-Allow-Headers设置为* 不支持   
服务端原设置：Access-Control-Allow-Headers: NOT,*   
解决方案：请求头设置更改为
Access-Control-Allow-Headers: Origin,NOT,Accept,Authorization,X-Requested-With,X_Requested_With,X-PINGOTHER,Content-Type
Access-Control-Allow-Methods: POST,GET,OPTIONS

## 除了后端修改header之外，阿波罗也要同步修改