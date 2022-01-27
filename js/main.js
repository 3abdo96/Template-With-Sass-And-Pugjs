// Toggle Menu
let menuBtn = document.querySelector(".header .container .toggle-menu");
let menuList = document.querySelector(".header .container ul");
menuBtn.addEventListener("click", function () { 
    menuList.classList.toggle("open");
})

// Show The Top Page Button 
let topBtn = document.querySelector(".top")
window.onscroll = function () { 
    window.scrollY >= 400 ? topBtn.style.display = "block" : topBtn.style.display = "none";
}

// Button To Page Top
topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behaviour: "smooth",
    })
}

// Load More Paragraphs
let loadPara = document.querySelector(".blog .container .comment span");
let paragraphs = document.querySelectorAll(".blog .container .comment p.hidden");
let currentPara = 0;
if (loadPara) {
    loadPara.addEventListener("click", function () {
        for (let i = currentPara; i < currentPara + 1; i++) {
            paragraphs[i].style.display = "block";
        }
        currentPara += 1;
        if (currentPara >= paragraphs.length) {
            loadPara.style.display = "none";
        }
    })
}