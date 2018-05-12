---
layout: post
title: Parcel+Vue开发八个盘子公众号踩坑记
comments: false
---

### 在Vue组件头部引入外部静态资源，如图片，在Parcel build之后，该静态资源竟然指向当前的组件实例
```html
<script>
    export default {
        name: "BgAvatar",
        props: {
            src: {
                default: require('../assets/image/default-avatar.png')
            },
            width: {
                default: `${50/37.5}rem`
            }
        },
        data(){
            return {
                avatarUrl: '',
                defaultAvatarUrl: require('../assets/image/default-avatar.png')
            };
        },
        computed: {
            style(){
                return {
                    width: this.width,
                    height: this.width,
                    borderRadius: this.width
                }
            }
        },
        methods: {
            onImgError(e){
                this.avatarUrl = this.defaultAvatarUrl;
            }
        },
        watch: {
            'src': function(val){
                if(val) {
                    this.avatarUrl = val;
                }else {
                    this.avatarUrl = this.defaultAvatarUrl;
                }
            }
        },
        mounted(){
            if(!this.src) {
                this.avatarUrl = this.defaultAvatarUrl;
            }else {
                this.avatarUrl = this.src;
            }
        }
    }
</script>

```
如上面代码，如果在script头部引入图片
```javascript
const avatar  require('..assets\image\...')
```
则在build之后，avatar再在其他地方引用avatar变量时，指向了当前的BgAvatar实例。不得已，改成了上面开始的写法。