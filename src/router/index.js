import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//import xxx from  '@/components/xxx' 中的@表示src
// 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
import notFind from '@/components/notFind'

// import Demo from '@/components/demo-vuex'
// import Demo2 from '@/components/demo-vuex2'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    ,{
      path: '/hello1',
      name: 'Hello1',
      component: Hello1
    }
    ,{
      path: '/hello2',
      name: 'Hello2',
      component: Hello2
    }


    ,{
      path: '*',
      name: 'notFind',
      component: notFind
    }


    // ,{
    //   path: '/demo',
    //   name: 'demo',
    //   component: Demo
    // }
    // ,{
    //   path: '/demo2',
    //   name: 'demo2',
    //   component: Demo2
    // }
  ]
})
