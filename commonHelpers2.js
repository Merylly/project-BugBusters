/* empty css                      */import{a as p}from"./assets/vendor-0cb09735.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function C({filter:e,page:s=1,limit:i=12,type:o}){return p.get(`https://energyflow.b.goit.study/api/${o}`,{params:{filter:e,page:s,limit:i}})}const b="dateNow",L="quoteDay",S=document.querySelector(".description"),I=document.querySelector(".author-quote");function T(){const e=new Date,s=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,i=localStorage.getItem(b);if(i===s){const o=JSON.parse(localStorage.getItem(L));if(o){const{author:t,quote:r}=o;S.textContent=r,I.textContent=t}else v();return}(!i||i!==s)&&(localStorage.setItem(b,s),v())}function v(){C({type:"quote"}).then(({data:e})=>{const{author:s,quote:i}=e,o={author:s,quote:i};localStorage.setItem(L,JSON.stringify(o)),S.textContent=i,I.textContent=s}).catch(e=>{console.error("Error fetching quote:",e)})}T();p.defaults.baseURL="https://energyflow.b.goit.study/api";const k=document.querySelector(".switch-list"),m=document.querySelector(".exercises-list");document.querySelector(".exercises-page");let c;window.innerWidth<767?c=8:c=12;async function O({filter:e,page:s=1,limit:i=12,type:o}){try{return(await p.get(`/${o}`,{params:{filter:e,page:s,limit:i}})).data}catch{console.error("n")}}async function M(){try{const e=await O({type:"filters",filter:"Muscles",limit:c}).then(s=>{const{results:i}=s;m.innerHTML=E(i)})}catch{}}M();k.addEventListener("click",$);async function $(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;const i=e.target.dataset.filter;m.innerHTML="",Array.from(e.currentTarget.children).map(o=>{o.textContent!==e.target.textContent?o.classList.remove("is-active"):o.classList.add("is-active")});try{O({type:"filters",filter:i,limit:c}).then(o=>{const{results:t}=o;m.innerHTML=E(t)})}catch{}}function E(e){return e.map(({name:i,filter:o,imgUrl:t})=>`<li class="exercises-item">
          <a class="exercises-link" href="">
          <div class="image-container">
              <img class="exercises-image" src="${t}"/>
              <div class="text-container">
                <h3 class="exercises-title">${i}</h3>
                <p class="exercises-text">${o}</p>
              </div>
            </div>
          </a>
         </li>`).join("")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),s=document.querySelector(".bp-search-input"),i=document.querySelector(".bp-list"),o=document.querySelectorAll(".switch-item");let t=1,r=9,a="",w="";o.forEach(d=>{d.addEventListener("click",function(){o.forEach(f=>{f.classList.remove("is-active")}),this.classList.add("is-active"),a=this.textContent.trim()})}),e.addEventListener("submit",function(d){d.preventDefault();const f=s.value.trim().toLowerCase();i.innerHTML="",axios.get("/api/exercises",{params:{search:f,filter:a,subtype:w,page:t,limit:r}}).then(h=>{const y=h.data;y.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):y.forEach(q=>{const x=document.createElement("li");x.textContent=q.name,i.appendChild(x)})}).catch(h=>{})})});const l=document.querySelector(".add-to-favorites"),u=document.querySelector(".remove-from-favorites"),R=document.querySelector(".list-favorites"),n=JSON.parse(localStorage.getItem("favoriteExercise"));n?l.style.display="none":u.style.display="none";l.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(n)),R.innerHTML+=`
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
    `,l.style.display="none",u.style.display="block"});u.addEventListener("click",()=>{const e=n._id,i=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(t=>t._id!==e);localStorage.setItem("favoriteExercise",JSON.stringify(i));const o=document.querySelector(`.item-favorites[data-id="${e}"]`);o&&o.remove(),u.style.display="none",l.style.display="block"});const A=document.querySelector(".bp-start-button");document.querySelector(".backdrop");document.querySelector(".modal-close-btn");A.addEventListener("click",N);function N(){console.log("fhfgh")}iziToast.warning({id:"email-exists",class:"email-exists",message:"this email is already registered, pls choose another one.",theme:"dark",messageSize:"18px",messageColor:"#1B1B1B99",backgroundColor:"#EEA10C",color:"#EEA10C",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.error({id:"wrong-search-data",class:"wrong-search-data",message:"pls, enter correct data.",theme:"dark",messageSize:"18px",messageColor:"white",backgroundColor:"#dd1e08",color:"#dd1e08",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.info({id:"found-nothing",class:"found-nothing",message:"we're sorry, but nothing was found for your request.",theme:"dark",messageSize:"18px",messageColor:"white",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.success({id:"enter-success",class:"enter-success",message:"Great! You have successfully subscribed.",messageColor:"#1b1b1b",messageSize:"18px",messageLineHeight:"1.2",backgroundColor:"#F6F6F6",color:"#F6F6F6",maxWidth:"390px",position:"topRight",timeout:5e3,transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",closeOnEscape:"true"});const D="https://energyflow.b.goit.study/api/subscription",g=document.querySelector("#subscribe-form");g.addEventListener("submit",async e=>{e.preventDefault();const s=g.elements.email.value;console.log(s);try{const i=await B(s);g.reset()}catch{console.log("error")}console.log(result)});async function B(e){return(await fetch(D,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
