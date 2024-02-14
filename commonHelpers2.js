import{g as I}from"./assets/modal-88b5d160.js";import{P as A,a as P}from"./assets/vendor-90aadca8.js";function C(e){window.innerWidth<768?pageSize=8:pageSize=12;const t=document.querySelector(".tui-pagination");return new A(t,{totalItems:pageSize*e,itemsPerPage:pageSize,visiblePages:3,centerAlign:!0})}P.defaults.baseURL="https://energyflow.b.goit.study/api";const z=document.querySelector(".switch-list"),S=document.querySelector(".exercises-list"),L=document.querySelector("#tui-pagination-container");let o=8,g=1,E="Muscles",U;z.addEventListener("click",O);function M(e,t){let s;return function(...i){const a=()=>{clearTimeout(s),e(...i)};clearTimeout(s),s=setTimeout(a,t)}}function k(){window.innerWidth<767?o=8:(window.innerWidth<768,o=12)}async function B({filter:e,page:t=1,limit:s=12,type:n}){try{return(await P.get(`/${n}`,{params:{filter:e,page:t,limit:s}})).data}catch{console.error("Something wrong")}}async function p(){try{const e=await B({type:"filters",filter:E,limit:o,page:g}),{page:t,totalPages:s,results:n}=e;S.innerHTML=F(n),L.innerHTML="",s>1&&(U=C(L,s,g,o,R))}catch{}}function R(e){g=e,p()}p();async function O(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;S.innerHTML="",g=1,E=e.target.dataset.filter,Array.from(e.currentTarget.children).map(n=>{n.textContent!==e.target.textContent?n.classList.remove("is-active"):n.classList.add("is-active")});try{await p()}catch{console.error("oops")}}function F(e){return e.map(({name:s,filter:n,imgUrl:i})=>`<li class="exercises-item" data-filter="${n}" data-name="${s}">         
          <div class="image-container">
            <img class="exercises-image" src="${i}" alt="${n}"/>
            <div class="text-container">
              <h3 class="exercises-title">${s}</h3>
              <p class="exercises-text">${n}</p>
            </div>
          </div>
         </li>`).join("")}window.addEventListener("load",()=>{k(),p()});addEventListener("resize",M(()=>{const e=o;k(),e!==o&&p()},250));const $=document.querySelectorAll(".switch-item"),N=document.querySelector(".bp-list"),H=document.querySelector(".exercises-page");let r=8,d=1,h;function W(e,t){let s;return function(...i){const a=()=>{clearTimeout(s),e(...i)};clearTimeout(s),s=setTimeout(a,t)}}function q(){window.innerWidth<1440?r=8:r=9}async function j(e){try{return(await I({...e,type:"exercises"})).data}catch(t){throw new Error("Failed to fetch data from API: "+t.message)}}async function m(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}if(!e.textContent.trim().toLowerCase()){console.error("Query is undefined");return}const s=new URLSearchParams(window.location.search);let n=s.get("bodypart"),i=s.get("muscles"),a=s.get("equipment");if(s.size){const l=await j({bodypart:n,muscles:i,equipment:a}),u=Math.ceil(l.results.length/r);D(l.results.slice((d-1)*r,d*r)),l.results.length>r&&(h&&h.destroy(),h=C(H,u,d,r,_))}const c=new URLSearchParams(window.location.search);window.history.replaceState(null,null,window.location.pathname)}catch(e){console.error("Error fetching and rendering data:",e)}}const x=document.querySelector(".exercises-list");x.addEventListener("click",function(e){const t=e.target.closest(".exercises-item");if(t){e.preventDefault();const s=document.querySelector(".bp-list");s&&s.classList.remove("visually-hidden"),x.classList.add("visually-hidden");const n=new URLSearchParams(window.location.search),i=t.getAttribute("data-filter"),a=t.getAttribute("data-name");n.set(i.toLowerCase(),a.toLowerCase());const c=`${window.location.pathname}?${n.toString()}`;window.history.replaceState(null,null,c),m()}});async function D(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let t="";e.forEach(n=>{t+=V(n)}),N.innerHTML=t,document.querySelectorAll(".exercise-card").forEach(n=>{n.addEventListener("click",i=>handleExerciseCardClick(n,i))})}catch(t){console.error("Error rendering exercise cards:",t)}}function V(e){function t(n){return/^[a-zA-Z]/.test(n)?n.charAt(0).toUpperCase()+n.slice(1):n}return`
    <li class="bp-item" data-id="${e._id}">
    <div class="bp-exercisecard-wraper">
        <div class="bp-rating-info">
        <span class="bp-workout-span">WORKOUT</span>
        <span class="bp-rating">${t(e.rating)}</span>
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
        <span>${t(e.name)}</span>
    </div>

    <div class="bp-block-info">
        <div class="bp-calories">
            <span class="bp-block-info-title">Burned calories: </span>
            <span class="bp-block-info-value calories-value">${t(e.burnedCalories)}</span>
            <span class="bp-block-info-value">/ ${e.time} min</span>
        </div>
        <div class="bp-body-part">
            <span class="bp-block-info-title">Body part: </span>
            <span class="bp-block-info-value body-part-value">${t(e.bodyPart)}</span>
        </div>
        <div class="bp-target">
            <span class="bp-block-info-title">Target: </span>
            <span class="bp-block-info-value bp-target-value">${t(e.target)}</span>
        </div>
    </div>
    </li>`}function K(){$.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),d=1,m()}function _(e){d=e,m()}$.forEach(e=>{e.addEventListener("click",K)});window.addEventListener("load",()=>{q(),m(),document.querySelectorAll(".exercises-item").forEach(t=>{t.addEventListener("click",s=>handleExerciseCardClick(s))})});window.addEventListener("resize",W(()=>{const e=r;q(),e!==r&&m()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),t=document.querySelector(".bp-search-input"),s=document.querySelector(".bp-list"),n=document.querySelectorAll(".switch-item");let i=1,a=9,c="",l="";n.forEach(u=>{u.addEventListener("click",function(){n.forEach(f=>{f.classList.remove("is-active")}),this.classList.add("is-active"),c=this.textContent.trim()})}),e.addEventListener("submit",function(u){u.preventDefault();const f=t.value.trim().toLowerCase();s.innerHTML="",axios.get("/api/exercises",{params:{search:f,filter:c,subtype:l,page:i,limit:a}}).then(w=>{const b=w.data;b.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):b.forEach(T=>{const y=document.createElement("li");y.textContent=T.name,s.appendChild(y)})}).catch(w=>{})})});const J="https://energyflow.b.goit.study/api/subscription",v=document.querySelector("#subscribe-form");v.addEventListener("submit",async e=>{e.preventDefault();const t=v.elements.email.value;console.log(t);try{const s=await Q(t);v.reset()}catch{console.log("error")}console.log(result)});async function Q(e){return(await fetch(J,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
