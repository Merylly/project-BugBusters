import{c as C,p as S}from"./assets/modal-46f9d694.js";import{i as g,a as L}from"./assets/vendor-8c2391c4.js";function y(){g.warning({id:"email-exists",class:"email-exists",message:"this email is already registered, pls choose another one.",theme:"dark",messageSize:"18px",messageColor:"#1B1B1B99",backgroundColor:"#EEA10C",color:"#EEA10C",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"})}function M(){g.error({id:"wrong-search-data",class:"wrong-search-data",message:"pls, enter correct data.",theme:"dark",messageSize:"18px",messageColor:"white",backgroundColor:"#dd1e08",color:"#dd1e08",position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",maxWidth:"390px",timeout:5e3,closeOnEscape:"true"})}function T(){g.success({id:"enter-success",class:"enter-success",message:"Great! You have successfully subscribed.",messageColor:"#1b1b1b",messageSize:"18px",messageLineHeight:"1.2",backgroundColor:"#F6F6F6",color:"#F6F6F6",maxWidth:"390px",position:"topRight",timeout:5e3,transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",transitionInMobile:"fadeInLeft",transitionInMobile:"fadeOutRight",closeOnEscape:"true"})}L.defaults.baseURL="https://energyflow.b.goit.study/api";const q=document.querySelector(".switch-list"),b=document.querySelector(".exercises-list"),h=document.querySelector("#tui-pagination-container"),O=document.querySelector(".bp-form-wraper");let l=8,u=1,v="Muscles",k;q.addEventListener("click",z);function A(e,s){let n;return function(...r){const m=()=>{clearTimeout(n),e(...r)};clearTimeout(n),n=setTimeout(m,s)}}function x(){window.innerWidth<768?l=8:l=12}async function F({filter:e,page:s=1,limit:n=12,type:i}){try{return(await L.get(`/${i}`,{params:{filter:e,page:s,limit:n}})).data}catch{console.error("Something wrong")}}async function d(){O.classList.add("visually-hidden");try{const{page:e,totalPages:s,results:n}=await F({type:"filters",filter:v,limit:l,page:u});b.innerHTML=P(n),h.innerHTML="",s>1&&(k=C(h,s,u,l,R))}catch{}}function R(e){u=e,d()}async function z(e){if(e.preventDefault(),e.target.tagName!=="BUTTON")return;b.innerHTML="",u=1,v=e.target.dataset.filter,Array.from(e.currentTarget.children).map(i=>{i.textContent!==e.target.textContent?i.classList.remove("is-active"):i.classList.add("is-active")});try{await d()}catch{console.error("oops")}}function P(e){return e.map(({name:n,filter:i,imgUrl:r})=>`<li class="exercises-item" data-filter="${i}" data-name="${n}">         
          <div class="image-container">
            <img class="exercises-image" src="${r}" alt="${i}"/>
            <div class="text-container">
              <h3 class="exercises-title">${n}</h3>
              <p class="exercises-text">${i}</p>
            </div>
          </div>
         </li>`).join("")}window.addEventListener("load",()=>{x(),d()});addEventListener("resize",A(()=>{const e=l;x(),e!==l&&d()},250));document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelectorAll(".switch-item"),s=document.querySelector(".exercises-list"),n=document.querySelector(".bp-list"),i=document.querySelector(".bp-form-wraper"),r=document.querySelector(".bp-search-input");for(let t=0;t<e.length;t++)e[t].addEventListener("click",async function(){e[t].dataset.filter,m();const a=r.value.trim().toLowerCase();f("Muscles","All",a)});function m(){n.innerHTML=""}function f(t,a,c){const o=Array.from(n.children).filter(I=>I.textContent.toLowerCase().includes(c));o.length===0?w("Вправ не знайдено"):E(o,n)}function w(t){s.innerHTML=`<li>${t}</li>`}function E(t,a){a.innerHTML="";for(let c=0;c<t.length;c++){const o=document.createElement("li");o.textContent=t[c].textContent,o.addEventListener("click",function(){i.classList.remove("visually-hidden")}),a.appendChild(o)}}r.addEventListener("input",function(){const t=r.value.trim().toLowerCase();f("Muscles","All",t)}),document.getElementById("bp-form").addEventListener("submit",function(t){t.preventDefault();const a=document.querySelector(".switch-item.is-active").dataset.filter,c="All",o=r.value.trim().toLowerCase();f(a,c,o)}),s.addEventListener("click",function(t){t.target.closest(".exercises-item")&&(t.preventDefault(),i.classList.remove("visually-hidden"))}),e.forEach(t=>{t.addEventListener("click",function(){n.classList.contains("visually-hidden")||s.classList.remove("visually-hidden")})})});const p=document.querySelector("#subscribe-form"),$=document.querySelector("#footer-input"),H=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;p.addEventListener("submit",async e=>{e.preventDefault();const s=p.elements.email.value.trim().toLowerCase();if(!s.match(H)){$.style.borderColor="red",y();return}await B(s)&&T(),p.reset()});async function B(e){try{return await S({email:e},"subscription")}catch(s){if(s.response.status===409){y();return}M()}}
//# sourceMappingURL=commonHelpers2.js.map
