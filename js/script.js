
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

const images = [
    "../Images/HouseInside.jpg",
    "../Images/livingRoom.jpg",
    "../Images/windowFrame.jpg",
    "../Images/window.jpg"
    
];

let index = 0;

function update(){

    const left = (index - 1 + images.length) % images.length;
    const right = (index + 1) % images.length;

    document.getElementById("left").src = images[left];
    document.getElementById("center").src = images[index];
    document.getElementById("right").src = images[right];
}

document.querySelector(".next").onclick = () =>{
    index = (index + 1) % images.length;
    update();
};

document.querySelector(".prev").onclick = () =>{
    index = (index - 1 + images.length) % images.length;
    update();
};

update();
