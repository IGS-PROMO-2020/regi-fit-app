import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PouchDB from "pouchdb";
import pouchDBFind from 'pouchdb-find'
import "./boots/db"

Vue.config.productionTip = false
PouchDB.plugin(pouchDBFind)
//Vue.use(pouchDBFind)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
