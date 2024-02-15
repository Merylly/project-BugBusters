import{a as S,i as O,P as A}from"./vendor-7ae4b28f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const y={openModalBtn:document.querySelector(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container")};y.openModalBtn.addEventListener("click",E);y.closeModalBtn.addEventListener("click",E);function E(){y.modal.classList.toggle("is-open")}function L({filter:e,page:s=1,limit:a=12,type:o,...t}){return S.get(`https://energyflow.b.goit.study/api/${o}`,{params:{...t,filter:e,page:s,limit:a}})}const w="dateNow",q="quoteDay",C=document.getElementById("description"),P=document.getElementById("author-quote");function M(){const e=new Date,s=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,a=localStorage.getItem(w);if(a===s){const o=JSON.parse(localStorage.getItem(q));if(o){const{author:t,quote:i}=o;C.textContent=i,P.textContent=t}else x();return}(!a||a!==s)&&(localStorage.setItem(w,s),x())}function x(){L({type:"quote"}).then(({data:e})=>{const{author:s,quote:a}=e,o={author:s,quote:a};localStorage.setItem(q,JSON.stringify(o)),C.textContent=a,P.textContent=s}).catch(e=>{console.error("Error fetching quote:",e)})}M();window.ResizeObserver=O;const m=document.querySelector(".add-to-favorites-btn"),v=document.querySelector(".remove-from-favorites-btn"),T=document.querySelector(".list-favorites"),l=JSON.parse(localStorage.getItem("favoriteExercise"));l?m.style.display="none":v.style.display="none";m.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(l));const e=`
    <li class="item-favorites" data-id="${l._id}">
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
              <h3 class="ex-title">${l.name}</h3>
            </div>
            <ul class="list-ex-category">
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Burned calories: ${l.burnedCalories} </span
                  >200/ 3 min
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Body part: ${l.bodyPart}: </span>Waist
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Target: ${l.target}: </span>Abs
                </p>
              </li>
            </ul>
          </li>
    `;T.insertAdjacentHTML("beforeend",e),document.querySelector(".message-block-favorites").style.display="none",m.style.display="none",v.style.display="block"});v.addEventListener("click",()=>{const e=l._id,a=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(t=>t._id!==e);localStorage.setItem("favoriteExercise",JSON.stringify(a));const o=document.querySelector(`.item-favorites[data-id="${e}"]`);o&&o.remove(),v.style.display="none",m.style.display="block"});function N(e){window.innerWidth<768?pageSize=8:pageSize=12;const s=document.querySelector(".tui-pagination");return new A(s,{totalItems:pageSize*e,itemsPerPage:pageSize,visiblePages:3,centerAlign:!0})}const $=document.querySelectorAll(".switch-item"),F=document.querySelector(".bp-list"),D=document.querySelector(".exercises-page");let c=8,u=1,b;function z(e,s){let a;return function(...t){const i=()=>{clearTimeout(a),e(...t)};clearTimeout(a),a=setTimeout(i,s)}}function B(){window.innerWidth<1440?c=8:c=9}async function U(e){try{return(await L({...e,type:"exercises"})).data}catch(s){throw new Error("Failed to fetch data from API: "+s.message)}}async function g(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}if(!e.textContent.trim().toLowerCase()){console.error("Query is undefined");return}const a=new URLSearchParams(window.location.search);let o=a.get("bodypart"),t=a.get("muscles"),i=a.get("equipment");if(a.size){const d=await U({bodypart:o,muscles:t,equipment:i}),h=Math.ceil(d.results.length/c);_(d.results.slice((u-1)*c,u*c)),d.results.length>c&&(b&&b.destroy(),b=N(D,h,u,c,W))}const n=new URLSearchParams(window.location.search);window.history.replaceState(null,null,window.location.pathname)}catch(e){console.error("Error fetching and rendering data:",e)}}const k=document.querySelector(".exercises-list");k.addEventListener("click",function(e){const s=e.target.closest(".exercises-item");if(s){e.preventDefault();const a=document.querySelector(".bp-list");a&&a.classList.remove("visually-hidden"),k.classList.add("visually-hidden");const o=new URLSearchParams(window.location.search),t=s.getAttribute("data-filter"),i=s.getAttribute("data-name");o.set(t.toLowerCase(),i.toLowerCase());const n=`${window.location.pathname}?${o.toString()}`;window.history.replaceState(null,null,n),g()}});async function _(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let s="";e.forEach(o=>{s+=R(o)}),F.innerHTML=s,document.querySelectorAll(".exercise-card").forEach(o=>{o.addEventListener("click",t=>handleExerciseCardClick(o,t))})}catch(s){console.error("Error rendering exercise cards:",s)}}function R(e){return`
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
    </li>`}function r(e){return/^[a-zA-Z]/.test(e)?e.charAt(0).toUpperCase()+e.slice(1):e}function J(){$.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),u=1,g()}function W(e){u=e,g()}$.forEach(e=>{e.addEventListener("click",J)});window.addEventListener("load",()=>{B(),g(),document.querySelectorAll(".exercises-item").forEach(s=>{s.addEventListener("click",a=>handleExerciseCardClick(a))})});window.addEventListener("resize",z(()=>{const e=c;B(),e!==c&&g()},250));const K=document.querySelector(".bp-list"),f=document.querySelector(".backdrop");K.addEventListener("click",j);async function j(e){if(e.target.nodeName!=="BUTTON")return;f.classList.remove("is-hidden");const a=e.target.closest("li").dataset.id;try{const t=await S.get(`https://energyflow.b.goit.study/api/exercises/${a}`);H(t.data);const n=document.querySelector(".stars-wraper").children,d=Math.round(t.data.rating);Q(n,d)}catch(t){console.log(t)}document.querySelector(".modal-close-btn").addEventListener("click",p),window.addEventListener("keydown",t=>{t.code==="Escape"&&p()}),f.addEventListener("click",t=>{t.currentTarget===t.target&&p()})}function p(){f.classList.add("is-hidden"),window.removeEventListener("keydown",e=>{e.code==="Escape"&&p()})}function H({gifUrl:e,name:s,rating:a,target:o,bodyPart:t,equipment:i,burnedCalories:n,popularity:d,description:h}){const I=`<div class="modal">
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
          <span class="rating">${Math.round(a).toFixed(1)}</span>
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
            <span class="block-info-value">${r(o)}</span>
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
          ${r(h)}
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
    `;f.innerHTML=I}function Q(e,s){Array.from(e).forEach((o,t)=>{t<s&&o.classList.remove("dimmed-star")})}export{N as c};
//# sourceMappingURL=modal-c7c44ccb.js.map
