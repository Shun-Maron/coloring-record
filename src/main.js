import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
Vue.config.productionTip = false;

// console.log('エラー検知フラグ');

const firebaseConfig = {
  apiKey: "AIzaSyCJv9rgteA7J72JsDnxmJmlg7BDMIPgWIg",
  authDomain: "color-record-test.firebaseapp.com",
  databaseURL: "https://color-record-test.firebaseio.com",
  projectId: "color-record-test",
  storageBucket: "color-record-test.appspot.com",
  messagingSenderId: "1047522148283",
  appId: "1:1047522148283:web:2861562b5a158cec2cce9e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
