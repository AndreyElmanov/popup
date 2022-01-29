const images = ["img/bird.svg", "img/cat.svg", "img/dog.svg"]

images.forEach(el => {
    const img = document.createElement("div");
    img.className = "mini__item";
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener("click", e => showPopup(`<img alt="pic" src="${el}">`));
    document.body.append(img);
});

const popup = document.querySelector(".popup");

const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

const closePopup = function(e) {
    if (e.target.tagName === "BODY" || e.target.className === "popup__close") {
    popup.classList.remove("popup_active");
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.body.style.overflow  = "auto";
    }
}

const showPopup = function(text) {
    popup.classList.add("popup_active");
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    popupContent.innerHTML = text;
    document.body.style.overflow  = "hidden";
}

const esc = function(e) {
    if (e.code === "KeyF") closePopup();
}

window.addEventListener("click", closePopup);
window.addEventListener("keydown", function(e) {
    if (e.code === "Escape")
    closePopup(e);
  });

let altIsPressed = false;

window.addEventListener("keydown", function(event){
    if(event.keyCode === 18) {
        altIsPressed = true;
        event.preventDefault();
    }
});

window.addEventListener("keyup", function(event){
    if(event.keyCode === 18) {
        altIsPressed = false;
        event.preventDefault();
    }
});

window.addEventListener("keydown", function(event){
    if(altIsPressed && (event.keyCode === 91 || event.keyCode === 115)) {
        event.preventDefault();
        closePopup();
    }    
});


// #hw1 link(git)
/*
1) при нажатии на поле вне картинки закрывать popup +++
2) предусмотреть возможность закрытия окошка по нажатию на кнопки (keyup/keydown): 
- esc +++ 
- alt+а4 (preventDefoult!!!)  
3) сделать интерфейс в виде lightbox - все элементы за popup становятся затемнёнными +++
*/ 