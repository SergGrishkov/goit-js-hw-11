import{S as d,i as p}from"./assets/vendor-9310f15c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const c=document.querySelector(".form"),f=document.querySelector("input"),u=document.querySelector(".gallery"),s=document.querySelector("body>span"),y="https://pixabay.com/api/",i={key:"41531560-af55148938f1784ffe04592f4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};document.addEventListener("DOMContentLoaded",()=>{s.style.display="none"});function m(n){return fetch(`${y}?${new URLSearchParams(n)}`).then(e=>{if(!e.ok)throw s.style.display="none",Error(e.status);return e.json()}).then(({hits:e})=>{e.length>0?(console.log(e),s.style.display="none",u.innerHTML=g(e),new d(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0})):(p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),s.style.display="none")}).catch(e=>{console.log(e)}).finally(()=>{c.reset()})}c.addEventListener("click",n=>{n.preventDefault(),n.target.type==="submit"&&(u.innerHTML="",s.style.display="block",i.q=f.value,m(i))});function g(n){return n.reduce((e,r)=>e+`<li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
      />
    </a>
    <div class="info-img">
    <p>Likes<span>${r.likes}</span></p>
    <p>Views<span>${r.views}</span></p>
    <p>Comments<span>${r.comments}</span></p>
    <p>Downloads<span>${r.downloads}</span></p>
    </div>
  </li>`,"")}
//# sourceMappingURL=commonHelpers.js.map
