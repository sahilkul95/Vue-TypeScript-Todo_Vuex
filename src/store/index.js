"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var todos_1 = require("./todos");
vue_1.default.use(vuex_1.default);
exports.store = new vuex_1.default.Store({
    state: todos_1.state,
    getters: todos_1.getters,
    mutations: todos_1.mutations
});
//# sourceMappingURL=index.js.map