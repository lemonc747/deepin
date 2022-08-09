# Promise

## 创建Promise

```js
const a = new Promise((resolve, reject) => {
  // 执行异步任务
  if (a) {
    resolve(1)
  } else (
    reject(1)
  )
})
```

## resolve & reject

resolve: 表示调用成功

## then(success, fail)

当调用`then`的`promise`成功，执行了`resolve`，函数就会走到这里的`success`

当执行了`reject`，或者抛出了异常，函数就会走到这里的`fail`

## catch(e => void)
catch(failureCallback) 是 then(null, failureCallback)的缩写

通常用于在链式调用的最后捕捉异常