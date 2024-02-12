import{g as I}from"./assets/messages-f6653de9.js";import{a as E}from"./assets/vendor-0cb09735.js";E.defaults.baseURL="https://energyflow.b.goit.study/api";const H=document.querySelector(".switch-list"),l=document.querySelector(".exercises-list"),u=document.querySelector(".exercises-page");let o=8,c=1,C="Muscles";function A(e,n){let s;return function(...i){const r=()=>{clearTimeout(s),e(...i)};clearTimeout(s),s=setTimeout(r,n)}}function P(){window.innerWidth<767?o=8:(window.innerWidth<768,o=12)}async function k({filter:e,page:n=1,limit:s=12,type:t}){try{return(await E.get(`/${t}`,{params:{filter:e,page:n,limit:s}})).data}catch{console.error("Something wrong")}}async function g(){try{const e=await k({type:"filters",filter:C,limit:o,page:c}).then(n=>{const{page:s,totalPages:t,results:i}=n;if(l.innerHTML=w(i),u.innerHTML="",t>1){const r=S(s,t);u.innerHTML=r}})}catch{}}g();H.addEventListener("click",B);u.addEventListener("click",O);async function B(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;c=1;const s=e.target.dataset.filter;C=s,l.innerHTML="",Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("is-active"):t.classList.add("is-active")});try{k({type:"filters",filter:s,limit:o,page:c}).then(t=>{const{page:i,totalPages:r,results:d}=t;if(l.innerHTML=w(d),u.innerHTML="",r>1){const m=S(i,r);u.innerHTML=m}})}catch{}}function w(e){return e.map(({name:s,filter:t,imgUrl:i})=>`<li class="exercises-item">
          <a class="exercises-link" href="">
          <div class="image-container">
              <img class="exercises-image" src="${i}"/>
              <div class="text-container">
                <h3 class="exercises-title">${s}</h3>
                <p class="exercises-text">${t}</p>
              </div>
            </div>
          </a>
         </li>`).join("")}async function O(e){c=Number(e.target.textContent),console.log(c),Array.from(e.currentTarget.children).map(n=>{n.textContent!==c?n.classList.remove("is-active"):e.target.classList.add("is-active")}),l.innerHTML="";try{const{page:n,totalPages:s,results:t}=await g();if(n===s)return;l.innerHTML=w(t)}catch{console.error("Oops, something wrong")}}function S(e,n){let s="";for(let t=1;t<=n;t+=1)s+=`<button class="page is-active" type="button">${t}</button>`;return s}window.addEventListener("load",()=>{P(),g()});addEventListener("resize",A(()=>{const e=o;P(),e!==o&&g()},250));const M=document.querySelectorAll(".switch-item"),N=document.querySelector(".exercises-list"),b=document.querySelector(".exercises-page");let a=8,p=1;const U=768,z=1440;function R(e,n){let s;return function(...i){const r=()=>{clearTimeout(s),e(...i)};clearTimeout(s),s=setTimeout(r,n)}}function $(){window.innerWidth<U?a=8:(window.innerWidth<z,a=9)}async function W(e){try{return(await I({filter:e,type:"exercises"})).data}catch(n){throw new Error("Failed to fetch data from API: "+n.message)}}async function f(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}const n=e.textContent.trim().toLowerCase();if(!n){console.error("Query is undefined");return}const s=await W(n),t=Math.ceil(s.results.length/a);F(s.results.slice((p-1)*a,p*a)),s.results.length>a&&j(t)}catch(e){console.error("Error fetching and rendering data:",e)}}function j(e){if(!b){console.error("Pagination container not found");return}let n="";for(let t=1;t<=e;t++)n+=`<button class="page ${t===p?"is-active":""}">${t}</button>`;b.innerHTML=n,b.querySelectorAll(".page").forEach(t=>{t.addEventListener("click",()=>{p=parseInt(t.textContent),f()})})}async function F(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let n="";e.forEach(t=>{n+=D(t)}),N.innerHTML=n,document.querySelectorAll(".exercise-card").forEach(t=>{t.addEventListener("click",()=>{console.log("Clicked on exercise:",t.querySelector("h2").textContent)})})}catch(n){console.error("Error rendering exercise cards:",n)}}function D(e){return`
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
  </li>`}function V(){M.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),f()}M.forEach(e=>{e.addEventListener("click",V)});window.addEventListener("load",()=>{$(),f()});window.addEventListener("resize",R(()=>{const e=a;$(),e!==a&&f()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),n=document.querySelector(".bp-search-input"),s=document.querySelector(".bp-list"),t=document.querySelectorAll(".switch-item");let i=1,r=9,d="",m="";t.forEach(h=>{h.addEventListener("click",function(){t.forEach(v=>{v.classList.remove("is-active")}),this.classList.add("is-active"),d=this.textContent.trim()})}),e.addEventListener("submit",function(h){h.preventDefault();const v=n.value.trim().toLowerCase();s.innerHTML="",axios.get("/api/exercises",{params:{search:v,filter:d,subtype:m,page:i,limit:r}}).then(L=>{const x=L.data;x.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):x.forEach(q=>{const T=document.createElement("li");T.textContent=q.name,s.appendChild(T)})}).catch(L=>{})})});const J="https://energyflow.b.goit.study/api/subscription",y=document.querySelector("#subscribe-form");y.addEventListener("submit",async e=>{e.preventDefault();const n=y.elements.email.value;console.log(n);try{const s=await K(n);y.reset()}catch{console.log("error")}console.log(result)});async function K(e){return(await fetch(J,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
