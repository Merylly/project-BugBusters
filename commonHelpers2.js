import{c as T}from"./assets/modal-296c0c7e.js";import{a as y}from"./assets/vendor-7ae4b28f.js";y.defaults.baseURL="https://energyflow.b.goit.study/api";const E=document.querySelector(".switch-list"),L=document.querySelector(".exercises-list"),h=document.querySelector("#tui-pagination-container");let i=8,o=1,v="Muscles",C;E.addEventListener("click",I);function S(e,n){let t;return function(...r){const c=()=>{clearTimeout(t),e(...r)};clearTimeout(t),t=setTimeout(c,n)}}function w(){window.innerWidth<767?i=8:(window.innerWidth<768,i=12)}async function P({filter:e,page:n=1,limit:t=12,type:s}){try{return(await y.get(`/${s}`,{params:{filter:e,page:n,limit:t}})).data}catch{console.error("Something wrong")}}async function a(){try{const e=await P({type:"filters",filter:v,limit:i,page:o}),{page:n,totalPages:t,results:s}=e;L.innerHTML=$(s),h.innerHTML="",t>1&&(C=T(h,t,o,i,q))}catch{}}function q(e){o=e,a()}a();async function I(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;L.innerHTML="",o=1,v=e.target.dataset.filter,Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("is-active"):s.classList.add("is-active")});try{await a()}catch{console.error("oops")}}function $(e){return e.map(({name:t,filter:s,imgUrl:r})=>`<li class="exercises-item" data-filter="${s}" data-name="${t}">         
          <div class="image-container">
            <img class="exercises-image" src="${r}" alt="${s}"/>
            <div class="text-container">
              <h3 class="exercises-title">${t}</h3>
              <p class="exercises-text">${s}</p>
            </div>
          </div>
         </li>`).join("")}window.addEventListener("load",()=>{w(),a()});addEventListener("resize",S(()=>{const e=i;w(),e!==i&&a()},250));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("bp-form"),n=document.querySelector(".bp-search-input"),t=document.querySelector(".bp-list"),s=document.querySelectorAll(".switch-item");let r=1,c=9,m="",b="";s.forEach(l=>{l.addEventListener("click",function(){s.forEach(u=>{u.classList.remove("is-active")}),this.classList.add("is-active"),m=this.textContent.trim()})}),e.addEventListener("submit",function(l){l.preventDefault();const u=n.value.trim().toLowerCase();t.innerHTML="",axios.get("/api/exercises",{params:{search:u,filter:m,subtype:b,page:r,limit:c}}).then(p=>{const f=p.data;f.length===0?iziToast.error({title:"No Results",message:"",position:"topCenter",timeout:5e3,closeOnClick:!0}):f.forEach(x=>{const g=document.createElement("li");g.textContent=x.name,t.appendChild(g)})}).catch(p=>{})})});const M="https://energyflow.b.goit.study/api/subscription",d=document.querySelector("#subscribe-form");d.addEventListener("submit",async e=>{e.preventDefault();const n=d.elements.email.value;console.log(n);try{const t=await k(n);d.reset()}catch{console.log("error")}console.log(result)});async function k(e){return(await fetch(M,{body:JSON.stringify({email:e}),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})).json()}
//# sourceMappingURL=commonHelpers2.js.map
