# netease-clound-webapps

> 这是一个用VUEJS写高仿网易云音乐的webapp，只实现了APP的核心功能，这个项目会长期进行更新。

[在线地址](http://musicapi.duapp.com/)

### 技术栈
- 传说中的VUE全家桶(vue vue-router vuex)
- axios
- Muse-UI(一个基于Vue2.x的material design 风格UI框架)



## 运行截图
![首页](https://github.com/javaSwing/NeteaseCloudWebApp/raw/master/screenshots/1.png)
![详情](https://github.com/javaSwing/NeteaseCloudWebApp/raw/master/screenshots/2.png)
![动图](https://github.com/javaSwing/NeteaseCloudWebApp/raw/master/screenshots/3.gif)
![动图](https://github.com/javaSwing/NeteaseCloudWebApp/raw/master/screenshots/4.gif)

## 安装运行（Build Setup）

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## TODO

- [ ]  实现音乐播放器的播放模式调整
- [ ]  搜索模块

## 项目目录
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- screenshots                      // 项目截图
|-- src                              // 源码目录
|   |-- components                   // 组件
|       |-- common                   // 公共组件
|			|-- buyCart.js           // 购物车组件
|			|-- loading.js           // 页面初始化加载数据的动画组件
|			|-- mixin.js             // 组件混合(包括：指令-下拉加载更多，处理图片地址)
|			|-- ratingStar.js        // 评论的五颗星组件
|			|-- shoplist.js          // msite和shop页面的餐馆列表公共组件
|       |-- footer                   // 底部公共组件
|       |-- header                 	 // 头部公共组件
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|       |-- fetch.js                 // 获取数据
|       |-- mUtils.js                // 常用的js方法
|       |-- rem.js                   // px转换rem
|   |-- images                       // 公共图片
|   |-- pages                        // 页面组件
|       |-- city                     // 当前城市页
|		|-- confirmOrder             // 确认订单页
|		  |--children
|			|--invoice			     //	选择发票页
|			|--remark			     //	订单备注页
|			|--payment			     //	付款页
|			|--userValidation		 //	用户验证页
|			|--chooseAddress         //	选择地址页
|		      |--children
|				|--addAddress        //	添加地址页
|				  |--children
|					|--searchAddress // 搜索地址页
|       |-- find                     // 发现页
|       |-- forget                   // 忘记密码，修改密码页
|       |-- home                     // 首页
|       |-- login                    // 登陆注册页
|       |-- msite                    // 商铺列表页
|       |-- order                    // 订单列表页
|			|--children
|				|--orderDetail		 // 订单详情页
|       |-- profile                  // 个人中心
|			|--children
|				|--balance			 // 我的余额
|				|--benefit			 // 我的优惠
|				|--info				 // 帐户信息
|				|--points			 // 我的积分
|				|--service			 // 服务中心
|       |-- search                   // 搜索页
|       |-- shop                     // 商铺筛选页
|			|-- children             
|			  	|-- foodDetail       // 商铺信息页     
|			  	|-- shopDetail       // 单个商铺信息页
|					|-- children             
|				  		|-- shopSafe // 商铺认证信息页     
|       |-- vipcard                  // vip办理页
|
|   |-- plugins                      // 引用的插件
|
|   |-- router                       // 路由配置
|
|   |-- service                      // 数据交互统一调配
|		|-- template                 // 开发阶段的临时数据
|		|-- getData.js               // 获取数据的统一调配文件，对接口进行统一管理
|
|   |-- store                        // vuex的状态管理
|       |-- modules                  // store模块
|       |-- action.js                // 配置actions
|       |-- getters.js               // 配置getters
|       |-- index.js                 // 引用vuex，创建store
|       |-- mutation-types.js        // 定义常量muations名
|       |-- mutations.js             // 配置mutations
|
|   |-- style                        // 各种样式文件
|       |-- common.scss              // 公共样式文件
|       |-- mixin.scss               // 样式配置文件
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明

## 鸣谢

此网站提供的API: [https://api.imjad.cn/cloudmusic/](https://api.imjad.cn/cloudmusic/) ,此接口的说明请到这里[查看](https://api.imjad.cn/cloudmusic/index.html)

歌单列表部分为自己提供，在别一个项目中[MusicApi](https://github.com/javaSwing/MusicAPI)


## 参考
Vue-cnodejs

vue-zhihu-daily

vue-mobile-qq

vue-shopping
