---
layout: post
title: 解决IOS系统iframe宽高设置不兼容
comments: false
---

```html
     <iframe name="iframe" :src="sourSrc" frameborder="0" height="100%" scrolling='no' style="width: 1px; min-width: 100%; *width: 100%;"></iframe>
```