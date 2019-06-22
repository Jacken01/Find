# Find

> 一个为大学生提供寻找兼职和社团的移动设备平台。学生注册登录后即可查看兼职信息，查看心仪的社团信息并报名，学生亦可发布兼职，管理个人信息。社团登录后可管理社团信息，查看报名的学生信息。已线上部署。移动设备浏览器输入http://101.132.180.14:4000

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```  
社团详情-该组件共3个组件组成，中间的组件使用better-scroll进行活动展示页面  
-------
![CorDetail](https://github.com/Jacken01/Vue-Project-Find/blob/master/CorDetail.PNG)  
  
社团列表-该组件使用awesome-swiper插件，用户可以左右滑动查看社团列表  
---------------------------------------------------------------
![CorList](https://github.com/Jacken01/Vue-Project-Find/blob/master/CorList.PNG)  
  
兼职详情  
-------
![JobDetail](https://github.com/Jacken01/Vue-Project-Find/blob/master/JobDetail.PNG)  
  
学生登录-使用导航守卫，localStorage检验用户密码  
---------------------------------------------
![Student](https://github.com/Jacken01/Vue-Project-Find/blob/master/Student.PNG)  
  
已发布兼职列表  
-------
![Posted](https://github.com/Jacken01/Vue-Project-Find/blob/master/Posted.PNG) 
