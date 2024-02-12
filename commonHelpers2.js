/* empty css                      */import{a as p}from"./assets/vendor-0cb09735.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const T=document.querySelector(".js-open-menu"),E=document.querySelector(".modal"),$=document.querySelector(".close-modal"),h=()=>{E.classList.remove("open"),document.removeEventListener("keydown",h)};T.addEventListener("click",()=>{E.classList.add("open"),document.addEventListener("keydown",e=>{e.code==="Escape"&&h()})});$.addEventListener("click",()=>{h()});function R({filter:e,page:s=1,limit:n=12,type:o}){return p.get(`https://energyflow.b.goit.study/api/${o}`,{params:{filter:e,page:s,limit:n}})}const x="dateNow",I="quoteDay",O=document.querySelector(".description"),w=document.querySelector(".author-quote");function A(){const e=new Date,s=`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`,n=localStorage.getItem(x);if(n===s){const o=JSON.parse(localStorage.getItem(I));if(o){const{author:t,quote:i}=o;O.textContent=i,w.textContent=t}else L();return}(!n||n!==s)&&(localStorage.setItem(x,s),L())}function L(){R({type:"quote"}).then(({data:e})=>{const{author:s,quote:n}=e,o={author:s,quote:n};localStorage.setItem(I,JSON.stringify(o)),O.textContent=n,w.textContent=s}).catch(e=>{console.error("Error fetching quote:",e)})}A();p.defaults.baseURL="https://energyflow.b.goit.study/api";const N=document.querySelector(".switch-list"),g=document.querySelector(".exercises-list");document.querySelector(".exercises-page");let c;window.innerWidth<767?c=8:c=12;async function q({filter:e,page:s=1,limit:n=12,type:o}){try{return(await p.get(`/${o}`,{params:{filter:e,page:s,limit:n}})).data}catch{console.error("n")}}async function D(){try{const e=await q({type:"filters",filter:"Muscles",limit:c}).then(s=>{const{results:n}=s;g.innerHTML=C(n)})}catch{}}D();N.addEventListener("click",B);async function B(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;const n=e.target.dataset.filter;g.innerHTML="",Array.from(e.currentTarget.children).map(o=>{o.textContent!==e.target.textContent?o.classList.remove("is-active"):o.classList.add("is-active")});try{q({type:"filters",filter:n,limit:c}).then(o=>{const{results:t}=o;g.innerHTML=C(t)})}catch{}}function C(e){return e.map(({name:n,filter:o,imgUrl:t})=>`<li class="exercises-item">
          <a class="exercises-link" href="">
          <div class="image-container">
              <img class="exercises-image" src="${t}"/>
              <div class="text-container">
                <h3 class="exercises-title">${n}</h3>
                <p class="exercises-text">${o}</p>
              </div>
            </div>
          </a>
         </li>`).join("")}let S=1;paginationContainer.addEventListener("click",function(e){e.target.classList.contains("page")&&(S=parseInt(e.target.textContent),renderPage(S))});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),s=document.querySelector(".bp-search-input"),n=document.querySelector(".bp-list"),o=document.querySelectorAll(".switch-item");let t=1,i=9,a="",k="";o.forEach(d=>{d.addEventListener("click",function(){o.forEach(m=>{m.classList.remove("is-active")}),this.classList.add("is-active"),a=this.textContent.trim()})}),e.addEventListener("submit",function(d){d.preventDefault();const m=s.value.trim().toLowerCase();n.innerHTML="",axios.get("/api/exercises",{params:{search:m,filter:a,subtype:k,page:t,limit:i}}).then(y=>{const b=y.data;b.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):b.forEach(M=>{const v=document.createElement("li");v.textContent=M.name,n.appendChild(v)})}).catch(y=>{})})});const l=document.querySelector(".add-to-favorites"),u=document.querySelector(".remove-from-favorites"),F=document.querySelector(".list-favorites"),r=JSON.parse(localStorage.getItem("favoriteExercise"));r?l.style.display="none":u.style.display="none";l.addEventListener("click",()=>{localStorage.setItem("favoriteExercise",JSON.stringify(r)),F.innerHTML+=`
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
    `,l.style.display="none",u.style.display="block"});u.addEventListener("click",()=>{const e=r._id,n=(JSON.parse(localStorage.getItem("favoriteExercise"))||[]).filter(t=>t._id!==e);localStorage.setItem("favoriteExercise",JSON.stringify(n));const o=document.querySelector(`.item-favorites[data-id="${e}"]`);o&&o.remove(),u.style.display="none",l.style.display="block"});const P=document.querySelector(".bp-start-button");document.querySelector(".backdrop");document.querySelector(".modal-close-btn");P.addEventListener("click",z);function z(){console.log("fhfgh")}iziToast.warning({id:"email-exists",class:"email-exists",message:"this email is already registered, pls choose another one.",theme:"dark",messageSize:"18px",messageColor:"#1B1B1B99",backgroundColor:"#EEA10C",color:"#EEA10C",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.error({id:"wrong-search-data",class:"wrong-search-data",message:"pls, enter correct data.",theme:"dark",messageSize:"18px",messageColor:"white",backgroundColor:"#dd1e08",color:"#dd1e08",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.info({id:"found-nothing",class:"found-nothing",message:"we're sorry, but nothing was found for your request.",theme:"dark",messageSize:"18px",messageColor:"white",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"});iziToast.success({id:"enter-success",class:"enter-success",message:"Great! You have successfully subscribed.",messageColor:"#1b1b1b",messageSize:"18px",messageLineHeight:"1.2",backgroundColor:"#F6F6F6",color:"#F6F6F6",maxWidth:"390px",position:"topRight",timeout:5e3,transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",closeOnEscape:"true"});const _="https://energyflow.b.goit.study/api/subscription",f=document.querySelector("#subscribe-form");f.addEventListener("submit",async e=>{e.preventDefault();const s=f.elements.email.value;console.log(s);try{const n=await J(s);f.reset()}catch{console.log("error")}console.log(result)});async function J(e){return(await fetch(_,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
