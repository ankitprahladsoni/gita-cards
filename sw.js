if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const u=s=>r(s,n),o={module:{uri:n},exports:t,require:u};e[n]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/chapter_1-D983etVr.js",revision:null},{url:"assets/chapter_10-uuy1_Z2u.js",revision:null},{url:"assets/chapter_11-Zd1Nh1Rc.js",revision:null},{url:"assets/chapter_12-CHxzYmlt.js",revision:null},{url:"assets/chapter_13-Cuq4uZXN.js",revision:null},{url:"assets/chapter_14-Lph9Gdlp.js",revision:null},{url:"assets/chapter_15-CCZWRNb4.js",revision:null},{url:"assets/chapter_16-t5eifYVS.js",revision:null},{url:"assets/chapter_17-CBTTyErk.js",revision:null},{url:"assets/chapter_18-CTtg3Hhj.js",revision:null},{url:"assets/chapter_2-BrYLdSDR.js",revision:null},{url:"assets/chapter_3-vJDqgskX.js",revision:null},{url:"assets/chapter_4-H7FW0YMD.js",revision:null},{url:"assets/chapter_5-CLz_rNJ9.js",revision:null},{url:"assets/chapter_6-NUjnqSTV.js",revision:null},{url:"assets/chapter_7-5lcjuIyl.js",revision:null},{url:"assets/chapter_8-BSiekqMC.js",revision:null},{url:"assets/chapter_9-DEu6g9KH.js",revision:null},{url:"assets/index-Be9b3THL.css",revision:null},{url:"assets/index-xuoFONdC.js",revision:null},{url:"index.html",revision:"181835b11d8f654a7439306f9eb5fb5e"},{url:"registerSW.js",revision:"8cd578403de32224f5e35fa51d37fcc1"},{url:"favicon.ico",revision:"e82d3daff4c8fa4360217c64fb2c3c55"},{url:"logo192.png",revision:"b0e503ad28acc84542f2d000f8d3de9b"},{url:"manifest.webmanifest",revision:"5dd64601214fbeabdb9474e9639cdadd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));