import{g as S}from"./assets/messages-e9298520.js";import{a as y}from"./assets/vendor-0cb09735.js";y.defaults.baseURL="https://energyflow.b.goit.study/api";const T=document.querySelector(".switch-list"),m=document.querySelector(".exercises-list");document.querySelector(".exercises-page");let a;window.innerWidth<767?a=8:a=12;async function w({filter:e,page:s=1,limit:n=12,type:t}){try{return(await y.get(`/${t}`,{params:{filter:e,page:s,limit:n}})).data}catch{console.error("n")}}async function q(){try{const e=await w({type:"filters",filter:"Muscles",limit:a}).then(s=>{const{results:n}=s;m.innerHTML=x(n)})}catch{}}q();T.addEventListener("click",I);async function I(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;const n=e.target.dataset.filter;m.innerHTML="",Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("is-active"):t.classList.add("is-active")});try{w({type:"filters",filter:n,limit:a}).then(t=>{const{results:i}=t;m.innerHTML=x(i)})}catch{}}function x(e){return e.map(({name:n,filter:t,imgUrl:i})=>`<li class="exercises-item">
          <a class="exercises-link" href="">
          <div class="image-container">
              <img class="exercises-image" src="${i}"/>
              <div class="text-container">
                <h3 class="exercises-title">${n}</h3>
                <p class="exercises-text">${t}</p>
              </div>
            </div>
          </a>
         </li>`).join("")}const L=document.querySelectorAll(".switch-item"),P=document.querySelector(".exercises-list"),p=document.querySelector(".exercises-page");let r=8,o=1;const $=768,A=1440;function M(e,s){let n;return function(...i){const l=()=>{clearTimeout(n),e(...i)};clearTimeout(n),n=setTimeout(l,s)}}function k(){window.innerWidth<$?r=8:(window.innerWidth<A,r=9)}async function B(e){try{return(await S({filter:e,type:"exercises"})).data}catch(s){throw new Error("Failed to fetch data from API: "+s.message)}}async function c(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}const s=e.textContent.trim().toLowerCase();if(!s){console.error("Query is undefined");return}const n=await B(s),t=Math.ceil(n.results.length/r);O(n.results.slice((o-1)*r,o*r)),n.results.length>r&&H(t)}catch(e){console.error("Error fetching and rendering data:",e)}}function H(e){if(!p){console.error("Pagination container not found");return}let s="";for(let t=1;t<=e;t++)s+=`<button class="page ${t===o?"is-active":""}">${t}</button>`;p.innerHTML=s,p.querySelectorAll(".page").forEach(t=>{t.addEventListener("click",()=>{o=parseInt(t.textContent),c()})})}async function O(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let s="";e.forEach(t=>{s+=N(t)}),P.innerHTML=s,document.querySelectorAll(".exercise-card").forEach(t=>{t.addEventListener("click",()=>{console.log("Clicked on exercise:",t.querySelector("h2").textContent)})})}catch(s){console.error("Error rendering exercise cards:",s)}}function N(e){return`
    <li class="bp-item">
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
  </li>`}function U(){L.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),c()}L.forEach(e=>{e.addEventListener("click",U)});window.addEventListener("load",()=>{k(),c()});window.addEventListener("resize",M(()=>{const e=r;k(),e!==r&&c()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),s=document.querySelector(".bp-search-input"),n=document.querySelector(".bp-list"),t=document.querySelectorAll(".switch-item");let i=1,l=9,g="",E="";t.forEach(u=>{u.addEventListener("click",function(){t.forEach(d=>{d.classList.remove("is-active")}),this.classList.add("is-active"),g=this.textContent.trim()})}),e.addEventListener("submit",function(u){u.preventDefault();const d=s.value.trim().toLowerCase();n.innerHTML="",axios.get("/api/exercises",{params:{search:d,filter:g,subtype:E,page:i,limit:l}}).then(h=>{const v=h.data;v.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):v.forEach(C=>{const b=document.createElement("li");b.textContent=C.name,n.appendChild(b)})}).catch(h=>{})})});const R="https://energyflow.b.goit.study/api/subscription",f=document.querySelector("#subscribe-form");f.addEventListener("submit",async e=>{e.preventDefault();const s=f.elements.email.value;console.log(s);try{const n=await j(s);f.reset()}catch{console.log("error")}console.log(result)});async function j(e){return(await fetch(R,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
