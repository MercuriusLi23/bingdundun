// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n.bingdundun * {\n box-sizing: border-box;\n margin: 0;\n padding: 0;\n}\n\n.bingdundun *::before,\n.bingdundun *::after {\n box-sizing: border-box;\n}\n\n.bingdundun {\n position: relative;\n min-height:50vh;\n}\n\n.fang {\n\n background-color: #393939;\n border-radius: 52% 48% 51% 49% / 27% 30% 70% 73%;\n width: 20px;\n height: 15px;\n position: absolute;\n left: 50%;\n top: 200px;\n margin-left: -10px;\n z-index: -1;\n}\n\n.wai {\n background-color: #393939;\n width: 50px;\n height: 35px;\n position: absolute;\n left: 50%;\n margin-left: -25px;\n top: 218px;\n border-radius: 50% 48% 60% / 48% 45%;\n z-index: -3;\n}\n\n.li {\n\n width: 36px;\n height: 14px;\n left: 50%;\n position: absolute;\n margin-left: -18px;\n top: 17px;\n border-radius: 30%;\n background: #8c3736\n}\n\n.mouth .hudu {\n\n width: 60px;\n height: 60px;\n position: absolute;\n left: 50%;\n margin-left: -30px;\n top: 168px;\n border-radius: 50%;\n background: white;\n z-index: -2;\n}\n\n.eye {\n\n height: 66px;\n width: 160px;\n position: absolute;\n left: 50%;\n margin-left: -80px;\n top: 154px;\n\n\n}\n\n.eye .eyeLeft {\n width: 48px;\n height: 66px;\n position: absolute;\n left: 50%;\n margin-left: -16px;\n border-radius: 58% 42% 64% 36% / 72% 25% 75% 28%;\n display: inline-block;\n background: #39383e;\n transform: translateX(-100%) rotateZ(-164deg);\n}\n\n.eye .eyeRight {\n width: 48px;\n height: 66px;\n position: absolute;\n left: 50%;\n margin-left: 16px;\n display: inline-block;\n border-radius: 58% 42% 64% 36% / 72% 25% 75% 28%;\n transform: rotateZ(-236deg);\n background: #39383e;\n}\n\n.yuanLeft {\n border: 3px solid white;\n width: 23px;\n height: 23px;\n position: absolute;\n border-radius: 50%;\n top: 26px;\n margin-left: 6px;\n\n}\n\n.yuanRight {\n border: 3px solid white;\n width: 23px;\n height: 23px;\n position: absolute;\n border-radius: 50%;\n top: 28px;\n margin-left: 14px;\n\n}\n\n.dianLeft {\n width: 6px;\n height: 6px;\n position: absolute;\n background: white;\n border-radius: 50%;\n top: 8px;\n margin-left: 4px;\n\n}\n\n.dianRight {\n width: 6px;\n height: 6px;\n position: absolute;\n background: white;\n border-radius: 50%;\n top: 8px;\n margin-left: 5px;\n}\n\n.face {\n border: 1px solid red;\n position: absolute;\n left: 50%;\n top: 130px;\n margin-left: -85px;\n width: 170px;\n height: 140px;\n border-radius: 98px 124px 82px 84px/104px 93px 66px 70px;\n background-color: #fff;\n z-index: -4;\n box-shadow: rgb(102, 201, 253) 0 0 0 3px, rgb(173, 35, 96) 0 0 0 5px, rgb(81, 122, 183) 0 0 0 7px, rgb(250, 198, 70) 0 0 0 9px, rgb(128, 201, 111) 0 0 0 12px;\n}\n\n.body {\n width: 214px;\n height: 252px;\n position: absolute;\n left: 50%;\n margin-left: -107px;\n top: 98px;\n border-radius: 91px 105px 74px 84px/128px 119px 129px 114px;\n background-color: #fff;\n border: 5px solid #393939;\n z-index: -5;\n}\n\n.earLeft {\n width: 44px;\n height: 68px;\n position: absolute;\n left: 50%;\n margin-left: -90px;\n top: 100px;\n background-color: #393939;\n border-radius: 7px 52px 74px 84px/33px 68px 129px 114px;\n transform: rotate(180deg);\n z-index: -6;\n}\n\n.earRight {\n width: 44px;\n height: 68px;\n position: absolute;\n left: 50%;\n margin-left: 45px;\n top: 100px;\n background-color: #393939;\n border-radius: 7px 52px 74px 84px/33px 68px 129px 114px;\n transform: rotate(180deg);\n z-index: -6;\n}\n\n.footLeft {\n width: 44px;\n height: 64px;\n position: absolute;\n background-color: #393939;\n left: 50%;\n margin-left: -58px;\n top: 334px;\n border-radius: 32% 67% 17% 32% / 1% 24% 37% 28%\n}\n\n.footRight {\n\n width: 44px;\n height: 64px;\n position: absolute;\n background-color: #393939;\n margin-left: 20px;\n left: 50%;\n top: 334px;\n transform: rotateY(180deg);\n border-radius: 32% 67% 17% 32% / 1% 24% 37% 28%;\n\n}\n\n.jianLeft {\n\n width: 46px;\n height: 16px;\n position: absolute;\n background-color: #393939;\n margin-left: 13px;\n left: 50%;\n top: 382px;\n border-radius: 71% 29% 30% 40% / 13% 60% 20% 90%;\n transform: rotate(180deg);\n transform: rotateY(180deg);\n}\n\n.jianRight {\n\n width: 46px;\n height: 16px;\n position: absolute;\n background-color: #393939;\n margin-left: -52px;\n left: 50%;\n top: 382px;\n border-radius: 71% 29% 30% 40% / 13% 60% 20% 90%;\n}\n\n.handLeft {\n width: 40px;\n height: 76px;\n position: absolute;\n background-color: #393939;\n left: 50%;\n margin-left: -130px;\n top: 240px;\n border-radius: 49% 51% 42% 58% / 17% 83% 17% 83%;\n transform: rotate(45deg);\n z-index: -8;\n}\n\n.handRight {\n\n width: 40px;\n height: 76px;\n position: absolute;\n background-color: #393939;\n left: 50%;\n top: 194px;\n margin-left: 96px;\n border-radius: 49% 51% 42% 58% / 17% 83% 17% 83%;\n transform: rotateZ(60deg);\n z-index: -8;\n}\n\n.xin {\n\n width: 36px;\n height: 36px;\n position: absolute;\n border-radius: 50%;\n margin-left: -8px;\n top: -8px;\n background-color: #393939;\n\n}\n\n.xin::after {\n content: '\u2665';\n font-size: 32px;\n position: absolute;\n transform: rotateZ(-65deg);\n top: -8px;\n left: 4px;\n color: rgb(172, 3, 3);\n\n}\n\n\n\n.wuhuan {\n width: 60px;\n height: 40px;\n position: absolute;\n left: 50%;\n margin-left: -30px;\n top: 186px;\n display: flex;\n flex-wrap: wrap;\n justify-content: center;\n}\n\n.hong {\n border: 2px solid red;\n width: 20px;\n height: 20px;\n border-radius: 50%;\n z-index: 1;\n position: absolute;\n left: 35px;\n}\n\n.hei {\n border: 2px solid black;\n width: 20px;\n height: 20px;\n border-radius: 50%;\n}\n\n.lan {\n border: 2px solid blue;\n width: 20px;\n height: 20px;\n border-radius: 50%;\n z-index: 1;\n left: 6px;\n position: absolute;\n\n}\n\n.huang {\n border: 2px solid yellow;\n width: 20px;\n height: 20px;\n border-radius: 50%;\n position: absolute;\n top: 10px;\n left: 15px;\n}\n\n.lv {\n border: 2px solid green;\n width: 20px;\n height: 20px;\n border-radius: 50%;\n position: absolute;\n top: 10px;\n left: 30px;\n} \n ";
exports.default = string; //导出该文件的内容
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//导入css.js文件  （模块化）
var n = 1;
demo1.innerText = _css2.default.substr(0, n); //从0到n展示string的子字符串
demo2.innerHTML = _css2.default.substr(0, n);

var time = 80;

var run = function run() {
    n += 1;
    if (n > _css2.default.length) {
        window.clearInterval(id);
        return;
    }
    demo1.innerText = _css2.default.substr(0, n);
    demo2.innerHTML = _css2.default.substr(0, n);
    demo1.scrollTop = demo1.scrollHeight; //设置滚动条随内容输出自行滚动，一直拉到最下面
};
var play = function play() {
    return setInterval(run, time);
};

var pause = function pause() {
    window.clearInterval(id);
};

var id = play();

btnPause.onclick = function () {
    pause();
};

btnPlay.onclick = function () {
    id = play();
};

btnSlow.onclick = function () {
    pause();
    time = 300;
    id = play();
};
btnNormal.onclick = function () {
    pause();
    time = 80;
    id = play();
};

btnFast.onclick = function () {
    pause();
    time = 0;
    id = play();
};
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.df341526.map