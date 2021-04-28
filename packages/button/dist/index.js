"use strict";
exports.__esModule = true;
var index_vue_1 = require("./src/index.vue");
// 为组件添加注册方法
index_vue_1["default"].install = function (app) {
    app.component(index_vue_1["default"].name, index_vue_1["default"]);
};
exports["default"] = index_vue_1["default"];
