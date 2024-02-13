import{g as $}from"./assets/modal-e98c3959.js";import{P as q,a as x}from"./assets/vendor-90aadca8.js";function M(e,n,t,s,i){const a=new q(e,{totalItems:s*n,itemsPerPage:s,visiblePages:3,page:t,template:{page:'<button class="tui-page page">{{page}}</button>',currentPage:'<strong class="tui-page page button-is-active">{{page}}</strong>'}});return a.on("beforeMove",u=>{i(u.page)}),a}x.defaults.baseURL="https://energyflow.b.goit.study/api";const A=document.querySelector(".switch-list"),E=document.querySelector(".exercises-list"),w=document.querySelector("#tui-pagination-container");let o=8,d=1,P="Muscles",B;A.addEventListener("click",U);function H(e,n){let t;return function(...i){const a=()=>{clearTimeout(t),e(...i)};clearTimeout(t),t=setTimeout(a,n)}}function k(){window.innerWidth<767?o=8:(window.innerWidth<768,o=12)}async function O({filter:e,page:n=1,limit:t=12,type:s}){try{return(await x.get(`/${s}`,{params:{filter:e,page:n,limit:t}})).data}catch{console.error("Something wrong")}}async function c(){try{const e=await O({type:"filters",filter:P,limit:o,page:d}),{page:n,totalPages:t,results:s}=e;E.innerHTML=F(s),w.innerHTML="",t>1&&(B=M(w,t,d,o,N))}catch{}}function N(e){d=e,c()}c();async function U(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;E.innerHTML="",d=1,P=e.target.dataset.filter,Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("is-active"):s.classList.add("is-active")});try{await c()}catch{console.error("oops")}}function F(e){return e.map(({name:t,filter:s,imgUrl:i})=>`<li class="exercises-item" data-filter="${s}" data-name="${t}">         
          <div class="image-container">
            <img class="exercises-image" src="${i}" alt="${s}"/>
            <div class="text-container">
              <h3 class="exercises-title">${t}</h3>
              <p class="exercises-text">${s}</p>
            </div>
          </div>
         </li>`).join("")}window.addEventListener("load",()=>{k(),c()});addEventListener("resize",H(()=>{const e=o;k(),e!==o&&c()},250));const C=document.querySelectorAll(".switch-item"),R=document.querySelector(".bp-list"),f=document.querySelector(".exercises-page");let r=8,p=1;const W=768,j=1440;function z(e,n){let t;return function(...i){const a=()=>{clearTimeout(t),e(...i)};clearTimeout(t),t=setTimeout(a,n)}}function I(){window.innerWidth<W?r=8:(window.innerWidth<j,r=9)}async function D(e){try{return(await $({filter:e,type:"exercises"})).data}catch(n){throw new Error("Failed to fetch data from API: "+n.message)}}async function l(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}const n=e.textContent.trim().toLowerCase();if(!n){console.error("Query is undefined");return}const t=await D(n),s=Math.ceil(t.results.length/r);_(t.results.slice((p-1)*r,p*r)),t.results.length>r&&V(s)}catch(e){console.error("Error fetching and rendering data:",e)}}function V(e){if(!f){console.error("Pagination container not found");return}let n="";for(let s=1;s<=e;s++)n+=`<button class="page ${s===p?"is-active":""}">${s}</button>`;f.innerHTML=n,f.querySelectorAll(".page").forEach(s=>{s.addEventListener("click",()=>{p=parseInt(s.textContent),l()})})}const L=document.querySelector(".exercises-list");L.addEventListener("click",function(e){if(e.target.closest(".exercises-item")){e.preventDefault();const t=document.querySelector(".bp-list");t&&(t.classList.remove("visually-hidden"),t.style.display="block"),L.classList.add("visually-hidden"),l()}});async function _(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let n="";e.forEach(s=>{n+=J(s)}),R.innerHTML=n,document.querySelectorAll(".exercise-card").forEach(s=>{s.addEventListener("click",i=>handleExerciseCardClick(s,i))})}catch(n){console.error("Error rendering exercise cards:",n)}}function J(e){return`
    <li class="bp-item" data-id="${e._id}">
    <div class="bp-exercisecard-wraper">
      <div class="bp-rating-info">
        <span class="bp-workout-span">WORKOUT</span>
        <span class="bp-rating">${e.rating}</span>
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
      <span>${e.name}</span>
    </div>

    <div class="bp-block-info">
      <div class="bp-calories">
        <span class="bp-block-info-title">Burned calories: </span>
        <span class="bp-block-info-value calories-value">${e.burnedCalories}</span>
        <span class="bp-block-info-value">/ ${e.time} min</span>
      </div>
      <div class="bp-body-part">
        <span class="bp-block-info-title">Body part: </span>
        <span class="bp-block-info-value body-part-value">${e.bodyPart}</span>
      </div>
      <div class="bp-target">
        <span class="bp-block-info-title">Target: </span>
        <span class="bp-block-info-value bp-target-value">${e.target}</span>
      </div>
    </div>
  </li>`}function K(){C.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),l()}C.forEach(e=>{e.addEventListener("click",K)});window.addEventListener("load",()=>{I(),l(),document.querySelectorAll(".exercises-item").forEach(n=>{n.addEventListener("click",t=>handleExerciseCardClick(t))})});window.addEventListener("resize",z(()=>{const e=r;I(),e!==r&&l()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),n=document.querySelector(".bp-search-input"),t=document.querySelector(".bp-list"),s=document.querySelectorAll(".switch-item");let i=1,a=9,u="",T="";s.forEach(g=>{g.addEventListener("click",function(){s.forEach(m=>{m.classList.remove("is-active")}),this.classList.add("is-active"),u=this.textContent.trim()})}),e.addEventListener("submit",function(g){g.preventDefault();const m=n.value.trim().toLowerCase();t.innerHTML="",axios.get("/api/exercises",{params:{search:m,filter:u,subtype:T,page:i,limit:a}}).then(v=>{const b=v.data;b.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):b.forEach(S=>{const y=document.createElement("li");y.textContent=S.name,t.appendChild(y)})}).catch(v=>{})})});const Q="https://energyflow.b.goit.study/api/subscription",h=document.querySelector("#subscribe-form");h.addEventListener("submit",async e=>{e.preventDefault();const n=h.elements.email.value;console.log(n);try{const t=await G(n);h.reset()}catch{console.log("error")}console.log(result)});async function G(e){return(await fetch(Q,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
