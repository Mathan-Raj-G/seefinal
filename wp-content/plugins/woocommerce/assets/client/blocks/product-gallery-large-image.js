(()=>{var e,t={4933:(e,t,o)=>{"use strict";o.r(t);const r=window.wp.blocks,l=window.wc.wcSettings;var a,i,s,n,c,d,p,m,u,g;const v=(0,l.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),w=v.pluginUrl+"assets/images/",k=(v.pluginUrl,v.buildPhase),b=(null===(a=l.STORE_PAGES.shop)||void 0===a||a.permalink,null===(i=l.STORE_PAGES.checkout)||void 0===i||i.id,null===(s=l.STORE_PAGES.checkout)||void 0===s||s.permalink,null===(n=l.STORE_PAGES.privacy)||void 0===n||n.permalink,null===(c=l.STORE_PAGES.privacy)||void 0===c||c.title,null===(d=l.STORE_PAGES.terms)||void 0===d||d.permalink,null===(p=l.STORE_PAGES.terms)||void 0===p||p.title,null===(m=l.STORE_PAGES.cart)||void 0===m||m.id,null===(u=l.STORE_PAGES.cart)||void 0===u||u.permalink,null!==(g=l.STORE_PAGES.myaccount)&&void 0!==g&&g.permalink?l.STORE_PAGES.myaccount.permalink:(0,l.getSetting)("wpLoginUrl","/wp-login.php"),(0,l.getSetting)("localPickupEnabled",!1),(0,l.getSetting)("countries",{})),y=(0,l.getSetting)("countryData",{}),S=(Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,b[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,b[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).map((e=>[e,y[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],additional:[]});(0,l.getSetting)("addressFieldsLocations",S).address,(0,l.getSetting)("addressFieldsLocations",S).contact,(0,l.getSetting)("addressFieldsLocations",S).additional;var f=o(9196);const E=window.wp.blockEditor;var O=o(9307),h=o(3849),P=o.n(h);const _=JSON.parse('{"name":"woocommerce/product-gallery-large-image-next-previous"}'),C=JSON.parse('{"name":"woocommerce/product-gallery-pager"}');o(926);const j=(0,O.memo)((()=>(0,f.createElement)("div",{className:"wc-block-product-gallery-large-image wc-block-editor-product-gallery-large-image"},(0,f.createElement)("img",{src:`${w}block-placeholders/product-image-gallery.svg`,alt:"Placeholder"})))),x=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-large-image","version":"1.0.0","title":"Large Image","description":"Display the Large Image of a product.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["nextPreviousButtonsPosition","postId","hoverZoom","fullScreenOnClick","cropImages"],"supports":{"interactivity":true},"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"]}');k>2&&(0,r.registerBlockType)(x,{icon:()=>(0,f.createElement)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,f.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.22448 1.5L1.5 6.81504V11.7072L5.12953 9.06066C5.38061 8.87758 5.71858 8.86829 5.97934 9.0373L8.90601 10.9342L12.4772 7.46225C12.7683 7.17925 13.2317 7.17925 13.5228 7.46225L16.5 10.3568V2C16.5 1.72386 16.2761 1.5 16 1.5H6.22448ZM1.5 13.5636V16C1.5 16.2761 1.72386 16.5 2 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V12.4032L16.4772 12.4266L13 9.04603L9.52279 12.4266C9.27191 12.6706 8.88569 12.7086 8.59206 12.5183L5.59643 10.5766L1.5 13.5636ZM0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z",fill:"currentColor"})),edit:({context:e})=>{const t=(0,E.useInnerBlocksProps)({className:"wc-block-product-gallery-large-image__inner-blocks"},{template:[[_.name],[C.name]],templateInsertUpdatesSelection:!0}),o=(0,O.useMemo)((()=>{switch(e.nextPreviousButtonsPosition){case"insideTheImage":return{className:"inside-image"};case"outsideTheImage":return{className:"outside-image"};default:return{className:"off"}}}),[e.nextPreviousButtonsPosition]),r=(0,E.useBlockProps)({className:P()("wc-block-product-gallery-large-image","wc-block-editor-product-gallery-large-image",`wc-block-editor-product-gallery-large-image-next-previous--${null==o?void 0:o.className}`)});return(0,f.createElement)("div",{...r},(0,f.createElement)(j,null),(0,f.createElement)("div",{...t}))},save:()=>{const e=E.useBlockProps.save({className:"wc-block-product-gallery-large-image__inner-blocks"}),t=E.useInnerBlocksProps.save(e);return(0,f.createElement)("div",{...t})}})},926:()=>{},9196:e=>{"use strict";e.exports=window.React},9307:e=>{"use strict";e.exports=window.wp.element}},o={};function r(e){var l=o[e];if(void 0!==l)return l.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,l,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,l,a]=e[d],s=!0,n=0;n<o.length;n++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[n])))?o.splice(n--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,l,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=7204,(()=>{var e={7204:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var l,a,[i,s,n]=o,c=0;if(i.some((t=>0!==e[t]))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(n)var d=n(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=r.O(void 0,[2869],(()=>r(4933)));l=r.O(l),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-gallery-large-image"]=l})();