(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){},166:function(t,e,n){"use strict";var i=n(150);n.n(i).a},167:function(t,e,n){"use strict";var i=n(151);n.n(i).a},168:function(t,e,n){"use strict";var i=n(152);n.n(i).a},169:function(t,e,n){"use strict";var i=n(153);n.n(i).a},170:function(t,e,n){"use strict";var i=n(154);n.n(i).a},171:function(t,e,n){"use strict";n(53),n(14),n(24);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},o=(n(166),n(1)),a=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"b4bc67fc",null);a.options.__file="layout.vue";e.a=a.exports},173:function(t,e,n){"use strict";var i={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},o=(n(170),n(1)),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])},[],!1,null,"514e4048",null);a.options.__file="sider.vue";e.a=a.exports},175:function(t,e,n){"use strict";n(167);var i=n(1),o=Object(i.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"615a9710",null);o.options.__file="header.vue";e.a=o.exports},176:function(t,e,n){"use strict";n(169);var i=n(1),o=Object(i.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gulu-content"},[this._t("default")],2)},[],!1,null,"12d63e8d",null);o.options.__file="content.vue";e.a=o.exports},177:function(t,e,n){"use strict";n(168);var i=n(1),o=Object(i.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"119b045e",null);o.options.__file="footer.vue";e.a=o.exports},184:function(t,e,n){},211:function(t,e,n){"use strict";var i=n(184);n.n(i).a},238:function(t,e,n){"use strict";n.r(e);n(23),n(89);var i=n(171),o=n(175),a=n(177),s=n(176),r=n(173),u={components:{GLayout:i.a,GHeader:o.a,GFooter:a.a,GContent:s.a,GSider:r.a},data:function(){return{content:'\n        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n          <g-header style="height: 50px; background:lightskyblue;">\n            header\n          </g-header>\n          <g-layout>\n            <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">\n              sider\n            </g-sider>\n            <g-content style="height: 100px; background:deepskyblue;">\n              content\n            </g-content>\n          </g-layout>\n          <g-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </g-footer>\n        </g-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},l=(n(211),n(1)),c=Object(l.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),n("g-layout",[n("g-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[t._v("\n        sider\n      ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")])],1),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"5e7926a7",null);c.options.__file="layout-demo-2.vue";e.default=c.exports}}]);