if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const u=s=>r(s,n),o={module:{uri:n},exports:t,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(l(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/chapter_1--y0wzp4z.js",revision:null},{url:"assets/chapter_10-Kck4BiMZ.js",revision:null},{url:"assets/chapter_11-Bf_YDBNM.js",revision:null},{url:"assets/chapter_12-DpWU5W8X.js",revision:null},{url:"assets/chapter_13-DY6c_v4f.js",revision:null},{url:"assets/chapter_14-Bgp80rMu.js",revision:null},{url:"assets/chapter_15-BBpSiQJn.js",revision:null},{url:"assets/chapter_16-COXMQwk4.js",revision:null},{url:"assets/chapter_17-yMSaFvTC.js",revision:null},{url:"assets/chapter_18-B40vA0qo.js",revision:null},{url:"assets/chapter_2-Dd6BDyjJ.js",revision:null},{url:"assets/chapter_3-DjUmxaoJ.js",revision:null},{url:"assets/chapter_4-DjEgGbNr.js",revision:null},{url:"assets/chapter_5-DpAUbBn9.js",revision:null},{url:"assets/chapter_6-b-95vTsV.js",revision:null},{url:"assets/chapter_7-B1qqZXDj.js",revision:null},{url:"assets/chapter_8-CkxstYSX.js",revision:null},{url:"assets/chapter_9-KaDrg7TX.js",revision:null},{url:"assets/index-Be9b3THL.css",revision:null},{url:"assets/index-BErgpvVz.js",revision:null},{url:"index.html",revision:"709d5f860eb06b5158f8391146d2c84b"},{url:"registerSW.js",revision:"8cd578403de32224f5e35fa51d37fcc1"},{url:"favicon.ico",revision:"e82d3daff4c8fa4360217c64fb2c3c55"},{url:"logo192.png",revision:"b0e503ad28acc84542f2d000f8d3de9b"},{url:"manifest.webmanifest",revision:"5dd64601214fbeabdb9474e9639cdadd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
