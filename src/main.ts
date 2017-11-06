declare let process: any

import Vue from 'vue'
import App from './App.vue'
import sweetalert from 'sweetalert'
import { store } from './store'
import * as _ from 'lodash'
// import store from '../store'
// import todo from '../store/modules/todo'
const debug = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})