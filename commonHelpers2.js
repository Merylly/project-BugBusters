import{g as H}from"./assets/messages-31b7d371.js";import{a as C}from"./assets/vendor-0cb09735.js";C.defaults.baseURL="https://energyflow.b.goit.study/api";const A=document.querySelector(".switch-list"),l=document.querySelector(".exercises-list"),u=document.querySelector(".exercises-page");let o=8,c=1,T="Muscles";function B(e,s){let n;return function(...i){const r=()=>{clearTimeout(n),e(...i)};clearTimeout(n),n=setTimeout(r,s)}}function P(){window.innerWidth<767?o=8:(window.innerWidth<768,o=12)}async function S({filter:e,page:s=1,limit:n=12,type:t}){try{return(await C.get(`/${t}`,{params:{filter:e,page:s,limit:n}})).data}catch{console.error("Something wrong")}}async function m(){try{const e=await S({type:"filters",filter:T,limit:o,page:c}).then(s=>{const{page:n,totalPages:t,results:i}=s;if(l.innerHTML=L(i),u.innerHTML="",t>1){const r=$(n,t);u.innerHTML=r}})}catch{}}m();A.addEventListener("click",O);u.addEventListener("click",N);async function O(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;l.innerHTML="",c=1;const n=e.target.dataset.filter;T=n,Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("is-active"):t.classList.add("is-active")});try{S({type:"filters",filter:n,limit:o,page:c}).then(t=>{const{page:i,totalPages:r,results:p}=t;l.innerHTML=L(p),u.innerHTML="";{const f=$(i,r);u.innerHTML=f}})}catch{}}function L(e){return e.map(({name:n,filter:t,imgUrl:i})=>`<li class="exercises-item" data-filter="${t}" data-name="${n}">         
          <div class="image-container">
            <img class="exercises-image" src="${i}" alt="${t}"/>
            <div class="text-container">
              <h3 class="exercises-title">${n}</h3>
              <p class="exercises-text">${t}</p>
            </div>
          </div>
         </li>`).join("")}async function N(e){c=Number(e.target.textContent),console.log(c),Array.from(e.currentTarget.children).map(s=>{s.textContent!==c?s.classList.remove("button-is-active"):e.target.classList.add("button-is-active")}),l.innerHTML="";try{const{page:s,totalPages:n,results:t}=await m();if(s===n)return;l.innerHTML=L(t)}catch{console.error("Oops, something wrong")}}function $(e,s){let n="";for(let t=1;t<=s;t+=1)n+=`<li><button class="page button-is-active" type="button">${t}</button></li>`;return n}window.addEventListener("load",()=>{P(),m()});addEventListener("resize",B(()=>{const e=o;P(),e!==o&&m()},250));const I=document.querySelectorAll(".switch-item"),U=document.querySelector(".bp-list"),b=document.querySelector(".exercises-page");let a=8,g=1;const z=768,R=1440;function W(e,s){let n;return function(...i){const r=()=>{clearTimeout(n),e(...i)};clearTimeout(n),n=setTimeout(r,s)}}function q(){window.innerWidth<z?a=8:(window.innerWidth<R,a=9)}async function j(e){try{return(await H({filter:e,type:"exercises"})).data}catch(s){throw new Error("Failed to fetch data from API: "+s.message)}}async function d(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}const s=e.textContent.trim().toLowerCase();if(!s){console.error("Query is undefined");return}const n=await j(s),t=Math.ceil(n.results.length/a);F(n.results.slice((g-1)*a,g*a)),n.results.length>a&&D(t)}catch(e){console.error("Error fetching and rendering data:",e)}}function D(e){if(!b){console.error("Pagination container not found");return}let s="";for(let t=1;t<=e;t++)s+=`<button class="page ${t===g?"is-active":""}">${t}</button>`;b.innerHTML=s,b.querySelectorAll(".page").forEach(t=>{t.addEventListener("click",()=>{g=parseInt(t.textContent),d()})})}const k=document.querySelector(".exercises-list");k.addEventListener("click",function(e){if(e.target.closest(".exercises-item")){e.preventDefault();const n=document.querySelector(".bp-list");n&&(n.classList.remove("visually-hidden"),n.style.display="block"),k.classList.add("visually-hidden"),d()}});async function F(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let s="";e.forEach(t=>{s+=V(t)}),U.innerHTML=s,document.querySelectorAll(".exercise-card").forEach(t=>{t.addEventListener("click",i=>handleExerciseCardClick(t,i))})}catch(s){console.error("Error rendering exercise cards:",s)}}function V(e){return`
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
  </li>`}function J(){I.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),d()}I.forEach(e=>{e.addEventListener("click",J)});window.addEventListener("load",()=>{q(),d(),document.querySelectorAll(".exercises-item").forEach(s=>{s.addEventListener("click",n=>handleExerciseCardClick(n))})});window.addEventListener("resize",W(()=>{const e=a;q(),e!==a&&d()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),s=document.querySelector(".bp-search-input"),n=document.querySelector(".bp-list"),t=document.querySelectorAll(".switch-item");let i=1,r=9,p="",f="";t.forEach(h=>{h.addEventListener("click",function(){t.forEach(v=>{v.classList.remove("is-active")}),this.classList.add("is-active"),p=this.textContent.trim()})}),e.addEventListener("submit",function(h){h.preventDefault();const v=s.value.trim().toLowerCase();n.innerHTML="",axios.get("/api/exercises",{params:{search:v,filter:p,subtype:f,page:i,limit:r}}).then(w=>{const x=w.data;x.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):x.forEach(M=>{const E=document.createElement("li");E.textContent=M.name,n.appendChild(E)})}).catch(w=>{})})});const K="https://energyflow.b.goit.study/api/subscription",y=document.querySelector("#subscribe-form");y.addEventListener("submit",async e=>{e.preventDefault();const s=y.elements.email.value;console.log(s);try{const n=await Q(s);y.reset()}catch{console.log("error")}console.log(result)});async function Q(e){return(await fetch(K,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
