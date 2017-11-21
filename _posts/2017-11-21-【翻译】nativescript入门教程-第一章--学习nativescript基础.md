---
layout: post
title: 【翻译】nativescript入门教程 第一章--学习NativeScript基础
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
现在你已经在本地搭建了一个App，并且已经进入到App的根目录，你已经可以在模拟器上运行你的App了。
> #### 练习：使用*tns run*命令
> 在NativeSciript里通过 *tns run* 命令在IOS和Android上运行你的App。我们从Android开始。<br>
> 在终端里运行下面的命令，在Android模拟器上运行你的App。<br>
`tns run android`<br>

> *run* 命令将会在几秒后完成，因为NativeScript将会实际构建和部署一个Android应用。
 命令完成之后，本地模拟器将会打开应用。
 
> 如果你使用的是macOS，想要从IOS开始，终止`tns run android`命令，并在命令行运行下面的命令：<br>
> `tns run ios`

你可能已经注意到了，*tns run* 命令永远不会终止，因此，你不能在应用启动之后，再在命令行里输入内容。

这样的原因是因为 *tns run* 命令不仅启动你的App，他也监听你代码的变化。
当 *tns run* 命令检测到代码变化时，命令将会自动刷新，或者实时同步你的App，
因此你能立刻看到这些改变。

综上所述，NativeScript的实时同步让原始IOS和Android开发感觉与web开发有一些类似。
你可以修改你的css，标签和js代码，并且立即看到这些改变--完全在原始手机App里。

### <span id="debug"></span>1.3 调试App
现在你已经知道如何创建和运行NativeScript应用了，接下来学习在应用异常时，如何调试
你的应用。我们来看看NativeScript里调试怎么进行。

当你想要调试NativeScript应用时，有三条主要途径：

**Chrome** NativeScript默认调试方法是使用Chrome的扩展。[点击这里查看](https://docs.nativescript.org/tooling/debugging)

**Visual Studio Code** 推荐调试方法之一，使用VS Code的[NativeScript扩展](https://docs.nativescript.org/tooling/debugging#debugging-with-visual-studio-code)

你还可以通过console.log()或者console.dir()做一下简单的日志。示例见官网

### <span id="appendix"></span>1.4 附录A:选择一个编辑器

官方推荐使用VS Code
