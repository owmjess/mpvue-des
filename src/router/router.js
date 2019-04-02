module.exports = [
 
  {
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    name: 'index',
    config: {
      // 页面配置，即 page.json 的内容
      navigationBarTitleText: '我的快递',
      usingComponents: {
        //组件名和引用路径
        'vant-button': '/static/vant/button/index',
        'van-tab': '/static/vant/tab/index',
        'van-tabs': '/static/vant/tabs/index'
      }
    }
  },
  {
    path: 'pages/counter',
    config: {
      // 页面配置，即 page.json 的内容
      navigationBarTitleText: '我的主页'
    }
  }
  // {
  //   path: 'packageA/logs',
  //   subPackage: true,
  //   config: {
  //     // 页面配置，即 page.json 的内容
  //     navigationBarTitleText: '查看启动日志'
  //   }
  // }
]
