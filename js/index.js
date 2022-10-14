const navbar = document.querySelector('.navbar');
const navlink = document.querySelector('.nav-link');
const navitem = document.querySelector('.nav-item');
window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset);
    if(y)
    console.log(y);
    if(y>150){
        navbar.style.backgroundColor = "rgb(226, 124, 60)";
        navitem.style.paddingLeft = "0px";
        navitem.style.paddingRight = "0px";
        navlink.style.color="black !important";
    }else{
        navbar.style.backgroundColor = "transparent";
    }
  })