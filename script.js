// Simple enhancements: smooth scroll for internal links and subtle CTA focus handling.
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // optional: track CTA clicks in the console for quick local testing
  const ctas = document.querySelectorAll('a[href*="amzn.to"]');
  ctas.forEach(c=>{
    c.addEventListener('click', ()=> console.log('Affiliate CTA clicked — opening in new tab'));
  });
});
