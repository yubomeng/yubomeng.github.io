if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>n(e,r),u={module:{uri:r},exports:t,require:c};i[r]=Promise.all(o.map((e=>u[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-0f6f39c6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0505086da98507e68d0c82d8d7d799e4"},{url:"css/index.css",revision:"dfda77e8aa0057c45c3134b4d8bb4542"},{url:"/",revision:"index-20231118161459704"},{url:"music/",revision:"music-20231118161459704"},{url:"about/",revision:"about-20231118161459704"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
