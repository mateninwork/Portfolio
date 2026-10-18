/* Gallery photos: add your trip pictures to assets/gallery/ and list them here.
   src: path to the image, place: shown as the caption, year: optional. */
const trips=[
  {src:'',place:'[City, Country]',year:'20XX'},
  {src:'',place:'[City, Country]',year:'20XX'},
  {src:'',place:'[City, Country]',year:'20XX'},
  {src:'',place:'[City, Country]',year:'20XX'},
  {src:'',place:'[City, Country]',year:'20XX'},
  {src:'',place:'[City, Country]',year:'20XX'},
];
const gallery=document.getElementById('gallery');
if(gallery){const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));gallery.innerHTML=trips.map((t,i)=>`<figure class="gallery-item${t.src?'':(i%3===0?' tall':'')}">${t.src?`<img src="${esc(t.src)}" alt="${esc(t.place)}" loading="lazy"/>`:'<div class="gallery-placeholder" aria-hidden="true">Photo to add</div>'}<figcaption><span>${esc(t.place)}</span>${t.year?`<span>${esc(t.year)}</span>`:''}</figcaption></figure>`).join('');}
