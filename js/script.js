//nav 

function nav () {
    let ul = document.querySelector('.main-ul');
    let icon = document.querySelector('.burger');
    let nav = false;
    icon.addEventListener('click', () => {
if(!nav) {
    nav = true;
    document.querySelector('.main-ul').style.opacity = 1;
}else {
    nav = false;
   document.querySelector('.main-ul').style.opacity = 0; 
}
    });
}
nav();


function loader() {
    let load = document.querySelector('.loader');
    window.addEventListener('load', () => {
        document.querySelector('.loader').style.display = 'none';
    });
}
loader();