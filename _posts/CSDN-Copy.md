---
date: '2023-10-09 20:30'
title: 'CSDN代码复制'
description: ''
---

## 复制下面的代码，Ctrl+D当前页面到书签，修改书签网址，粘贴代码

```js
javascript: $('#content_views').unbind('copy');
document.body.style.background = 'black';
csdn.copyright.textData = '';
document.querySelectorAll('.prism,.hljs-button').forEach((b) => {
  b.setAttribute('data-title', '\u590d\u5236');
  b.onclick = function (e) {
    navigator.clipboard.writeText(e.target.parentElement.innerText);
    e.stopPropagation();
    e.target.setAttribute('data-title', '\u590d\u5236\u6210\u529f');
    setTimeout(() => {
      e.target.setAttribute('data-title', '\u590d\u5236');
    }, 2000)
  }
});
document.querySelectorAll('style').forEach((s) => {
  if ((s.innerText || '').indexOf('#content_views pre') > -1) {
    s.parentElement.removeChild(s);
  }
});
```
