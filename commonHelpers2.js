/* empty css                      */import{a as v}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();function I({filter:e,page:t=1,limit:o=12,type:s}){return v.get(`https://energyflow.b.goit.study/api/${s}`,{params:{filter:e,page:t,limit:o}})}const S="dateNow",C="quoteDay",O=document.querySelector(".description"),k=document.querySelector(".author-quote");function B(){const e=new Date,t=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,o=localStorage.getItem(S);if(o===t){const s=JSON.parse(localStorage.getItem(C));if(s){const{author:n,quote:i}=s;O.textContent=i,k.textContent=n}else E();return}(!o||o!==t)&&(localStorage.setItem(S,t),E())}function E(){I({type:"quote"}).then(({data:e})=>{const{author:t,quote:o}=e,s={author:t,quote:o};localStorage.setItem(C,JSON.stringify(s)),O.textContent=o,k.textContent=t}).catch(e=>{console.error("Error fetching quote:",e)})}B();v.defaults.baseURL="https://energyflow.b.goit.study/api";const R=document.querySelector(".switch-list"),b=document.querySelector(".exercises-list");document.querySelector(".exercises-page");let l;window.innerWidth<767?l=8:l=12;async function q({filter:e,page:t=1,limit:o=12,type:s}){try{return(await v.get(`/${s}`,{params:{filter:e,page:t,limit:o}})).data}catch{console.error("n")}}async function N(){try{const e=await q({type:"filters",filter:"Muscles",limit:l}).then(t=>{const{results:o}=t;b.innerHTML=T(o)})}catch{}}N();R.addEventListener("click",F);async function F(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;const o=e.target.dataset.filter;b.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("is-active"):s.classList.add("is-active")});try{q({type:"filters",filter:o,limit:l}).then(s=>{const{results:n}=s;b.innerHTML=T(n)})}catch{}}function T(e){return e.map(({name:o,filter:s,imgUrl:n})=>`<li class="exercises-item">
          <a class="exercises-link" href="">
          <div class="image-container">
              <img class="exercises-image" src="${n}"/>
              <div class="text-container">
                <h3 class="exercises-title">${o}</h3>
                <p class="exercises-text">${s}</p>
              </div>
            </div>
          </a>
         </li>`).join("")}const $=document.querySelectorAll(".switch-item"),z=document.querySelector(".exercises-list"),h=document.querySelector(".exercises-page");let r=8,u=1;const D=768,W=1440;function H(e,t){let o;return function(...n){const i=()=>{clearTimeout(o),e(...n)};clearTimeout(o),o=setTimeout(i,t)}}function M(){window.innerWidth<D?r=8:(window.innerWidth<W,r=9)}async function _(e){try{return(await I({filter:e,type:"exercises"})).data}catch(t){throw new Error("Failed to fetch data from API: "+t.message)}}async function f(){try{const e=document.querySelector(".switch-item.is-active");if(!e){console.error("No active container found");return}const t=e.textContent.trim().toLowerCase();if(!t){console.error("Query is undefined");return}const o=await _(t),s=Math.ceil(o.results.length/r);U(o.results.slice((u-1)*r,u*r)),o.results.length>r&&J(s)}catch(e){console.error("Error fetching and rendering data:",e)}}function J(e){if(!h){console.error("Pagination container not found");return}let t="";for(let s=1;s<=e;s++)t+=`<button class="page ${s===u?"is-active":""}">${s}</button>`;h.innerHTML=t,h.querySelectorAll(".page").forEach(s=>{s.addEventListener("click",()=>{u=parseInt(s.textContent),f()})})}async function U(e){try{if(!e||e.length===0){console.log("No exercise data to render");return}console.log("Rendering exercise cards with data:",e);let t="";e.forEach(s=>{t+=j(s)}),z.innerHTML=t,document.querySelectorAll(".exercise-card").forEach(s=>{s.addEventListener("click",()=>{console.log("Clicked on exercise:",s.querySelector("h2").textContent)})})}catch(t){console.error("Error rendering exercise cards:",t)}}function j(e){return`
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
  </li>`}function K(){$.forEach(e=>e.classList.remove("is-active")),this.classList.add("is-active"),f()}$.forEach(e=>{e.addEventListener("click",K)});window.addEventListener("load",()=>{M(),f()});window.addEventListener("resize",H(()=>{const e=r;M(),e!==r&&f()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),t=document.querySelector(".bp-search-input"),o=document.querySelector(".bp-list"),s=document.querySelectorAll(".switch-item");let n=1,i=9,c="",P="";s.forEach(g=>{g.addEventListener("click",function(){s.forEach(m=>{m.classList.remove("is-active")}),this.classList.add("is-active"),c=this.textContent.trim()})}),e.addEventListener("submit",function(g){g.preventDefault();const m=t.value.trim().toLowerCase();o.innerHTML="",axios.get("/api/exercises",{params:{search:m,filter:c,subtype:P,page:n,limit:i}}).then(x=>{const w=x.data;w.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):w.forEach(A=>{const L=document.createElement("li");L.textContent=A.name,o.appendChild(L)})}).catch(x=>{})})});const d=document.querySelector(".add-to-favorites"),p=document.querySelector(".remove-from-favorites"),Q=document.querySelector(".list-favorites"),a=JSON.parse(localStorage.getItem("favoriteExercise"));a?d.style.display="none":p.style.display="none";d.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(a)),Q.innerHTML+=`
    <li class="item-favorites" data-id="${a._id}">
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
              <h3 class="ex-title">${a.name}</h3>
            </div>
            <ul class="list-ex-category">
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Burned calories: ${a.burnedCalories} </span
                  >200/ 3 min
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Body part: ${a.bodyPart}: </span>Waist
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Target: ${a.target}: </span>Abs
                </p>
              </li>
            </ul>
          </li>
    `,d.style.display="none",p.style.display="block"});p.addEventListener("click",()=>{const e=a._id,o=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(n=>n._id!==e);localStorage.setItem("favoriteExercise",JSON.stringify(o));const s=document.querySelector(`.item-favorites[data-id="${e}"]`);s&&s.remove(),p.style.display="none",d.style.display="block"});const Y=document.querySelector(".bp-start-button");document.querySelector(".backdrop");document.querySelector(".modal-close-btn");Y.addEventListener("click",V);function V(){console.log("fhfgh")}iziToast.warning({id:"email-exists",class:"email-exists",message:"this email is already registered, pls choose another one.",theme:"dark",messageSize:"18px",messageColor:"#1B1B1B99",backgroundColor:"#EEA10C",color:"#EEA10C",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.error({id:"wrong-search-data",class:"wrong-search-data",message:"pls, enter correct data.",theme:"dark",messageSize:"18px",messageColor:"white",backgroundColor:"#dd1e08",color:"#dd1e08",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.info({id:"found-nothing",class:"found-nothing",message:"we're sorry, but nothing was found for your request.",theme:"dark",messageSize:"18px",messageColor:"white",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.success({id:"enter-success",class:"enter-success",message:"Great! You have successfully subscribed.",messageColor:"#1b1b1b",messageSize:"18px",messageLineHeight:"1.2",backgroundColor:"#F6F6F6",color:"#F6F6F6",maxWidth:"390px",position:"topRight",timeout:5e3,transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",closeOnEscape:"true"});const G="https://energyflow.b.goit.study/api/subscription",y=document.querySelector("#subscribe-form");y.addEventListener("submit",async e=>{e.preventDefault();const t=y.elements.email.value;console.log(t);try{const o=await X(t);y.reset()}catch{console.log("error")}console.log(result)});async function X(e){return(await fetch(G,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
