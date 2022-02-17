//add event listener on menu and close buttons 
var links = document.getElementById('links');
        var menuBtn = document.getElementById('menu-btn');
        var closeBtn = document.getElementById('close-btn');
        menuBtn.addEventListener('click',function(){
            links.style.right="0";
        });
        closeBtn.addEventListener('click',function(){
            links.style.right="-50vw"
        })



        
// add counter to stats section
let stats_section = document.querySelector('.stats');
let nums = document.querySelectorAll('.num');

// to trager the function one time only
let started = false;

window.onscroll=function(){
    if(window.scrollY >= stats_section.offsetTop){
        if(!started){
            nums.forEach(num=> startCount(num));
        }
        started = true;
    }
}

function startCount(elem){
    let goal = elem.dataset.goal;
    let counter = setInterval(()=>{
        elem.innerText++;
        if(elem.innerText == goal){
        clearInterval(counter);
    }
    },(2000 / goal))
    
}

// show to top arrow
let toTopArrow = document.querySelector('.fad')
let facilities_section = document.querySelector('.facilities')
window.onscroll=function(){
    if(window.scrollY >= facilities_section.offsetTop){
        toTopArrow.style.display="block";
    }
    else{
        toTopArrow.style.display="none";
    }
}
// add event to toToArrow
toTopArrow.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})//end ToTop event