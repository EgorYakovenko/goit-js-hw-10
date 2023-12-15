import"./assets/modulepreload-polyfill-ec808ebb.js";import{f}from"./assets/vendor-651d7991.js";function s(t){return String(t).padStart(2,"0")}function r(t){const n=new Date().getTime(),e=t-n;if(e<0)return iziToast.error({title:"Error",message:"Please choose a date in the future",maxWidth:"500px",position:"topRight",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",color:"red"}),null;const o=h(e);return{days:s(o.days),hours:s(o.hours),minutes:s(o.minutes),seconds:s(o.seconds)}}function h(t){const i=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4),m=Math.floor(t%6e4/1e3);return{days:i,hours:d,minutes:l,seconds:m}}const a=document.getElementById("datetime-picker");f(a,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:t=>{const n=t[0].getTime(),e=document.querySelector("[data-start]");r(n)?e.disabled=!1:e.disabled=!0}});const c=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),L=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");c.disabled=!0;let u;c.addEventListener("click",()=>{const t=new Date(a.value).getTime();r(t)&&(c.disabled=!0,a.disabled=!0,u=setInterval(()=>{const e=r(t);e?(y.textContent=e.days,g.textContent=e.hours,L.textContent=e.minutes,p.textContent=e.seconds):clearInterval(u)},1e3))});
//# sourceMappingURL=commonHelpers.js.map
