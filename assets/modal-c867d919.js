import{a as m,b as I,P as M}from"./vendor-8c2391c4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const f={openModalBtn:document.querySelector(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container")};f.openModalBtn.addEventListener("click",x);f.closeModalBtn.addEventListener("click",x);function x(){f.modal.classList.toggle("is-open")}document.querySelector(".mobile-menu-link");const h=document.querySelector(".home-link"),b=document.querySelector(".fav-link"),d="active";window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(b.classList.add(d),h.classList.remove(d)):(h.classList.add(d),b.classList.remove(d))});function S({filter:e,page:s=1,limit:n=12,type:a,...t}){return m.get(`https://energyflow.b.goit.study/api/${a}`,{params:{...t,filter:e,page:s,limit:n}})}function H(e,s){return m.post(`https://energyflow.b.goit.study/api/${s}`,e)}const w="dateNow",E="quoteDay",q=document.getElementById("description"),P=document.getElementById("author-quote");function A(){const e=new Date,s=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,n=localStorage.getItem(w);if(n===s){const a=JSON.parse(localStorage.getItem(E));if(a){const{author:t,quote:o}=a;q.textContent=o,P.textContent=t}else y();return}(!n||n!==s)&&(localStorage.setItem(w,s),y())}function y(){S({type:"quote"}).then(({data:e})=>{const{author:s,quote:n}=e,a={author:s,quote:n};localStorage.setItem(E,JSON.stringify(a)),q.textContent=n,P.textContent=s}).catch(e=>{console.error("Error fetching quote:",e)})}A();window.ResizeObserver=I;function Q(e){window.innerWidth<768?pageSize=8:pageSize=12;const s=document.querySelector(".tui-pagination");return new M(s,{totalItems:pageSize*e,itemsPerPage:pageSize,visiblePages:3,centerAlign:!0})}document.querySelectorAll(".switch-item");const O=document.querySelector(".bp-list"),T=document.querySelector("#tui-pagination-container"),g=document.querySelector(".exercises-list");let c=8,L=1;let D;window.addEventListener("load",()=>{C(),v(),document.querySelectorAll(".exercises-item").forEach(s=>{s.addEventListener("click",n=>handleExerciseCardClick(n))})});g&&g.addEventListener("click",function(e){const s=e.target.closest(".exercises-item");if(s){e.preventDefault();const n=document.querySelector(".bp-list");n&&n.classList.remove("visually-hidden"),g.classList.add("visually-hidden");const a=new URLSearchParams(window.location.search),t=s.getAttribute("data-filter"),o=s.getAttribute("data-name");console.log(t),console.log(o),a.set(t.toLowerCase(),o.toLowerCase());const i=`${window.location.pathname}?${a.toString()}`;window.history.replaceState(null,null,i),v()}});window.addEventListener("resize",z(()=>{const e=c;C(),e!==c&&v()},250));function z(e,s){let n;return function(...t){const o=()=>{clearTimeout(n),e(...t)};clearTimeout(n),n=setTimeout(o,s)}}function C(){window.innerWidth<768?c=8:c=9}async function F(e){try{return(await S({...e,type:"exercises"})).data}catch(s){throw new Error("Failed to fetch data from API: "+s.message)}}async function v(){try{const e=document.querySelector(".switch-item.is-active");if(!e)return;if(!e.textContent.trim().toLowerCase()){console.error("Query is undefined");return}const n=new URLSearchParams(window.location.search);let a=n.get("bodypart"),t=n.get("muscles"),o=n.get("equipment");if(n.size){const l=await F({bodypart:a,muscles:t,equipment:o});N(l.results.slice((L-1)*c,L*c))}const i=new URLSearchParams(window.location.search);window.history.replaceState(null,null,window.location.pathname)}catch(e){console.error("Error fetching and rendering data:",e)}}async function N(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let s="";e.forEach(n=>{s+=U(n)}),O.innerHTML=s,T.innerHTML="",D>1}catch(s){console.error("Error rendering exercise cards:",s)}}function U(e){return`
    <li class="bp-item" data-id="${e._id}">
    <div class="bp-exercisecard-wraper">
        <div class="bp-rating-info">
        <span class="bp-workout-span">WORKOUT</span>
        <span class="bp-rating">${r(e.rating)}</span>
        <svg
            class="icon-star"
            viewBox="0 0 32 32"
            width="13"
            height="13"
            >
            <use href="./img/sprite.svg#icon-star"></use>
        </svg>
    </div>

    <button class="bp-start-button" type="button">
        Start
        <svg
            class="bp-arrow"
            viewBox="0 0 32 32"
            width="14"
            height="14"
            >
            <use href="./img/sprite.svg#icon-arrow" />
        </svg>
    </button>
    </div>

    <div class="bp-exercise-name">
        <svg
            class="bp-run-icon"
            viewBox="0 0 32 32"
            width="14.07"
            height="16"
        >
            <use href="./img/sprite.svg#icon-running-man" />
        </svg>
        <span>${r(e.name)}</span>
    </div>

    <div class="bp-block-info">
        <div class="bp-calories">
            <span class="bp-block-info-title">Burned calories: </span>
            <span class="bp-block-info-value calories-value">${r(e.burnedCalories)}</span>
            <span class="bp-block-info-value">/ ${e.time} min</span>
        </div>
        <div class="bp-body-part">
            <span class="bp-block-info-title">Body part: </span>
            <span class="bp-block-info-value body-part-value">${r(e.bodyPart)}</span>
        </div>
        <div class="bp-target">
            <span class="bp-block-info-title">Target: </span>
            <span class="bp-block-info-value bp-target-value">${r(e.target)}</span>
        </div>
    </div>
    </li>`}function r(e){return/^[a-zA-Z]/.test(e)?e.charAt(0).toUpperCase()+e.slice(1):e}const k=document.querySelector(".bp-list"),p=document.querySelector(".backdrop");k&&k.addEventListener("click",R);async function R(e){if(e.target.nodeName!=="BUTTON")return;p.classList.remove("is-hidden");const n=e.target.closest("li").dataset.id;try{const t=await m.get(`https://energyflow.b.goit.study/api/exercises/${n}`);K(t.data);const i=document.querySelector(".stars-wraper").children,l=Math.round(t.data.rating);W(i,l)}catch(t){console.log(t)}document.querySelector(".modal-close-btn").addEventListener("click",u),window.addEventListener("keydown",t=>{t.code==="Escape"&&u()}),p.addEventListener("click",t=>{t.currentTarget===t.target&&u()})}function u(){p.classList.add("is-hidden"),window.removeEventListener("keydown",e=>{e.code==="Escape"&&u()})}function K({gifUrl:e,name:s,rating:n,target:a,bodyPart:t,equipment:o,burnedCalories:i,popularity:l,description:B}){const $=`<div class="modal">
    <button class="modal-close-btn" type="button">
      <svg class="close-me-icon" viewBox="0 0 32 32" width="24" height="24">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-wraper">
      <div class="modal-exercises-image">
        <img
          class="exercise-image"
          src="${e}"
          alt="showing exercise"
        />
      </div>
      <div class="modal-info-wraper">
        <h2 class="me-title">${r(s)}</h2>
        <div class="rating-wraper">
          <span class="rating">${Math.round(n).toFixed(1)}</span>
          <div class="stars-wraper">
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="icon-star dimmed-star" viewBox="0 0 32 32" width="13" height="13">
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
            <svg
              class="icon-star dimmed-star"
              viewBox="0 0 32 32"
              width="13"
              height="13"
            >
              <use href="./img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div class="me-block-info">
          <div class="me-block-info-target">
            <h3 class="block-info-name">Target</h3>
            <span class="block-info-value">${r(a)}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Body Part</h3>
            <span class="block-info-value">${r(t)}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Equipment</h3>
            <span class="block-info-value">${r(o)}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Popular</h3>
            <span class="block-info-value">${l}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Burned Calories</h3>
            <div class="calories-wrap">
              <span class="block-info-value">${i}</span
              ><!--
--><span class="block-info-static-value">/3 min</span>
            </div>
          </div>
        </div>
        <p class="exersice-text">
          ${r(B)}
        </p>
        <button class="add-to-favorites-btn" type="button">
          Add to favorites
          <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>
        </button>
        <button class="give-rating-btn" type="button">Give a rating</button>
      </div>   
       </div>
    </div> 
    `;p.innerHTML=$}function W(e,s){Array.from(e).forEach((a,t)=>{t<s&&a.classList.remove("dimmed-star")})}export{Q as c,H as p};
//# sourceMappingURL=modal-c867d919.js.map
