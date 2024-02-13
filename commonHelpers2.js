import{g as H}from"./assets/messages-31b7d371.js";import{a as C}from"./assets/vendor-0cb09735.js";C.defaults.baseURL="https://energyflow.b.goit.study/api";const A=document.querySelector(".switch-list"),l=document.querySelector(".exercises-list"),u=document.querySelector(".exercises-page");let o=8,c=1,T="Muscles";function B(e,t){let n;return function(...i){const r=()=>{clearTimeout(n),e(...i)};clearTimeout(n),n=setTimeout(r,t)}}function P(){window.innerWidth<767?o=8:(window.innerWidth<768,o=12)}async function S({filter:e,page:t=1,limit:n=12,type:s}){try{return(await C.get(`/${s}`,{params:{filter:e,page:t,limit:n}})).data}catch{console.error("Something wrong")}}async function f(){try{const e=await S({type:"filters",filter:T,limit:o,page:c}).then(t=>{const{page:n,totalPages:s,results:i}=t;if(l.innerHTML=L(i),u.innerHTML="",s>1){const r=I(n,s);u.innerHTML=r}})}catch{}}f();A.addEventListener("click",O);u.addEventListener("click",N);async function O(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;c=1;const n=e.target.dataset.filter;T=n,l.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("is-active"):s.classList.add("is-active")});try{S({type:"filters",filter:n,limit:o,page:c}).then(s=>{const{page:i,totalPages:r,results:p}=s;if(l.innerHTML=L(p),u.innerHTML="",r>1){const m=I(i,r);u.innerHTML=m}})}catch{}}function L(e){return e.map(({name:n,filter:s,imgUrl:i})=>`<li class="exercises-item">
          <a class="exercises-link" href="">
          <div class="image-container">
              <img class="exercises-image" src="${i}"/>
              <div class="text-container">
                <h3 class="exercises-title">${n}</h3>
                <p class="exercises-text">${s}</p>
              </div>
            </div>
          </a>
         </li>`).join("")}async function N(e){c=Number(e.target.textContent),console.log(c),Array.from(e.currentTarget.children).map(t=>{t.textContent!==c?t.classList.remove("is-active"):e.target.classList.add("is-active")}),l.innerHTML="";try{const{page:t,totalPages:n,results:s}=await f();if(t===n)return;l.innerHTML=L(s)}catch{console.error("Oops, something wrong")}}function I(e,t){let n="";for(let s=1;s<=t;s+=1)n+=`<li><button class="page is-active" type="button">${s}</button></li>`;return n}window.addEventListener("load",()=>{P(),f()});addEventListener("resize",B(()=>{const e=o;P(),e!==o&&f()},250));const q=document.querySelectorAll(".switch-item"),U=document.querySelector(".bp-list"),b=document.querySelector(".exercises-page");let a=8,g=1;const z=768,R=1440;function W(e,t){let n;return function(...i){const r=()=>{clearTimeout(n),e(...i)};clearTimeout(n),n=setTimeout(r,t)}}function M(){window.innerWidth<z?a=8:(window.innerWidth<R,a=9)}async function j(e){try{return(await H({filter:e,type:"exercises"})).data}catch(t){throw new Error("Failed to fetch data from API: "+t.message)}}async function d(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}const t=e.textContent.trim().toLowerCase();if(!t){console.error("Query is undefined");return}const n=await j(t),s=Math.ceil(n.results.length/a);F(n.results.slice((g-1)*a,g*a)),n.results.length>a&&D(s)}catch(e){console.error("Error fetching and rendering data:",e)}}function D(e){if(!b){console.error("Pagination container not found");return}let t="";for(let s=1;s<=e;s++)t+=`<button class="page ${s===g?"is-active":""}">${s}</button>`;b.innerHTML=t,b.querySelectorAll(".page").forEach(s=>{s.addEventListener("click",()=>{g=parseInt(s.textContent),d()})})}const k=document.querySelector(".exercises-list");k.addEventListener("click",function(e){if(e.target.closest(".exercises-item")){e.preventDefault();const n=document.querySelector(".bp-list");n&&(n.classList.remove("visually-hidden"),n.style.display="block"),k.classList.add("visually-hidden"),d()}});async function F(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let t="";e.forEach(s=>{t+=V(s)}),U.innerHTML=t,document.querySelectorAll(".exercise-card").forEach(s=>{s.addEventListener("click",i=>handleExerciseCardClick(s,i))})}catch(t){console.error("Error rendering exercise cards:",t)}}function V(e){return`
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
  </li>`}function J(){q.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),d()}q.forEach(e=>{e.addEventListener("click",J)});window.addEventListener("load",()=>{M(),d(),document.querySelectorAll(".exercises-item").forEach(t=>{t.addEventListener("click",n=>handleExerciseCardClick(n))})});window.addEventListener("resize",W(()=>{const e=a;M(),e!==a&&d()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),t=document.querySelector(".bp-search-input"),n=document.querySelector(".bp-list"),s=document.querySelectorAll(".switch-item");let i=1,r=9,p="",m="";s.forEach(h=>{h.addEventListener("click",function(){s.forEach(v=>{v.classList.remove("is-active")}),this.classList.add("is-active"),p=this.textContent.trim()})}),e.addEventListener("submit",function(h){h.preventDefault();const v=t.value.trim().toLowerCase();n.innerHTML="",axios.get("/api/exercises",{params:{search:v,filter:p,subtype:m,page:i,limit:r}}).then(w=>{const x=w.data;x.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):x.forEach($=>{const E=document.createElement("li");E.textContent=$.name,n.appendChild(E)})}).catch(w=>{})})});const K="https://energyflow.b.goit.study/api/subscription",y=document.querySelector("#subscribe-form");y.addEventListener("submit",async e=>{e.preventDefault();const t=y.elements.email.value;console.log(t);try{const n=await Q(t);y.reset()}catch{console.log("error")}console.log(result)});async function Q(e){return(await fetch(K,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
