(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const n=document.getElementById("header-modal-menu"),c=document.getElementById("modal-menu-open-btn"),l=document.getElementById("modal-menu-close-btn"),m=document.getElementById("modal-menu-first-btn"),u=document.getElementById("modal-menu-second-btn"),a=document.getElementById("modal-menu-third-btn"),f=document.getElementById("modal-menu-fourth-btn");c.addEventListener("click",()=>{n.classList.add("is-open")});l.addEventListener("click",()=>{n.classList.remove("is-open")});m.addEventListener("click",()=>{n.classList.remove("is-open")});u.addEventListener("click",()=>{n.classList.remove("is-open")});a.addEventListener("click",()=>{n.classList.remove("is-open")});f.addEventListener("click",()=>{n.classList.remove("is-open")});let i;function p(){i!==window.innerWidth>1279&&(console.log(i),i=window.innerWidth>1279,n.classList.remove("is-open"))}window.onresize=p;
//# sourceMappingURL=commonHelpers.js.map