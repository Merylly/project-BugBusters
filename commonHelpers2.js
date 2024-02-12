/* empty css                      */import{a as E}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const S=document.querySelector(".js-open-menu"),v=document.querySelector(".modal"),C=document.querySelector(".close-modal"),m=()=>{v.classList.remove("open"),document.removeEventListener("keydown",m)};S.addEventListener("click",()=>{v.classList.add("open"),document.addEventListener("keydown",t=>{t.code==="Escape"&&m()})});C.addEventListener("click",()=>{m()});function w({filter:t,page:o=1,limit:s=12,type:i}){return E.get(`https://energyflow.b.goit.study/api/${i}`,{params:{filter:t,page:o,limit:s}})}const h="dateNow",b="quoteDay",x=document.querySelector(".description"),I=document.querySelector(".author-quote");function q(){const t=new Date,o=`${t.getDate()}.${t.getMonth()+1}.${t.getFullYear()}`,s=localStorage.getItem(h);if(s===o){const i=JSON.parse(localStorage.getItem(b));if(i){const{author:e,quote:n}=i;x.textContent=n,I.textContent=e}else y();return}(!s||s!==o)&&(localStorage.setItem(h,o),y())}function y(){w({type:"quote"}).then(({data:t})=>{const{author:o,quote:s}=t,i={author:o,quote:s};localStorage.setItem(b,JSON.stringify(i)),x.textContent=s,I.textContent=o}).catch(t=>{console.error("Error fetching quote:",t)})}q();document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("bp-form"),o=document.querySelector(".bp-search-input"),s=document.querySelector(".bp-list"),i=document.querySelectorAll(".switch-item");let e=1,n=9,a="",L="";i.forEach(d=>{d.addEventListener("click",function(){i.forEach(u=>{u.classList.remove("is-active")}),this.classList.add("is-active"),a=this.textContent.trim()})}),t.addEventListener("submit",function(d){d.preventDefault();const u=o.value.trim().toLowerCase();s.innerHTML="",axios.get("/api/exercises",{params:{search:u,filter:a,subtype:L,page:e,limit:n}}).then(f=>{const g=f.data;g.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):g.forEach(O=>{const p=document.createElement("li");p.textContent=O.name,s.appendChild(p)})}).catch(f=>{})})});const c=document.querySelector(".add-to-favorites"),l=document.querySelector(".remove-from-favorites"),k=document.querySelector(".list-favorites"),r=JSON.parse(localStorage.getItem("favoriteExercise"));r?c.style.display="none":l.style.display="none";c.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(r)),k.innerHTML+=`
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
    `,c.style.display="none",l.style.display="block"});l.addEventListener("click",()=>{const t=r._id,s=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(e=>e._id!==t);localStorage.setItem("favoriteExercise",JSON.stringify(s));const i=document.querySelector(`.item-favorites[data-id="${t}"]`);i&&i.remove(),l.style.display="none",c.style.display="block"});iziToast.warning({id:"email-exists",class:"email-exists",message:"this email is already registered, pls choose another one.",theme:"dark",messageSize:"18px",messageColor:"#1B1B1B99",backgroundColor:"#EEA10C",color:"#EEA10C",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.error({id:"wrong-search-data",class:"wrong-search-data",message:"pls, enter correct data.",theme:"dark",messageSize:"18px",messageColor:"white",backgroundColor:"#dd1e08",color:"#dd1e08",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.info({id:"found-nothing",class:"found-nothing",message:"we're sorry, but nothing was found for your request.",theme:"dark",messageSize:"18px",messageColor:"white",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.success({id:"enter-success",class:"enter-success",message:"Great! You have successfully subscribed.",messageColor:"#1b1b1b",messageSize:"18px",messageLineHeight:"1.2",backgroundColor:"#F6F6F6",color:"#F6F6F6",maxWidth:"390px",position:"topRight",timeout:5e3,transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",closeOnEscape:"true"});
//# sourceMappingURL=commonHelpers2.js.map
