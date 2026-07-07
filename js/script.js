
//const BASE_PATH = '';
document.addEventListener('DOMContentLoaded', () => {
    const parts = window.location.pathname.split('/');
    const currentLang = parts[2]; // de, en, fr

    document.querySelectorAll('.lang').forEach(el => {
        el.classList.toggle(
            'active',
            el.dataset.lang === currentLang
        );
    });
});
document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', () => {
    const lang = el.dataset.lang;

    // aktive Klasse setzen
    document.querySelectorAll('.lang').forEach(l => l.classList.remove('active'));
    el.classList.add('active');

    // aktuelle Datei holen
    let file = window.location.pathname.split("/").pop();
    if (!file) file = "index.html";

    
    console.log("lang");
   window.location.href = `/Luis/${lang}/${file}`; 
     // window.location.href = `/${lang}/${file}`;
  });
});
