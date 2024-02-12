import{a as p}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function h({filter:t,page:o=1,limit:i=12,type:r}){return p.get(`https://energyflow.b.goit.study/api/${r}`,{params:{filter:t,page:o,limit:i}})}const u="dateNow",g="quoteDay",f=document.querySelector(".description"),m=document.querySelector(".author-quote");function y(){const t=new Date,o=`${t.getDate()}.${t.getMonth()+1}.${t.getFullYear()}`,i=localStorage.getItem(u);if(i===o){const r=JSON.parse(localStorage.getItem(g));if(r){const{author:e,quote:s}=r;f.textContent=s,m.textContent=e}else d();return}(!i||i!==o)&&(localStorage.setItem(u,o),d())}function d(){h({type:"quote"}).then(({data:t})=>{const{author:o,quote:i}=t,r={author:o,quote:i};localStorage.setItem(g,JSON.stringify(r)),f.textContent=i,m.textContent=o}).catch(t=>{console.error("Error fetching quote:",t)})}y();const a=document.querySelector(".add-to-favorites"),c=document.querySelector(".remove-from-favorites"),x=document.querySelector(".list-favorites"),n=JSON.parse(localStorage.getItem("favoriteExercise"));n?a.style.display="none":c.style.display="none";a.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(n)),x.innerHTML+=`
    <li class="item-favorites" data-id="${n._id}">
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
              <h3 class="ex-title">${n.name}</h3>
            </div>
            <ul class="list-ex-category">
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Burned calories: ${n.burnedCalories} </span
                  >200/ 3 min
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Body part: ${n.bodyPart}: </span>Waist
                </p>
              </li>
              <li>
                <p class="category-text">
                  <span class="category-text-accent">Target: ${n.target}: </span>Abs
                </p>
              </li>
            </ul>
          </li>
    `,a.style.display="none",c.style.display="block"});c.addEventListener("click",()=>{const t=n._id,i=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(e=>e._id!==t);localStorage.setItem("favoriteExercise",JSON.stringify(i));const r=document.querySelector(`.item-favorites[data-id="${t}"]`);r&&r.remove(),c.style.display="none",a.style.display="block"});const b=document.querySelector(".bp-start-button");document.querySelector(".backdrop");document.querySelector(".modal-close-btn");b.addEventListener("click",v);function v(){console.log("fhfgh")}iziToast.warning({id:"email-exists",class:"email-exists",message:"this email is already registered, pls choose another one.",theme:"dark",messageSize:"18px",messageColor:"#1B1B1B99",backgroundColor:"#EEA10C",color:"#EEA10C",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.error({id:"wrong-search-data",class:"wrong-search-data",message:"pls, enter correct data.",theme:"dark",messageSize:"18px",messageColor:"white",backgroundColor:"#dd1e08",color:"#dd1e08",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.info({id:"found-nothing",class:"found-nothing",message:"we're sorry, but nothing was found for your request.",theme:"dark",messageSize:"18px",messageColor:"white",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.success({id:"enter-success",class:"enter-success",message:"Great! You have successfully subscribed.",messageColor:"#1b1b1b",messageSize:"18px",messageLineHeight:"1.2",backgroundColor:"#F6F6F6",color:"#F6F6F6",maxWidth:"390px",position:"topRight",timeout:5e3,transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",closeOnEscape:"true"});export{h as g};
//# sourceMappingURL=messages-02370149.js.map
