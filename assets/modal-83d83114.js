import{a as v,i as h}from"./vendor-7ae4b28f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d={openModalBtn:document.querySelector(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container")};d.openModalBtn.addEventListener("click",f);d.closeModalBtn.addEventListener("click",f);function f(){d.modal.classList.toggle("is-open")}function x({filter:t,page:o=1,limit:r=12,type:n,...e}){return v.get(`https://energyflow.b.goit.study/api/${n}`,{params:{...e,filter:t,page:o,limit:r}})}const u="dateNow",m="quoteDay",p=document.getElementById("description"),y=document.getElementById("author-quote");function b(){const t=new Date,o=`${t.getDate()}.${t.getMonth()+1}.${t.getFullYear()}`,r=localStorage.getItem(u);if(r===o){const n=JSON.parse(localStorage.getItem(m));if(n){const{author:e,quote:s}=n;p.textContent=s,y.textContent=e}else g();return}(!r||r!==o)&&(localStorage.setItem(u,o),g())}function g(){x({type:"quote"}).then(({data:t})=>{const{author:o,quote:r}=t,n={author:o,quote:r};localStorage.setItem(m,JSON.stringify(n)),p.textContent=r,y.textContent=o}).catch(t=>{console.error("Error fetching quote:",t)})}b();window.ResizeObserver=h;const a=document.querySelector(".add-to-favorites-btn"),i=document.querySelector(".remove-from-favorites-btn"),S=document.querySelector(".list-favorites"),c=JSON.parse(localStorage.getItem("favoriteExercise"));c?a.style.display="none":i.style.display="none";a.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(c));const t=`
    <li class="item-favorites" data-id="${c._id}">
            <div class="workout-block">
              <p class="workout-title">Workout</p>
              <button class="delete-from-fav" type="button">
                <svg class="delete-icon" width="16" height="16">
                  <use href="../img/sprite.svg#icon-delete"></use>
                </svg>
              </button>
            </div>
            <button class="start-btn" type="button">
              Start
              <svg class="arrow-icon" width="14" height="14">
                <use href="../img/sprite.svg#icon-arrow"></use>
              </svg>
            </button>
            <div class="ex-title-block">
              <div class="icon-man-wraper">
                <svg class="man-icon" width="16" height="16">
                  <use href="../img/sprite.svg#icon-running-man"></use>
                </svg>
              </div>
              <h3 class="ex-title">${c.name}</h3>
            </div>
            <ul class="list-ex-category">
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Burned calories: ${c.burnedCalories} </span
                  >200/ 3 min
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Body part: ${c.bodyPart}: </span>Waist
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Target: ${c.target}: </span>Abs
                </p>
              </li>
            </ul>
          </li>
    `;S.insertAdjacentHTML("beforeend",t),document.querySelector(".message-block-favorites").style.display="none",a.style.display="none",i.style.display="block"});i.addEventListener("click",()=>{const t=c._id,r=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(e=>e._id!==t);localStorage.setItem("favoriteExercise",JSON.stringify(r));const n=document.querySelector(`.item-favorites[data-id="${t}"]`);n&&n.remove(),i.style.display="none",a.style.display="block"});const q=document.querySelector(".bp-start-button");document.querySelector(".backdrop");document.querySelector(".modal-close-btn");q.addEventListener("click",E);function E(){console.log("fhfgh")}export{x as g};
//# sourceMappingURL=modal-83d83114.js.map
