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



