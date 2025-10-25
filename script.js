document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){e.preventDefault();const id=this.getAttribute('href').slice(1);const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});});
  });
  // log affiliate clicks locally
  document.querySelectorAll('a[href*="amzn.to"]').forEach(a=>a.addEventListener('click', ()=>console.log('Affiliate CTA clicked — opening in new tab')));
});