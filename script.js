let block = document.getElementById("block");
let hole = document.getElementById("hole");

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150)
    hole.style.top = random + "px"
});

setInterval(function(){
       let characterTop = window.getComputedStyle()
},10)