import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import PriceRecord from '@/components/price-record'
Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:resolve=>require(['@/components/HelloWorld'],resolve)
    },
    {
      path:'/priceRecord',
      name: 'priceRecord',
      component:resolve=>require(['@/components/price-record'],resolve)
    },
    {
      path:'/jump',
      name: 'jump',
      component:resolve=>require(['@/components/jump'],resolve)
    },
  ]
})
