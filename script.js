const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)],R=document.documentElement;
const setT=t=>{R.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
$('#theme').onclick=()=>setT(R.dataset.theme==='dark'?'light':'dark');
$('#burger').onclick=()=>$('#menu').classList.toggle('open');
$$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
$('#year').textContent=new Date().toLocaleDateString('fa-IR',{year:'numeric'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
$$('.track i',e.target).forEach(i=>i.style.width=i.dataset.w+'%');io.unobserve(e.target)}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
const lb=$('#lb'),li=$('#lbi'),lt=$('#lbt'),pv=$('#lbp'),nx=$('#lbn');let L=[],I=0,T='';
const show=()=>{li.hidden=0;li.src=L[I];lt.textContent=T+(L.length>1?` (${I+1}/${L.length})`:'');pv.hidden=nx.hidden=L.length<2};
const open=(l,i,t)=>{L=l;I=i;T=t||'';show();lb.showModal()},go=d=>{I=(I+d+L.length)%L.length;show()};
li.onerror=()=>{li.hidden=1;lt.textContent=T+' (تصویر هنوز اضافه نشده است)'};
pv.onclick=()=>go(-1);nx.onclick=()=>go(1);
lb.onclick=e=>{if(e.target===lb)lb.close()};
lb.onkeydown=e=>{if(e.key==='ArrowLeft')go(1);if(e.key==='ArrowRight')go(-1)};
document.addEventListener('click',e=>{const z=e.target.closest('[data-zoom]');if(z)open([z.dataset.zoom],0,z.dataset.t)});
$$('.gal').forEach(g=>{const n=g.dataset.n,t=$('h3',g.closest('article')).textContent,
srcs=[1,2,3,4,5,6].map(i=>`img/projects/${n}${i>1?'-'+i:''}.jpg`);
Promise.all(srcs.map(s=>new Promise(r=>{const m=new Image();m.onload=()=>r(s);m.onerror=()=>r(null);m.src=s}))).then(a=>{
const ok=a.filter(Boolean);if(!ok.length)return;const box=$('.shot',g),th=$('.thumbs',g);let cur=0;
const mi=new Image();mi.alt=t;box.append(mi);box.onclick=()=>open(ok,cur,t);
const set=i=>{cur=i;mi.src=ok[i];$$('img',th).forEach((x,j)=>x.classList.toggle('on',j===i))};
if(ok.length>1)ok.forEach((s,i)=>{const x=new Image();x.src=s;x.alt='';x.onclick=()=>set(i);th.append(x)});set(0)})});
$('#pdf').onclick=()=>{const d=document.title;document.title='رزومه مهدی لطیفی';
$$('.rv').forEach(e=>e.classList.add('in'));$$('.track i').forEach(i=>i.style.width=i.dataset.w+'%');
setTimeout(()=>print(),300);onafterprint=()=>document.title=d};
