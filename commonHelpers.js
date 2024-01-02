import{S as d,i as p}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),f=document.querySelector("input"),u=document.querySelector(".gallery"),s=document.querySelector("body>span"),y="https://pixabay.com/api/",i={key:"41531560-af55148938f1784ffe04592f4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},m=new d(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});document.addEventListener("DOMContentLoaded",()=>{s.style.display="none"});function g(n){return fetch(`${y}?${new URLSearchParams(n)}`).then(t=>{if(!t.ok)throw s.style.display="none",Error(t.status);return t.json()}).then(({hits:t})=>{t.length>0?(s.style.display="none",u.innerHTML=h(t),m.refresh()):(p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),s.style.display="none")}).catch(t=>{console.log(t)}).finally(()=>{c.reset()})}c.addEventListener("submit",n=>{n.preventDefault(),u.innerHTML="",s.style.display="block",i.q=f.value,g(i)});function h(n){return n.reduce((t,o)=>t+`<li class="gallery-item">
    <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
      />
    </a>
    <div class="info-img">
    <p>Likes<span>${o.likes}</span></p>
    <p>Views<span>${o.views}</span></p>
    <p>Comments<span>${o.comments}</span></p>
    <p>Downloads<span>${o.downloads}</span></p>
    </div>
  </li>`,"")}
//# sourceMappingURL=commonHelpers.js.map
