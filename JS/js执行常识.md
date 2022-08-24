# JS执行的一些基本规则

## 一行语句中，从左到右执行
```js
const a = (arg) => {
  console.log('arg-', arg);
  return arg + 1;
}

const b = a(1) + a(2)
console.log('b-', b)
// arg-1
// arg-2
// 5
```

## eslint: require-atomic-updates 由于await和yield异步导致可能存在的竞态条件

```js
// 错误代码示范
let result = 0;
result += await doSomething();
// 等同于：
result = result + await doSomething();

// 正确代码1：先异步，后同步
result = await doSomething() + result;
// 正确示范2：一直使用const，不使用let
```

- 原因：语句先读取了`result`的值，然后执行异步方法`doSomething`。在异步执行过程中，result的值可能已经更新了。
此时我们使用了缓存的未更新前的`result`，导致更新丢失
- 解决办法1：在异步完成之后，再去读取本地的值
- 解决办法2：避免使用let