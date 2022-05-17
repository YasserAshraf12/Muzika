//Local Storage To Save Color
let storedMainColor = localStorage.getItem('color-option');

if(storedMainColor !== null){
    document.documentElement.style.setProperty('--main-color--', storedMainColor);
}

//Random Variable for Background
let randomBackground = true;

//Image Switcher Interval
let images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];
let landingPage = document.querySelector(".landing-page");

// Interval Control
let intervalControl;

function randomizeBackground(){
    if(randomBackground === true){
        intervalControl = setInterval(()=>{
            let randomNum = Math.floor(Math.random() * images.length);
            landingPage.style.backgroundImage = 'url("images/' + images[randomNum] +'")';
        },5000);
    }
}

//Jquery
$(document).ready(function(){
    //Class Open Toggling
    $('.btn').click(()=>{
        $('.settings-box').toggleClass('open');
    });
});

//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e)=>{
        //Change Variable main Color
        document.documentElement.style.setProperty('--main-color--', e.target.dataset.color);

        //Set Color in Local Storage
        localStorage.setItem('color-option', e.target.dataset.color);

        //Active class
        e.target.parentElement.querySelectorAll('.active').forEach(liElm =>{
            liElm.classList.remove("active");
        });
        //Then Add New Active Class
        e.target.classList.add("active");
    });
});


//Local Storage For Font-Size
let storedFont = localStorage.getItem('font-option');
if(storedFont !== null){
    document.documentElement.style.setProperty('--main-nav-font--', storedFont);
}

//Switch Fonts
const fontLi = document.querySelectorAll(".font-control li");
fontLi.forEach(fLi =>{
    fLi.addEventListener("click", (e)=>{
        document.documentElement.style.setProperty('--main-nav-font--', e.target.dataset.font);
        localStorage.setItem('font-option', e.target.dataset.font);
        e.target.parentElement.querySelectorAll('.activeFont').forEach(liFElm =>{
        liFElm.classList.remove("activeFont");
    });
    //Then Add New Active Class
    e.target.classList.add("activeFont");
    });    
});

//Random Backgrounds Option
const randomBk = document.querySelectorAll(".random-background span");

randomBk.forEach(rElm =>{
    rElm.addEventListener("click", (e)=>{
        if(e.target.dataset.answer == "yes"){
            randomBackground = true;
            randomizeBackground();
        }
        else{
            randomBackground = false;
            clearInterval(intervalControl);
        }
        //Active class
        e.target.parentElement.querySelectorAll('.activeBk').forEach(rElm =>{
            rElm.classList.remove("activeBk");
        });
        //Then Add New Active Class
        e.target.classList.add("activeBk");
    });
});