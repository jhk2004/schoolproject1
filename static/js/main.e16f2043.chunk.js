(this["webpackJsonpprototype-shop"]=this["webpackJsonpprototype-shop"]||[]).push([[0],{153:function(t,e,i){},154:function(t,e,i){},459:function(t,e,i){"use strict";i.r(e);var c=i(2),s=i.n(c),r=i(23),o=i.n(r),a=(i(153),i(67)),n=i(68),p=i(70),l=i(69),d=(i(154),i(15)),h=i(3),j=i(0);function u(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("div",{className:"title",children:"Awesome Prototypes in Shop"}),Object(j.jsx)("div",{className:"subtitle",children:"Check out what other designers have created using ProtoPie\u2014download these examples to learn exactly how they made their interactions."}),Object(j.jsxs)("div",{className:"btn__area",children:[Object(j.jsx)("a",{href:"https://www.protopie.io",target:"_BLANK",rel:"noreferrer",children:Object(j.jsx)("button",{children:"Try ProtoPie Yourself"})}),Object(j.jsx)(d.b,{to:"/shop",children:Object(j.jsx)("button",{children:"\ucfe8\ucfe8\ub85c \uc774\ub3d9"})})]})]})})})}function m(){return Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"\xa9 2021 Mark Lee. All rights reserved."})})}var b=s.a.createContext();function O(){return Object(c.useContext)(b).prototypes}function x(){var t=Object(c.useContext)(b);return{addToOrder:t.addToOrder,remove:t.remove,removeAll:t.removeAll}}function f(){var t=O(),e=x().addToOrder;return Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"prototypes",children:t.map((function(t){var i=t.id,c=t.thumbnail,s=t.title,r=t.price,o=t.desc,a=t.pieUrl;return Object(j.jsxs)("div",{className:"prototype",children:[Object(j.jsx)("a",{href:a,target:"_BLANK",rel:"noreferrer",children:Object(j.jsx)("div",{style:{padding:"25px 0 33px 0"},children:Object(j.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,className:"prototype__artwork prototype__edit",src:c})})}),Object(j.jsxs)("div",{className:"prototype__body",children:[Object(j.jsxs)("div",{className:"prototype__title",children:[Object(j.jsx)("div",{className:"btn btn--primary float--right",onClick:function(){e(i)},children:Object(j.jsx)("i",{className:"icon icon--plus"})}),s]}),Object(j.jsxs)("p",{className:"prototype__price",children:["$ ",r]}),Object(j.jsxs)("p",{className:"prototype__desc",children:[" ",o]})]})]},i)}))})})}function v(){var t=Object(c.useContext)(b).orders,e=O(),i=x(),s=i.remove,r=i.removeAll,o=Object(c.useMemo)((function(){return t.map((function(t){var i=t.id,c=t.quantity;return e.find((function(t){return t.id===i})).price*c})).reduce((function(t,e){return t+e}),0)}),[t,e]);return 0===t.length?Object(j.jsx)("aside",{children:Object(j.jsxs)("div",{className:"empty",children:[Object(j.jsx)("div",{className:"title",children:"\ucd94\uac00\ub41c \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. "}),Object(j.jsx)("div",{className:"subtitle",children:"\uc8fc\ubb38\uc744 \ucd94\uac00\ud558\ub824\uba74 + \ud074\ub9ad"})]})}):Object(j.jsx)("aside",{children:Object(j.jsxs)("div",{className:"order",children:[Object(j.jsx)("div",{className:"body",children:t.map((function(t){var i=t.id,c=e.find((function(t){return t.id===i}));return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"img",children:Object(j.jsx)("video",{src:c.thumbnail})}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("p",{className:"title",children:[c.title," x ",t.quantity]})}),Object(j.jsxs)("div",{className:"action",children:[Object(j.jsxs)("p",{className:"price",children:["$ ",c.price*t.quantity]}),Object(j.jsx)("button",{className:"btn btn--link",onClick:function(){s(i)},children:Object(j.jsx)("i",{className:"icon icon--cross"})})]})]},i)}))}),Object(j.jsxs)("div",{className:"total",children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"content",children:"Total"}),Object(j.jsx)("div",{className:"action",children:Object(j.jsxs)("div",{className:"price",children:["$ ",o]})}),Object(j.jsx)("button",{className:"btn btn--link",onClick:r,children:Object(j.jsx)("i",{className:"icon icon--delete"})})]}),Object(j.jsxs)("button",{className:"btn btn--secondary",style:{width:"100%",marginTop:10},children:[" ","Chekout"," "]})]})]})})}var y=i(40),g=i(18),N=function(t){var e=t.children,i=Object(c.useState)([{id:"pp-01",title:"Kids-story",artist:"Thomas Buisson",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",price:10,pieUrl:"https://cloud.protopie.io/p/8a6461ad85"},{id:"pp-02",title:"mockyapp",artist:"Ahmed Amr",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",price:20,pieUrl:"https://cloud.protopie.io/p/27631ac9d5"},{id:"pp-03",title:"macOS Folder Concept",artist:"Dominik Kandrav\xfd",desc:"Folder concept prototype by Dominik Kandrav\xfd.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",price:30,pieUrl:"https://cloud.protopie.io/p/acde5ccdf9"},{id:"pp-04",title:"Translator",artist:"Tony Kim",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",price:40,pieUrl:"https://cloud.protopie.io/p/b91edba11d"},{id:"pp-05",title:"In-car voice control",artist:"Tony Kim",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/In-car_voice_control.mp4",price:50,pieUrl:"https://cloud.protopie.io/p/6ec7e70d1a"},{id:"pp-06",title:"The Adventures of Proto",artist:"Richard Oldfield",desc:"Made exclusively for Protopie Playoff 2021\n                  Shout up if you get stuck!\n                  For the full experience. View in the Protopie App.\n                  #PieDay #PlayOff #ProtoPie",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/The_Adventures_of_Proto.mp4",price:60,pieUrl:"https://cloud.protopie.io/p/95ee13709f"},{id:"pp-07",title:"Sunglasses shop app",artist:"Mustafa Alabdullah",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/sunglasses_shop_app.mp4",price:70,pieUrl:"https://cloud.protopie.io/p/6f336cac8c"},{id:"pp-08",title:"Alwritey\u2014Minimalist Text Editor",artist:"Fredo Tan",desc:"This minimalist text editor prototype was made with ProtoPie by Fredo Tan.\n                  ---\n                  Inspired by Writty, a simple writing app by Carlos Yllobre. Try out Writty at https://writtyapp.com.\n                  ---\n                  ProtoPie is an interactive prototyping tool for all digital products.\n                  ---\n                  Learn more about ProtoPie at https://protopie.io.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/minimalist-text-editor.mp4",price:80,pieUrl:"https://cloud.protopie.io/p/946f88f8d3"},{id:"pp-09",title:"Voice search for TV",artist:"Tony Kim",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/60ee64cda0"},{id:"pp-10",title:"Finance App Visual Interaction 2.0",artist:"Arpit Agrawal",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch"},{id:"pp-11",title:"Whack-a-mole",artist:"Changmo Kang",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/ab796f897e"},{id:"pp-12",title:"Voice Note",artist:"Haerin Song",desc:"Made by Haerin Song\n                  (Soda Design)",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/7a0d6567d2"}]),s=Object(g.a)(i,1)[0],r=Object(c.useState)([]),o=Object(g.a)(r,2),a=o[0],n=o[1],p=Object(c.useCallback)((function(t){n((function(e){return void 0===e.find((function(e){return e.id===t}))?[].concat(Object(y.a)(e),[{id:t,quantity:1}]):e.map((function(e){return e.id===t?{id:t,quantity:e.quantity+1}:e}))}))}),[]),l=Object(c.useCallback)((function(t){n((function(e){return e.filter((function(e){return e.id!==t}))}))}),[]),d=Object(c.useCallback)((function(t){n([])}),[]);return Object(j.jsx)(b.Provider,{value:{prototypes:s,orders:a,addToOrder:p,remove:l,removeAll:d},children:e})},w=function(t){Object(p.a)(i,t);var e=Object(l.a)(i);function i(){return Object(a.a)(this,i),e.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return Object(j.jsxs)(N,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(f,{}),Object(j.jsx)(v,{}),Object(j.jsx)(m,{})]})]})}}]),i}(c.Component),_=w,P=i.p+"static/media/shopping-cart.96c73cb4.png",T=s.a.createContext();function C(){return Object(c.useContext)(T).shopOrders}function k(){var t=C(),e=Object(c.useMemo)((function(){return t.map((function(t){return 1*t.quantity})).reduce((function(t,e){return t+e}),0)}),[t]);return 0===t.length?Object(j.jsx)("div",{}):Object(j.jsx)("div",{className:"cartcount",children:e})}function S(){return Object(c.useContext)(T).items}function A(){var t=C();S(),Object(c.useMemo)((function(){return t.map((function(t){return 1*t.quantity}))}),[t]);return Object(j.jsxs)("header",{className:"shopheader",children:[Object(j.jsxs)(d.b,{to:{pathname:"/shopcart"},children:[Object(j.jsx)("img",{src:P,className:"cart"}),Object(j.jsx)(k,{})]}),Object(j.jsx)("div",{children:Object(j.jsx)(d.b,{to:"/shop",children:Object(j.jsx)("h1",{children:"KulKul"})})}),Object(j.jsx)("div",{className:"shopToHome",children:Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("button",{children:"\ud648"})})})]})}var F=i.p+"static/media/star.d0cbd94e.png";function z(){var t=S(),e={addShopCart:Object(c.useContext)(T).addShopCart}.addShopCart;return Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"Shopitems",children:t.map((function(t){var i=t.id,c=t.price,s=t.stars,r=t.img;return Object(j.jsxs)("div",{className:"Shopitem",children:[Object(j.jsxs)("div",{className:"shopshop",children:[Object(j.jsx)("div",{className:"ShopitemImg",children:Object(j.jsx)("img",{src:r})}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h1",{className:"infotitle",children:i}),Object(j.jsxs)("h2",{className:"infoprice",children:[c,"\uc6d0"]}),Object(j.jsx)("div",{children:Object(y.a)(Array(s)).map((function(t){return Object(j.jsx)("img",{src:F,className:"star"})}))})]})]}),Object(j.jsx)("button",{className:"takeCart",onClick:function(){e(i)},children:"\uc7a5\ubc14\uad6c\ub2c8\uc5d0\ub2f4\uae30"})]},i)}))})})}var q=function(t){var e=t.children,i=Object(c.useState)([{id:"\uc7a0\uc774 \uc194\uc194 \uc218\uba74 \uc774\ubd88",price:22222,stars:5,img:"http://www.nubizio.co.kr/shopimages/nubizio777/073002000014.jpg?1615378840"},{id:"\ud551\ud06c\ud551\ud06c \uacf5\uc8fc\ub2d8 \uce68\ub300",price:22222,stars:3,img:"https://img.marieclairekorea.com/2021/03/mck_604de11c02bac.jpg"},{id:"\ub9c8\uc57d \ubca0\uac1c",price:333333,stars:4,img:"https://contents.sixshop.com/thumbnails/uploadedFiles/13907/product/image_1516206582255_750.jpg"},{id:"\ubaa8\ub358 \uce68\ub300",price:4444444,stars:1,img:"http://m.monohouse.co.kr/web/product/big/201703/540_shop1_904697.jpg"}]),s=Object(g.a)(i,1)[0],r=Object(c.useState)([]),o=Object(g.a)(r,2),a=o[0],n=o[1],p=Object(c.useCallback)((function(t){n((function(e){return void 0===e.find((function(e){return e.id===t}))?[].concat(Object(y.a)(e),[{id:t,quantity:1}]):e.map((function(e){return e.id===t?{id:t,quantity:e.quantity+1}:e}))}))}),[]);return Object(j.jsx)(T.Provider,{value:{items:s,shopOrders:a,addShopCart:p},children:e})};i(156);function U(){var t=C(),e=S(),i=Object(c.useMemo)((function(){return t.map((function(t){var i=t.id,c=t.quantity;return e.find((function(t){return t.id===i})).price*c})).reduce((function(t,e){return t+e}),0)}),[t,e]);return 0===t.length?Object(j.jsx)("div",{className:"tt",children:"\uc7a5\ubc14\uad6c\ub2c8\uac00 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4."}):Object(j.jsxs)("aside",{className:"cc",children:[Object(j.jsx)("div",{children:t.map((function(t){var i=t.id,c=t.quantity,s=e.find((function(t){return t.id===i}));return Object(j.jsxs)("div",{className:"Shopitem",children:[Object(j.jsxs)("div",{className:"shopshop",children:[Object(j.jsx)("div",{className:"ShopitemImag",children:Object(j.jsx)("img",{src:s.img,className:"cartlistimg"})}),Object(j.jsx)("h1",{className:"infotitle",children:s.id})]}),Object(j.jsxs)("div",{className:"cccccccccc",children:[Object(j.jsxs)("h2",{className:"cartlistprice",children:[s.price,"\uc6d0"]}),Object(j.jsxs)("h2",{className:"cartlistprice",children:["X ",c]})]})]},i)}))}),Object(j.jsxs)("div",{className:"tt",children:["\ucd1d \uac00\uaca9 ",i,"\uc6d0"]}),Object(j.jsx)(d.b,{to:"/complete",children:Object(j.jsx)("button",{children:"\uad6c\ub9e4\ud558\uae30"})})]})}var K=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(A,{}),Object(j.jsx)("div",{className:"cc",children:Object(j.jsx)(U,{})})]})},M=function(){var t=Object(h.e)().pathname;return Object(j.jsx)(q,{children:"/shop"===t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(A,{}),Object(j.jsx)("div",{className:"cc",children:Object(j.jsx)(z,{})})]}):Object(j.jsx)(K,{})})},I=function(){Object(h.e)().pathname;return Object(j.jsxs)(q,{children:[Object(j.jsx)(A,{}),Object(j.jsx)("div",{className:"cc",children:Object(j.jsx)("h1",{className:"tt",children:"\uad6c\ub9e4\ud574\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4."})})]})},V=function(t){Object(p.a)(i,t);var e=Object(l.a)(i);function i(){return Object(a.a)(this,i),e.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",element:Object(j.jsx)(_,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/shop",element:Object(j.jsx)(M,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/shopcart",element:Object(j.jsx)(M,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/complete",element:Object(j.jsx)(I,{})})]})})}}]),i}(c.Component),L=V,B=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,460)).then((function(e){var i=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,o=e.getTTFB;i(t),c(t),s(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),B()}},[[459,1,2]]]);
//# sourceMappingURL=main.e16f2043.chunk.js.map