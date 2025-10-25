// Smooth scroll for internal links and CTA click logging
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){e.preventDefault();const id=this.getAttribute('href').slice(1);const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});});
  });
  document.querySelectorAll('a[href*="amzn.to"]').forEach(a=>a.addEventListener('click', ()=>console.log('Affiliate CTA clicked — opening in new tab')));
});