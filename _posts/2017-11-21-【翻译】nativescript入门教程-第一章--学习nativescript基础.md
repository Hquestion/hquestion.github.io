---
layout: post
title: 学习NativeScript基础
comments: false
---
## 第一章---学习NativeScript基础
本章你将从基础开始，包括新建App,在模拟器上运行这些App,和建立一个
开发流，允许你快速开发App。
### 内容目录
* 1.1 [新建App](#create)
* 1.2 [运行App](#run)
* 1.3 [调试App](#debug)
* 1.4 [附录：选择一个编辑器](#appendix)

### <span id="create"></span>1.1 新建App
在NativeScript中你可以使用 NativeScript CLI创建和运行App。[安装](https://docs.nativescript.org/start/quick-setup)
完成之后，可以在终端或者命令行中使用<i>tns</i>命令-- Telerik NativeScript的简写。

在本节中，你将熟悉NativeScript CLI，并且使用CLI的<i>create</i>命令开始你的第一个NativeScript应用。

> #### 练习：使用 <i>tns create</i>命令
> 打开终端或者命令行，运行下面的命令来创建一个新的NativeScript应用<br>
> `tns create HelloWorld --template nativescript-template-tutorial`<br>
这里你传递了2个参数给*tns create*命令：**HelloWorld**决定了App的名称，**--template**参数告诉
NativeScript CLI使用预定义的模板“nativescript-template-tutorial”来创始化应用。
>> 提示：你可以使用*tns create*命令创建大量不同模板的应用。“nativescript-template-tutorial”
只是为了教授NativeScript基础而创建的一个非常简单的应用模板。<br>

> *create*将花费一点时间，因为NativeScript CLI在初始化你的应用时，会安装一些依赖。

> 命令结束时，使用*cd*命令进入你新建App的文件件。<br>

> `cd HelloWorld`

现在你已经创建了一个App，我们来看看怎么让你的应用跑起来，并且在模拟器上运行。
>> 你可以运行*tns help*命令，在浏览器中查看NativeScript CLI的帮助文档。

### <span id="run"></span>1.2 运行App

