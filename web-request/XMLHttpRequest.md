# XHR
与服务端交互，从服务端请求数据，实现页面的局部更新

## 构造函数
```js
const request = new XMLHttpRequest();
```

## responseType
个人理解：responseType将返回的数据转换成指定的类型。相当于一个类型转换的过程，如果responseType的值与后端返回的数据类型对不上，解析数据就会出错。

网上有说法：responseType告诉后端服务器要返回的数据类型，无法印证。猜测服务器并不关心甚至无法获取这个responseType

- text: 默认，DOMString对象中的文本
- arraybuffer: 一个包含二进制数据的 JavaScript ArrayBuffer
- blob：一个包含二进制数据的 Blob对象
- json
- document


备注： 将 responseType 设置为特定值时，开发人员应确保服务器实际发送的响应与该格式兼容。如果服务器返回的数据与设置的 responseType 不兼容，则 response 的值将为null .


