/* empty css                      */import{a as m}from"./assets/vendor-0cb09735.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const M=document.querySelector(".js-open-menu"),I=document.querySelector(".modal"),T=document.querySelector(".close-modal"),p=()=>{I.classList.remove("open"),document.removeEventListener("keydown",p)};M.addEventListener("click",()=>{I.classList.add("open"),document.addEventListener("keydown",e=>{e.code==="Escape"&&p()})});T.addEventListener("click",()=>{p()});function $({filter:e,page:i=1,limit:o=12,type:s}){return m.get(`https://energyflow.b.goit.study/api/${s}`,{params:{filter:e,page:i,limit:o}})}const v="dateNow",E="quoteDay",O=document.querySelector(".description"),S=document.querySelector(".author-quote");function R(){const e=new Date,i=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,o=localStorage.getItem(v);if(o===i){const s=JSON.parse(localStorage.getItem(E));if(s){const{author:t,quote:n}=s;O.textContent=n,S.textContent=t}else L();return}(!o||o!==i)&&(localStorage.setItem(v,i),L())}function L(){$({type:"quote"}).then(({data:e})=>{const{author:i,quote:o}=e,s={author:i,quote:o};localStorage.setItem(E,JSON.stringify(s)),O.textContent=o,S.textContent=i}).catch(e=>{console.error("Error fetching quote:",e)})}R();m.defaults.baseURL="https://energyflow.b.goit.study/api";const N=document.querySelector(".switch-list"),g=document.querySelector(".exercises-list");document.querySelector(".exercises-page");let c;window.innerWidth<767?c=8:c=12;async function w({filter:e,page:i=1,limit:o=12,type:s}){try{return(await m.get(`/${s}`,{params:{filter:e,page:i,limit:o}})).data}catch{console.error("n")}}async function A(){try{const e=await w({type:"filters",filter:"Muscles",limit:c}).then(i=>{const{results:o}=i;g.innerHTML=C(o)})}catch{}}A();N.addEventListener("click",D);async function D(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;const o=e.target.dataset.filter;g.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("is-active"):s.classList.add("is-active")});try{w({type:"filters",filter:o,limit:c}).then(s=>{const{results:t}=s;g.innerHTML=C(t)})}catch{}}function C(e){return e.map(({name:o,filter:s,imgUrl:t})=>`<li class="exercises-item">
          <a class="exercises-link" href="">
          <div class="image-container">
              <img class="exercises-image" src="${t}"/>
              <div class="text-container">
                <h3 class="exercises-title">${o}</h3>
                <p class="exercises-text">${s}</p>
              </div>
            </div>
          </a>
         </li>`).join("")}let b=1;paginationContainer.addEventListener("click",function(e){e.target.classList.contains("page")&&(b=parseInt(e.target.textContent),renderPage(b))});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),i=document.querySelector(".bp-search-input"),o=document.querySelector(".bp-list"),s=document.querySelectorAll(".switch-item");let t=1,n=9,a="",q="";s.forEach(u=>{u.addEventListener("click",function(){s.forEach(f=>{f.classList.remove("is-active")}),this.classList.add("is-active"),a=this.textContent.trim()})}),e.addEventListener("submit",function(u){u.preventDefault();const f=i.value.trim().toLowerCase();o.innerHTML="",axios.get("/api/exercises",{params:{search:f,filter:a,subtype:q,page:t,limit:n}}).then(h=>{const y=h.data;y.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):y.forEach(k=>{const x=document.createElement("li");x.textContent=k.name,o.appendChild(x)})}).catch(h=>{})})});const l=document.querySelector(".add-to-favorites"),d=document.querySelector(".remove-from-favorites"),F=document.querySelector(".list-favorites"),r=JSON.parse(localStorage.getItem("favoriteExercise"));r?l.style.display="none":d.style.display="none";l.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(r)),F.innerHTML+=`
    <li class="item-favorites" data-id="${r._id}">
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
              <h3 class="ex-title">${r.name}</h3>
            </div>
            <ul class="list-ex-category">
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Burned calories: ${r.burnedCalories} </span
                  >200/ 3 min
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Body part: ${r.bodyPart}: </span>Waist
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Target: ${r.target}: </span>Abs
                </p>
              </li>
            </ul>
          </li>
    `,l.style.display="none",d.style.display="block"});d.addEventListener("click",()=>{const e=r._id,o=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(t=>t._id!==e);localStorage.setItem("favoriteExercise",JSON.stringify(o));const s=document.querySelector(`.item-favorites[data-id="${e}"]`);s&&s.remove(),d.style.display="none",l.style.display="block"});iziToast.warning({id:"email-exists",class:"email-exists",message:"this email is already registered, pls choose another one.",theme:"dark",messageSize:"18px",messageColor:"#1B1B1B99",backgroundColor:"#EEA10C",color:"#EEA10C",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.error({id:"wrong-search-data",class:"wrong-search-data",message:"pls, enter correct data.",theme:"dark",messageSize:"18px",messageColor:"white",backgroundColor:"#dd1e08",color:"#dd1e08",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.info({id:"found-nothing",class:"found-nothing",message:"we're sorry, but nothing was found for your request.",theme:"dark",messageSize:"18px",messageColor:"white",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.success({id:"enter-success",class:"enter-success",message:"Great! You have successfully subscribed.",messageColor:"#1b1b1b",messageSize:"18px",messageLineHeight:"1.2",backgroundColor:"#F6F6F6",color:"#F6F6F6",maxWidth:"390px",position:"topRight",timeout:5e3,transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",closeOnEscape:"true"});
//# sourceMappingURL=commonHelpers2.js.map
