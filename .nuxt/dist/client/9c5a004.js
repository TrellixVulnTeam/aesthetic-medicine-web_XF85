(window.webpackJsonp=window.webpackJsonp||[]).push([[15,10],{398:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("19b81704",content,!0,{sourceMap:!1})},399:function(t,e,n){"use strict";n.r(e);var r={props:{title:String,titleEn:String}},o=(n(400),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-title"},[n("h1",{staticClass:"zh"},[t._v(t._s(t.title))]),t._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:t.titleEn,expression:"titleEn"}],staticClass:"en"},[t._v(t._s(t.titleEn))])])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){"use strict";n(398)},401:function(t,e,n){var r=n(22),o=n(45),c=n(55),l=n(56),d=r(!1),m=o(c),h=o(l);d.push([t.i,'body,html{margin:0;padding:0;width:100vw;color:#fff;position:relative;overflow-x:hidden;font-family:"Noto Sans TC",Roboto,Arial,sans-serif;font-size:var(--FontSize)}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span,.vdatetime-popup__header{background:#832a57!important}.vdatetime-month-picker__item--selected,.vdatetime-popup__actions__button,.vdatetime-year-picker__item--selected{color:#832a57!important}.el-breadcrumb__inner.is-link:hover,.el-breadcrumb__inner a:hover{color:#832a57!important;cursor:pointer}.el-pagination{text-align:center;margin-top:5%}.el-pagination .el-pager li.active{color:#842b57;cursor:default}.el-pagination .el-pager li:hover{color:#842b57}.el-breadcrumb{margin-bottom:5%}@media(max-width:767px){.el-breadcrumb{margin-bottom:10%}}.el-breadcrumb__item{margin-bottom:1.5%}.el-breadcrumb__inner.is-link,.el-breadcrumb__inner a{font-weight:500!important}.el-pagination button:hover{color:#842b57!important}.page-container{width:100%;max-width:1280px;padding:0 5% 5%;margin:150px auto 0;color:#333}.page-container .index-title{margin-bottom:3%}@media(max-width:1024px){.page-container .index-title{margin-bottom:5%}}@media(max-width:1280px){.page-container{padding:0 10% 10%}}@media(max-width:767px){.page-container{margin-top:120px}}.btn{border:none;background-color:#832a57;padding:.5rem 2rem;border-radius:2px;color:#fff;font-size:105%;font-weight:200;letter-spacing:1px;cursor:pointer}.btn:hover{background-color:#602d4b}*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt,.content{width:100%;height:100%}a{color:#602d4b;text-decoration:none}input[type=checkbox]{display:none}input[type=checkbox]+span{display:inline-block;padding-left:30px;line-height:20px;background:url('+m+") no-repeat 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;letter-spacing:1px}input[type=checkbox]:checked+span{background:url("+h+") no-repeat 0 0}.service-page.article-container img:first-child{width:100%}.article-container{color:#7d7d7d;margin-bottom:5%}.article-container b{font-weight:500}.article-container iframe{width:100%;height:40vw;margin-bottom:2.5%}.article-container .w-30{width:30%}.article-container .w-50{width:49.5%}.article-container ol{padding-left:3%}.article-container h1{color:#832a57;font-size:150%;font-weight:600;margin:5% 0 3%}.article-container h2{color:#832a57;font-size:140%;font-weight:600;margin:4% 0 2.5%}.article-container h3{color:#333;font-size:130%;font-weight:400;margin:1% 0}.article-container h4{color:#832a57;font-size:120%;font-weight:400;margin:1% 0}.article-container h5{font-size:110%;font-weight:400;margin:1% 0}.article-container li,.article-container p,.article-container span{font-size:90%;letter-spacing:1px;font-weight:300}.article-container li.hasColor,.article-container p.hasColor,.article-container span.hasColor{color:#832a57;font-size:100%;font-weight:400}.article-container p{margin-bottom:2%}.article-container img{display:block;margin:5% auto 2%;width:70%}@media screen and (max-width:992px){.article-container img{width:100%;margin-bottom:5%}}.article-container .img-block{display:flex;margin:5% 0 2%}.article-container .img-block .img-block-item{flex:1;margin-right:1%}.article-container .img-block .img-block-item:last-child{margin-right:0}.article-container .img-block .img-block-item img{width:100%}.index-container .index-title,.page-container .index-title{text-align:center;margin-bottom:2.5%}@media screen and (max-width:992px){.index-container .index-title,.page-container .index-title{margin-bottom:5%}}.index-container .index-title .en,.index-container .index-title .zh,.page-container .index-title .en,.page-container .index-title .zh{display:inline-block;letter-spacing:1px;font-size:150%}.index-container .index-title .zh,.page-container .index-title .zh{font-weight:500;color:#665c60;margin-right:15px;line-height:80%}@media(max-width:767px){.index-container .index-title .zh,.page-container .index-title .zh{padding-right:10px;margin-right:10px}}.index-container .index-title .en,.page-container .index-title .en{font-weight:200;color:#832a57;border-left:1px solid #832a57;padding-left:15px;padding-bottom:2.5px;line-height:90%}",""]),t.exports=d},726:function(t,e,n){"use strict";n.r(e);var r={components:{Title:n(399).default},asyncData:function(t){return{id:t.params.id}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("el-breadcrumb",[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首頁")]),t._v(" "),n("el-breadcrumb-item",[t._v("關於美仕媞")]),t._v(" "),n("el-breadcrumb-item",{attrs:{to:{path:"/maxBeauty/news/page"}}},[t._v("醫師專欄")]),t._v(" "),n("el-breadcrumb-item",[t._v("標題")])],1),t._v(" "),n("div",{staticClass:"article-container"},[n("h1",[t._v(t._s(t.id)+"【張東美醫師】想瘦哪就瘦哪")]),t._v(" "),t._m(0),n("p",{staticClass:"ql-align-justify"},[t._v("維持曼妙身材，是女人一生課題。愛美是女人的天性，肥胖是女人的天敵。減肥(瘦身)是採用人為手段故意降低體重，特別是減少體內的脂肪。每個人減肥的原因各自不同。除了積極抗制飲食和運動減肥外，市面上還有各種幫助減肥的方式，包括侵入性的手術抽脂和非侵入性的各種物理性化學性溶脂方式。")]),n("h2",{staticClass:"ql-align-justify"},[t._v("打造完美S曲線")]),n("p",{staticClass:"ql-align-justify"},[t._v("速塑S美人療程是利用藥物特性，將藥物注射進皮下脂肪層，直接破壞脂肪細胞，並使之乳糜化(變得像液體一樣)，於是更容易被體內巨噬細胞帶走吸收，再藉由淋巴管輸送至肝臟，分解為二氧化碳雨水，再排出體外。如此一來，便能達到消脂效果。無論是全身性的脂肪堆積與修飾身型，都是一種方便安全的治療選擇。這類藥物最初的用途是治療肝炎、脂肪肝，由於具備破壞脂肪細胞的效果，運用在醫美領域，確實可以達到局部消脂、雕塑身體線條的功效。")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://www.max-beauty.com.tw/wp-content/uploads/2018/03/shutterstock_149111510_OK.jpg"}})])}],!1,null,null,null);e.default=component.exports}}]);