## 对象结构语法赋予默认值时，null视为有值，不会被赋予默认值

```js
const obj = { a: 'a',b:undefined,c:null}
const { a = 1,b=1,c=1,d=1} = obj
console.log(a) // 字符串a; a有值，不会被赋予默认值
console.log(b) // 1; undefined会被赋予默认值
console.log(c) // null; null不会被赋予默认值
console.log(d) // 1; d未定义，等于undefined会被赋予默认值
```

解答：es6文档上有明确说明

对象的解构也可以指定默认值。默认值生效的条件是，对象的属性值严格等于undefined。

```js
var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null
```
上面代码中，属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。