let background = document.getElementById("imageholder2");
let image = document.getElementById("image");

let scrollplace = document.querySelector('#nav2container').getBoundingClientRect().top;
let scrollplacemerch = document.querySelector('#merchtitle').getBoundingClientRect().top;
let scrollshows = document.querySelector('#showstitle').getBoundingClientRect().top;

background.style.height = image.style.height;



function bounce(){
    document.getElementById("arrow").style.animation = "1s bounce";
    setTimeout(() => {
        document.getElementById("arrow").style.animation = "1s unbounce";
    }, 990);
    setTimeout((bounce), 2000);
}bounce();

function scrollingtobio(){
    window.scrollTo(0, window.innerHeight);
};

function scrollingtomerch(){
    window.scrollTo(0, window.innerHeight*2.3);
};

function scrollingtohome(){
    window.scrollTo(0, 0);
};

function scrollingtoshows(){
    window.scrollTo(0, window.innerHeight*30);
};

