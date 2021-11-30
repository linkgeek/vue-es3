import Vue from 'vue'
import Router from 'vue-router'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import Home from '../views/Home'
import VideoPage from '../views/VideoPlayer'
import Search from '../views/Search'
import Upload from '../views/Upload'
import My from '../views/My'
import infiniteScroll from 'vue-infinite-scroll'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview'
Vue.use(VueAxios, axios)
Vue.use(Router)
Vue.use(iView)
Vue.use(infiniteScroll)
Vue.use(VueVideoPlayer)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/videopage',
      name: 'VideoPage',
      component: VideoPage
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
