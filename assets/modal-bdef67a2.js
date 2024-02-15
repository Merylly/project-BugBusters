import{a as f,b as I,P as O}from"./vendor-8c2391c4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const h={openModalBtn:document.querySelector(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container")};h.openModalBtn.addEventListener("click",S);h.closeModalBtn.addEventListener("click",S);function S(){h.modal.classList.toggle("is-open")}function L({filter:e,page:s=1,limit:o=12,type:a,...t}){return f.get(`https://energyflow.b.goit.study/api/${a}`,{params:{...t,filter:e,page:s,limit:o}})}function K(e,s){return f.post(`https://energyflow.b.goit.study/api/${s}`,e)}const y="dateNow",E="quoteDay",q=document.getElementById("description"),P=document.getElementById("author-quote");function A(){const e=new Date,s=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,o=localStorage.getItem(y);if(o===s){const a=JSON.parse(localStorage.getItem(E));if(a){const{author:t,quote:i}=a;q.textContent=i,P.textContent=t}else w();return}(!o||o!==s)&&(localStorage.setItem(y,s),w())}function w(){L({type:"quote"}).then(({data:e})=>{const{author:s,quote:o}=e,a={author:s,quote:o};localStorage.setItem(E,JSON.stringify(a)),q.textContent=o,P.textContent=s}).catch(e=>{console.error("Error fetching quote:",e)})}A();window.ResizeObserver=I;const u=document.querySelector(".add-to-favorites-btn"),p=document.querySelector(".remove-from-favorites-btn"),M=document.querySelector(".list-favorites"),c=JSON.parse(localStorage.getItem("favoriteExercise"));c?u.style.display="none":p.style.display="none";u&&u.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(c));const e=`
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
      `;M.insertAdjacentHTML("beforeend",e),document.querySelector(".message-block-favorites").style.display="none",u.style.display="none",p.style.display="block"});p.addEventListener("click",()=>{const e=c._id,o=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(t=>t._id!==e);localStorage.setItem("favoriteExercise",JSON.stringify(o));const a=document.querySelector(`.item-favorites[data-id="${e}"]`);a&&a.remove(),p.style.display="none",u.style.display="block"});function j(e){window.innerWidth<768?pageSize=8:pageSize=12;const s=document.querySelector(".tui-pagination");return new O(s,{totalItems:pageSize*e,itemsPerPage:pageSize,visiblePages:3,centerAlign:!0})}document.querySelectorAll(".switch-item");const T=document.querySelector(".bp-list"),N=document.querySelector("#tui-pagination-container"),v=document.querySelector(".exercises-list");let l=8,x=1;let F;window.addEventListener("load",()=>{$(),b(),document.querySelectorAll(".exercises-item").forEach(s=>{s.addEventListener("click",o=>handleExerciseCardClick(o))})});v&&v.addEventListener("click",function(e){const s=e.target.closest(".exercises-item");if(s){e.preventDefault();const o=document.querySelector(".bp-list");o&&o.classList.remove("visually-hidden"),v.classList.add("visually-hidden");const a=new URLSearchParams(window.location.search),t=s.getAttribute("data-filter"),i=s.getAttribute("data-name");console.log(t),console.log(i),a.set(t.toLowerCase(),i.toLowerCase());const n=`${window.location.pathname}?${a.toString()}`;window.history.replaceState(null,null,n),b()}});window.addEventListener("resize",D(()=>{const e=l;$(),e!==l&&b()},250));function D(e,s){let o;return function(...t){const i=()=>{clearTimeout(o),e(...t)};clearTimeout(o),o=setTimeout(i,s)}}function $(){window.innerWidth<768?l=8:l=9}async function z(e){try{return(await L({...e,type:"exercises"})).data}catch(s){throw new Error("Failed to fetch data from API: "+s.message)}}async function b(){try{const e=document.querySelector(".switch-item.is-active");if(!e)return;if(!e.textContent.trim().toLowerCase()){console.error("Query is undefined");return}const o=new URLSearchParams(window.location.search);let a=o.get("bodypart"),t=o.get("muscles"),i=o.get("equipment");if(o.size){const d=await z({bodypart:a,muscles:t,equipment:i});U(d.results.slice((x-1)*l,x*l))}const n=new URLSearchParams(window.location.search);window.history.replaceState(null,null,window.location.pathname)}catch(e){console.error("Error fetching and rendering data:",e)}}async function U(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let s="";e.forEach(o=>{s+=_(o)}),T.innerHTML=s,N.innerHTML="",F>1}catch(s){console.error("Error rendering exercise cards:",s)}}function _(e){return`
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
    </li>`}function r(e){return/^[a-zA-Z]/.test(e)?e.charAt(0).toUpperCase()+e.slice(1):e}const k=document.querySelector(".bp-list"),m=document.querySelector(".backdrop");k&&k.addEventListener("click",R);async function R(e){if(e.target.nodeName!=="BUTTON")return;m.classList.remove("is-hidden");const o=e.target.closest("li").dataset.id;try{const t=await f.get(`https://energyflow.b.goit.study/api/exercises/${o}`);J(t.data);const n=document.querySelector(".stars-wraper").children,d=Math.round(t.data.rating);W(n,d)}catch(t){console.log(t)}document.querySelector(".modal-close-btn").addEventListener("click",g),window.addEventListener("keydown",t=>{t.code==="Escape"&&g()}),m.addEventListener("click",t=>{t.currentTarget===t.target&&g()})}function g(){m.classList.add("is-hidden"),window.removeEventListener("keydown",e=>{e.code==="Escape"&&g()})}function J({gifUrl:e,name:s,rating:o,target:a,bodyPart:t,equipment:i,burnedCalories:n,popularity:d,description:B}){const C=`<div class="modal">
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
          <span class="rating">${Math.round(o).toFixed(1)}</span>
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
            <span class="block-info-value">${r(i)}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Popular</h3>
            <span class="block-info-value">${d}</span>
          </div>
          <div class="me-block-info-target">
            <h3 class="block-info-name">Burned Calories</h3>
            <div class="calories-wrap">
              <span class="block-info-value">${n}</span
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
    `;m.innerHTML=C}function W(e,s){Array.from(e).forEach((a,t)=>{t<s&&a.classList.remove("dimmed-star")})}export{j as c,K as p};
//# sourceMappingURL=modal-bdef67a2.js.map
