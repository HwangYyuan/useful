# demo

> A Vue.js project

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#移动端rem
- 使用lib-flexible 
- npm i lib-flexible --save
- 在main.js中import 'lib-flexible/flexible.js'
- 配置vscode的px转换，下载cssrem，配置根元素的字体大小


#移动端日历
- 使用vue-hash-calendar
- npm i vue-hash-calendar --save
- 在main.js中
- // 在入口文件中（main.js），导入组件库
import vueHashCalendar from 'vue-hash-calendar'
- // 引入组件CSS样式
import 'vue-hash-calendar/lib/vue-hash-calendar.css'
- 附上github地址 https://github.com/TangSY/vue-hash-calendar

#移动端上拉加载更多，下拉刷新组件
- 使用mescroll.js
- npm install --save mescroll.js
- 在页面中 import MescrollVue from 'mescroll.js/mescroll.vue'
- 具体文档参考http://www.mescroll.com/api.html
 
#适合vue的ly-tree，具体参数配置查看element UI的el-trees配置
- 地址https://ext.dcloud.net.cn/plugin?id=1000


#匹配相同的项
```js
// 匹配相同的项
    fiterSame(arr) {
      var mp = {};
      var ret = [];
      arr.forEach((item) => {
        // return
        if (typeof mp[item.NACHN] === "number") {
          ret[mp[item.NACHN]].push(item);
        } else {
          mp[item.NACHN] = ret.length;
          ret.push([item]);
        }
      });
      // this.$nextTick(() => {
      //   this.mescroll.endBySize(ret.length, this.totalSize);
      //         // mescroll.endSuccess(_this.itemList.length);
      // });
      ret.map((v) => {
        var total = 0;
        v.map((vv) => {
          total += this.initNum(vv.ZSS) * 1;
          vv.total = this.toDecimal(total);
        });
        return {
          ...v,
        };
      });
     
      ret.sort(function(a,b){
        return b[b.length-1].total-a[a.length-1].total
      })
      return ret;
    },
    ```
