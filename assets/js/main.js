const menuButton=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰'});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.service-card,.section-head,.about-grid,.expertise-grid,.contact-grid').forEach(el=>{el.classList.add('reveal');observer.observe(el)});

// Expand actual project photographs; placeholders are intentionally not clickable.
const lightbox=document.getElementById('gallery-lightbox');const lightboxImage=lightbox.querySelector('img');const closeLightbox=lightbox.querySelector('.lightbox-close');let previousFocus=null;
document.querySelectorAll('.gallery-photo[data-image]').forEach(button=>button.addEventListener('click',()=>{previousFocus=document.activeElement;lightboxImage.src=button.dataset.image;lightboxImage.alt=button.querySelector('img').alt;lightbox.hidden=false;document.body.style.overflow='hidden';closeLightbox.focus()}));
function hideLightbox(){lightbox.hidden=true;lightboxImage.removeAttribute('src');document.body.style.overflow='';previousFocus?.focus()}
closeLightbox.addEventListener('click',hideLightbox);lightbox.addEventListener('click',event=>{if(event.target===lightbox)hideLightbox()});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!lightbox.hidden)hideLightbox()});


// Static GitHub Pages enquiry: open user's email client (no server-side submission).
document.getElementById('enquiry-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = this.querySelector('[name="name"]').value.trim();
  const email = this.querySelector('[name="email"]').value.trim();
  const message = this.querySelector('[name="message"]').value.trim();
  if (!name || !email || !message) return;
  const subject = encodeURIComponent('Project enquiry from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nProject details:\n' + message);
  window.location.href = 'mailto:ajeesh@redwingautomation.com?subject=' + subject + '&body=' + body;
});
