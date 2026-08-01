const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);menuButton.textContent=open?'×':'☰'});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}));

const preview=document.querySelector('#app-preview');
const appTitle=document.querySelector('#app-title');
const appCopy=document.querySelector('#app-copy');
document.querySelectorAll('.app-tab').forEach(tab=>tab.addEventListener('click',()=>{
  document.querySelectorAll('.app-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  preview.style.opacity='0';
  setTimeout(()=>{preview.src=tab.dataset.image;preview.alt=tab.dataset.alt;appTitle.textContent=tab.dataset.title;appCopy.textContent=tab.dataset.copy;preview.style.opacity='1'},180);
}));
preview.style.transition='opacity .2s ease';

const modal=document.querySelector('#gallery-modal');
const modalImage=document.querySelector('#modal-image');
const modalCaption=document.querySelector('#modal-caption');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{modalImage.src=item.dataset.src;modalImage.alt=item.dataset.caption;modalCaption.textContent=item.dataset.caption;modal.showModal()}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const form=document.querySelector('#booking-form');
const message=document.querySelector('#form-message');
form.addEventListener('submit',e=>{e.preventDefault();const name=new FormData(form).get('nombre');message.textContent=`¡Gracias, ${name}! Tu solicitud de demostración fue registrada.`;form.reset()});

document.querySelectorAll('[data-scroll]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector(btn.dataset.scroll).scrollIntoView({behavior:'smooth'})));
document.querySelector('#year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.13});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
