import{a as f,P as F}from"./vendor-4d8461fa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const h={openModalBtn:document.querySelector(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container")};h.openModalBtn.addEventListener("click",B);h.closeModalBtn.addEventListener("click",B);function B(){h.modal.classList.toggle("is-open")}document.querySelector(".mobile-menu-link");const w=document.querySelector(".home-link"),y=document.querySelector(".fav-link"),u="active";window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(y.classList.add(u),w.classList.remove(u)):(w.classList.add(u),y.classList.remove(u))});function P({filter:e,page:t=1,limit:s=12,type:a,...o}){return f.get(`https://energyflow.b.goit.study/api/${a}`,{params:{...o,filter:e,page:t,limit:s}})}function te(e,t){return f.post(`https://energyflow.b.goit.study/api/${t}`,e)}const S="dateNow",C="quoteDay",$=document.getElementById("description"),I=document.getElementById("author-quote");function J(){const e=new Date,t=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,s=localStorage.getItem(S);if(s===t){const a=JSON.parse(localStorage.getItem(C));if(a){const{author:o,quote:i}=a;$.textContent=i,I.textContent=o}else x();return}(!s||s!==t)&&(localStorage.setItem(S,t),x())}function x(){P({type:"quote"}).then(({data:e})=>{const{author:t,quote:s}=e,a={author:t,quote:s};localStorage.setItem(C,JSON.stringify(a)),$.textContent=s,I.textContent=t}).catch(e=>{console.error("Error fetching quote:",e)})}J();function se(e){window.innerWidth<768?pageSize=8:pageSize=12;const t=document.querySelector(".tui-pagination");return new F(t,{totalItems:pageSize*e,itemsPerPage:pageSize,visiblePages:3,centerAlign:!0})}document.querySelectorAll(".switch-item");const R=document.querySelector(".bp-list"),_=document.querySelector("#tui-pagination-container"),p=document.querySelector(".exercises-list");let l=8,k=1;let z;window.addEventListener("load",()=>{M(),b(),document.querySelectorAll(".exercises-item").forEach(t=>{t.addEventListener("click",s=>handleExerciseCardClick(s))})});p&&p.addEventListener("click",function(e){const t=e.target.closest(".exercises-item");if(t){e.preventDefault();const s=document.querySelector(".bp-list");s&&s.classList.remove("visually-hidden"),p.classList.add("visually-hidden");const a=new URLSearchParams(window.location.search),o=t.getAttribute("data-filter"),i=t.getAttribute("data-name");console.log(o),console.log(i),a.set(o.toLowerCase(),i.toLowerCase());const n=`${window.location.pathname}?${a.toString()}`;window.history.replaceState(null,null,n),b()}});window.addEventListener("resize",H(()=>{const e=l;M(),e!==l&&b()},250));function H(e,t){let s;return function(...o){const i=()=>{clearTimeout(s),e(...o)};clearTimeout(s),s=setTimeout(i,t)}}function M(){window.innerWidth<768?l=8:l=9}async function U(e){try{return(await P({...e,type:"exercises"})).data}catch(t){throw new Error("Failed to fetch data from API: "+t.message)}}async function b(){try{const e=document.querySelector(".switch-item.is-active");if(!e)return;if(!e.textContent.trim().toLowerCase()){console.error("Query is undefined");return}const s=new URLSearchParams(window.location.search);let a=s.get("bodypart"),o=s.get("muscles"),i=s.get("equipment");if(s.size){const d=await U({bodypart:a,muscles:o,equipment:i});W(d.results.slice((k-1)*l,k*l))}const n=new URLSearchParams(window.location.search);window.history.replaceState(null,null,window.location.pathname)}catch(e){console.error("Error fetching and rendering data:",e)}}async function W(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let t="";e.forEach(s=>{t+=K(s)}),R.innerHTML=t,_.innerHTML="",z>1}catch(t){console.error("Error rendering exercise cards:",t)}}function K(e){return`
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
    </li>`}function r(e){return/^[a-zA-Z]/.test(e)?e.charAt(0).toUpperCase()+e.slice(1):e}const Y="exercise",L=document.querySelector(".bp-list"),g=document.querySelector(".backdrop");L&&L.addEventListener("click",j);async function j(e){if(e.target.nodeName!=="BUTTON")return;g.classList.remove("is-hidden");const s=e.target.closest("li").dataset.id;try{const o=await f.get(`https://energyflow.b.goit.study/api/exercises/${s}`);Q(o.data),localStorage.setItem(Y,JSON.stringify(o.data));const n=document.querySelector(".stars-wraper").children,d=Math.round(o.data.rating);G(n,d)}catch(o){console.log(o)}document.querySelector(".modal-close-btn").addEventListener("click",v),window.addEventListener("keydown",A),g.addEventListener("click",o=>{o.currentTarget===o.target&&v()})}function v(){g.classList.add("is-hidden"),window.removeEventListener("keydown",A)}function A(e){e.code==="Escape"&&v()}function Q({gifUrl:e,name:t,rating:s,target:a,bodyPart:o,equipment:i,burnedCalories:n,popularity:d,description:T,_id:N}){const D=`<div class="modal">
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
        <h2 class="me-title">${r(t)}</h2>
        <div class="rating-wraper">
          <span class="rating">${Math.round(s).toFixed(1)}</span>
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
            <span class="block-info-value">${r(o)}</span>
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
          ${r(T)}
        </p>
        <button class="add-to-favorites-btn" type="button">
         ${X(N)}
        </button>
        <button class="give-rating-btn" type="button">Give a rating</button>
      </div>   
       </div>
    </div> 
    `;g.innerHTML=D}function G(e,t){Array.from(e).forEach((a,o)=>{o<t&&a.classList.remove("dimmed-star")})}const c="favorites",m=document.querySelector(".list-favorites");document.querySelector(".add-to-favorites-btn");document.querySelector(".delete-from-fav");document.querySelector(".start-btn");const E=document.querySelector(".backdrop"),q=document.querySelector(".message-block-favorites");if(m){const e=JSON.parse(localStorage.getItem(c))||[];O(e),m.addEventListener("click",V)}E&&E.addEventListener("click",Z);function V(e){const t=e.target.closest(".delete-from-fav");if(t){const a=t.dataset.id,i=(JSON.parse(localStorage.getItem(c))||[]).filter(({_id:n})=>n!==a);console.log(i),localStorage.setItem(c,JSON.stringify(i)),O(i)}e.target.classList.contains("start-btn")&&t.dataset.id}function Z(e){if(!e.target.classList.contains("add-to-favorites-btn"))return;const s=JSON.parse(localStorage.getItem(c))||[],a=JSON.parse(localStorage.getItem("exercise"));if(e.target.textContent.trim()==="Add to favorites")s.push(a),localStorage.setItem(c,JSON.stringify(s)),e.target.innerHTML=`Remove from <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`;else{const o=s.filter(({_id:i})=>i!==a._id);localStorage.setItem(c,JSON.stringify(o)),e.target.innerHTML=`Add to favorites <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`}}function X(e){return(JSON.parse(localStorage.getItem(c))||[]).find(a=>e===a._id)?`Remove from <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`:`Add to favorites <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`}function O(e){if(console.log(e),e.length===0){q.classList.remove("hidden"),m.innerHTML="";return}q.classList.add("hidden");const t=e.map(s=>`
        <li class="item-favorites" >
             <div class="workout-block">
               <p class="workout-title">Workout</p>
               <button class="delete-from-fav" type="button" data-id="${s._id}">
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
               <h3 class="ex-title">${s.name}</h3>
             </div>
             <ul class="list-ex-category">
               <li>
                 <p class="category-text">
                   <span class="category-text-accent">Burned calories: ${s.burnedCalories} </span
                   >200/ 3 min
                 </p>
               </li>
               <li>
                 <p class="category-text">
                   <span class="category-text-accent">Body part: ${s.bodyPart}: </span>Waist
                 </p>
               </li>
               <li>
                 <p class="category-text">
                   <span class="category-text-accent">Target: ${s.target}: </span>Abs
                 </p>
               </li>
             </ul>
           </li>
    `).join("");m.innerHTML=t}export{se as c,te as p};
//# sourceMappingURL=favorites-82848be3.js.map
