function menu() {
    let box = document.querySelector('input[type="checkbox"]');
    let burger = document.querySelector('.slider');
    let menu = document.querySelector('.links');
    
    if (box.checked) {
        menu.style.visibility = "visible";
        burger.style.backgroundImage = "url(images/icon-close.svg)";
    } else {
        menu.style.visibility = "hidden";
        burger.style.backgroundImage = "url(images/icon-hamburger.svg)";
    }

    
}