// script.js - small enhancements
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links if needed in future
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  // Track clicks on CTA (basic)
  const ctas = document.querySelectorAll('a[href*="amzn.to"]');
  ctas.forEach(btn=>{
    btn.addEventListener('click', ()=> {
      console.info('Affiliate CTA clicked — opening in new tab.');
    });
  });
});
