"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var store_1 = require("./store");
// import store from '../store'
// import todo from '../store/modules/todo'
var debug = process.env.NODE_ENV !== 'production';
/* eslint-disable no-new */
new vue_1.default({
    el: '#app',
    store: store_1.store,
    render: function (h) { return h(App_vue_1.default); }
});
//# sourceMappingURL=main.js.map