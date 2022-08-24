## axios在nodejs中的使用

## 发送请求体的数据类型
const res = await axios.post('https://httpbin.org/post', { hello: 'world' });

res.data.json; // { hello: 'world' }
When sending requests with data, the data can be of type:

- string
- object
- ArrayBuffer
- ArrayBufferView
- URLSearchParams
- Form Data：browser only.
- File： browser only.
- Blob： browser only.
- Stream：Node only
- Buffer：Node only

Note: Stream and Buffer is for Node only while Form Data, File, and Blob is for the browser only.

## responseType: 返回数据类型
服务端响应的数据类型

选项包括：
- json：默认
- text
- document
- arraybuffer
- stream：应该是Node only（IE上可以使用`ms-stream`）// 不确定
- blob：browser only.

### nodejs中，axios设置responseType做了什么