---
date: '2023-10-08 20:30'
title: 'CSS Debug Trick'
description: ''
---

## 复制下面的代码，Ctrl+D当前页面到书签，修改书签网址，粘贴代码

```js
javascript: (() => {
  const headElement = document.head;
  const styleElement = document.createElement('style');
  styleElement.setAttribute('debug-css', '');
  styleElement.innerText = '* { outline: 1px solid tomato; }';
  const debugElement = headElement.querySelector('[debug-css]');
  if (debugElement) return debugElement.remove();
  headElement.append(styleElement);
})()
```
